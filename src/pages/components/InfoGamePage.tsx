import React from 'react';
import Navbar from "../../ui/components/Navbar";
import Secondbar from "../../ui/components/Secondbar";
import Chat from "../../ui/components/Chat.tsx";
import Rating from "../../ui/components/Rating.tsx";
import juegoImage from "../../assets/images/poker.png";  
type InfoGamePageProps = {
  gameImageUrl?: string; 
};

function InfoGamePage({ gameImageUrl = juegoImage }: InfoGamePageProps) {
  const juegoExplicacion = "Aquí explicaremos cómo funciona el juego.";
  const youtubeVideoId = 'ndenXpxSA9A';  
  const videoUrl = `https://www.youtube.com/embed/${youtubeVideoId}?rel=0`; 

  return (
    <div className="bg-background">
      <Navbar />
      <Secondbar />
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="Game" src={gameImageUrl} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Explicación del Juego
          </h1>
          <p className="mb-8 leading-relaxed">
            {juegoExplicacion}
          </p>
          <Rating />
        </div>
      </div>
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default InfoGamePage;