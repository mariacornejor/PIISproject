import React from 'react';
import GameiFrame from "../../ui/components/GameiFrame.tsx";
import Navbar from "../../ui/components/Navbar";
import Rating from "../../ui/components/Rating.tsx";
import Chat from "../../ui/components/Chat.tsx";
import Secondbar from "../../ui/components/Secondbar";
import banner from "../../assets/images/banner.png";
import gameImage from "../../assets/images/juego.png"; 

function GamePage() {
  return (
    <div className="bg-background">
      <Navbar />
      <img className="banner" src={banner} />
      <section className="body-font relative">
        <Secondbar />
        <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
          <GameiFrame />
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div className="max-w-2xl mx-auto">
              {/* Sección de Explicación del Juego */}
              <div className="bg-leaderboard p-4 max-w-md rounded-lg border shadow-md sm:p-8 ">
                <h3 className="text-xl font-bold leading-none text-white mb-4">
                  Cómo Jugar
                </h3>
                <p className="text-white mb-4">
                  Aquí va la explicación de cómo jugar al juego.
                </p>
                <img className="w-full mb-4" src={gameImage} alt="Game Preview" />
                {/* Agrega cualquier otro contenido relevante */}
              </div>
              
              {/* Leaderboard */}
              <div className="bg-leaderboard p-4 max-w-md rounded-lg border shadow-md sm:p-8 mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold leading-none text-white">
                    Leaderboard
                  </h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-white hover:underline"
                  >
                    View all
                  </a>
                </div>
                <div className="flow-root">
                  <ul role="list" className="divide-y divide-gray-200">
                    {/* Contenido de la leaderboard */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Juegos Similares y Sección de Noticias */}
        <div className="mx-auto px-5 py-8 flex">
          <div className="w-2/3 text-white">
            <div className="text-left mb-5 ml-4">
              <span className="text-white font-bold underline font-spartan">
                Similares a este juego
              </span>
            </div>
            <div className="flex flex-wrap -m-4">
              {/* Contenido de juegos similares */}
            </div>
          </div>
          <div className="w-1/3 px-4 pl-10 ">
            <div className="text-left mb-5">
              <span className="text-white font-bold underline font-spartan">
                Descripción
              </span>
            </div>
            <div className="bg-navground p-4 text-white">
              <p>
                Sumérgete en la emoción del póker con "Póker Estelar", donde las
                cartas se reparten y el juego se eleva en un emocionante viaje
                hacia la victoria. Experimenta la auténtica sensación de jugar
                al póker desde la comodidad de tu pantalla.
              </p>
              <br />
              <div className="flex flex-wrap space-x-2 ">
                <p>Valoración del juego: </p>
                <Rating />
              </div>
              <p>Fecha de lanzamiento: 19/09/2018</p>
            </div>
          </div>
        </div>

        {/* Icono de Chat en la parte inferior derecha */}
        <Chat />
      </section>
    </div>
  );
}

export default GamePage;