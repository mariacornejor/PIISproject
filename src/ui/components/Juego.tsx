import React, { useState } from "react";
import { BsArrowsFullscreen, BsChatDots } from "react-icons/bs";
import damas from "../../assets/images/damas.png";
import parchis from "../../assets/images/parchis.png";
import ajedrez from "../../assets/images/ajedrez.png";
import Rating from "../../ui/components/Rating.tsx";
import Chat from "../../ui/components/Chat.tsx";

function Juego() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => setShowChat(!showChat);

  return (
    <section className="bg-background body-font relative">
      <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="py-5 lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          {/* Div modificado para el texto con z-index */}
          <div className="absolute top-0 left-0 right-0 text-left pt-2 z-sm:flex-nowrap flex-wrap10">
            <span className="text-white font-bold underline">
              Nombre del juego
            </span>
          </div>
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0 mt-10"
            title="map"
            src="http://185.236.248.96:3000/"
            style={{ zIndex: 1 }} // Asegurando que el iframe tenga un z-index menor
          ></iframe>
          <div className=" relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <div
                style={{
                  backgroundColor: "#1c1c1c",
                }}
              >
                <BsArrowsFullscreen
                  style={{
                    color: "#1E1E1EE5",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <div className="max-w-2xl mx-auto">
            <div className="bg-leaderboard p-4 max-w-md rounded-lg border shadow-md sm:p-8 ">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold leading-none text-white ">
                  Leaderboard
                </h3>
                <a
                  href="#"
                  className="text-sm font-medium text-white hover:underline "
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4 ">
                      <div className="text-white flex-shrink-0">
                        <p>1</p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                          alt="Bonnie image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate ">
                          dragon10
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-white ">
                        3467px
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-white flex-shrink-0">
                        <p>2</p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          elpistolas
                        </p>
                      </div>
                      <div className="inline-flex items-center text-white font-semibold">
                        2367px
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-white flex-shrink-0">
                        <p>3</p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                          alt="Michael image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          elmakina51
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-white">
                        367px
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-white flex-shrink-0">
                        <p>4</p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                          alt="Lana image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate ">
                          killer77
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-white">
                        59px
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-white flex-shrink-0">
                        <p>5</p>
                      </div>
                      <div className="flex-shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Thomas image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate ">
                          camper
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-white ">
                        <p>12px</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Componente Principal */}
      <div className="mx-auto px-5 py-8 flex">
        {/* Componente de Juegos Similares - Ocupando 2/3 del espacio */}
        <div className="w-2/3 text-white">
          <div className="text-left mb-5 ml-4">
            <span className="text-white font-bold underline">
              Similares a este juego
            </span>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Juego Similar 1 */}
            <div className="p-4 w-full sm:w-1/2 md:w-1/3">
              <div className="flex flex-col items-center">
                <img className="w-72 h-72" src={damas} alt="Damas" />
                <div className="text-center p-4">
                  <p>DAMAS</p>
                </div>
              </div>
            </div>
            {/* Juego Similar 2 */}
            <div className="p-4 w-full sm:w-1/2 md:w-1/3">
              <div className="flex flex-col items-center">
                <img className="w-72 h-72" src={parchis} alt="Parchis" />
                <div className="text-center p-4">
                  <p>PARCHIS</p>
                </div>
              </div>
            </div>
            {/* Juego Similar 3 */}
            <div className="p-4 w-full sm:w-1/2 md:w-1/3">
              <div className="flex flex-col items-center">
                <img className="w-72 h-72" src={ajedrez} alt="Parchis" />
                <div className="text-center p-4">
                  <p>AJEDREZ</p>
                </div>
              </div>
            </div>
            {/* Juego Similar 4 */}
            <div className="p-4 w-full sm:w-1/2 md:w-1/3">
              <div className="flex flex-col items-center">
                <img className="w-72 h-72" src={ajedrez} alt="Parchis" />
                <div className="text-center p-4">
                  <p>AJEDREZ</p>
                </div>
              </div>
            </div>
            {/* Juego Similar 5 */}
            <div className="p-4 w-full sm:w-1/2 md:w-1/3">
              <div className="flex flex-col items-center">
                <img className="w-72 h-72" src={damas} alt="Parchis" />
                <div className="text-center p-4">
                  <p>DAMAS</p>
                </div>
              </div>
            </div>
            {/* Juego Similar 6 */}
            <div className="p-4 w-full sm:w-1/2 md:w-1/3">
              <div className="flex flex-col items-center">
                <img className="w-72 h-72" src={parchis} alt="Parchis" />
                <div className="text-center p-4">
                  <p>PARCHIS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Noticias - Ocupando 1/3 del espacio restante */}
        <div className="w-1/3 px-4 pl-10 ">
          <div className="text-left mb-5">
            <span className="text-white font-bold underline">Descripción</span>
          </div>
          {/* Contenido de Noticias aquí */}
          <div className="bg-navground p-4 text-white">
            <p>
              Sumérgete en la emoción del póker con "Póker Estelar", donde las
              cartas se reparten y el juego se eleva en un emocionante viaje
              hacia la victoria. Experimenta la auténtica sensación de jugar al
              póker desde la comodidad de tu pantalla.
            </p>
            <br></br>
            <div className="flex flex-wrap space-x-2">
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
  );
}

export default Juego;
