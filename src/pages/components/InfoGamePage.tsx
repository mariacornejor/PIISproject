import React, { useState, useEffect } from 'react';
import Navbar from "../../ui/components/Navbar";
import Rating from "../../ui/components/Rating.tsx";
import juegoImage from "../../assets/images/tic-tac-toe.jpg";
import damas from "../../assets/images/damas.png";
import parchis from "../../assets/images/parchis.png";
import ajedrez from "../../assets/images/ajedrez.png";
import OnLoadPopUP from "../../ui/components/OnLoadPopUP";

function InfoGamePage() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // This will trigger the challenge popup after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const juegoExplicacion = `TicTacToe, o 'Tres en raya', es un juego clásico y simple donde dos jugadores alternan marcando espacios en una grilla de 3x3 con sus símbolos respectivos (X y O). El objetivo es formar una línea de tres símbolos consecutivos vertical, horizontal o diagonalmente. Fecha de lanzamiento: 19/09/2018. Ideal para desarrollar habilidades de pensamiento estratégico y previsión. Aunque las reglas son simples, las tácticas para ganar pueden ser complejas.`;

  const youtubeVideoId = 'ndenXpxSA9A';
  const videoUrl = `https://www.youtube.com/embed/${youtubeVideoId}?rel=0`;

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleChallengeClick = () => {
    alert(`Has retado a ${selectedPlayer.name}!`);
    setSelectedPlayer(null);
  };

  const leaderboard = () => (
    <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg" style={{ maxWidth: '400px', marginLeft: '20px' }}>
      <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {[
          { name: "dragon10", score: "3467px", image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg" },
          { name: "elpistolas", score: "2367px", image: "https://flowbite.com/docs/images/people/profile-picture-1.jpg" },
          { name: "elmakina51", score: "367px", image: "https://flowbite.com/docs/images/people/profile-picture-2.jpg" },
          { name: "carlos", score: "120px", image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg" },
          { name: "camper", score: "12px", image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg" }
        ].map((player, index) => (
          <li key={index} className="py-4 flex items-center justify-between">
            <div className="flex items-center cursor-pointer" onClick={() => handlePlayerClick(player)}>
              <img className="w-10 h-10 rounded-full mr-4" src={player.image} alt={`${player.name} image`} />
              <span className="mr-2 text-lg">{index + 1}. {player.name}</span>
            </div>
            <span className="text-lg">{player.score}</span>
            {selectedPlayer?.name === player.name && (
              <button onClick={handleChallengeClick} className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Retar
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-background">
      <Navbar />
      <OnLoadPopUP isOpen={isOpen} setIsOpen={setIsOpen} title_p="NUEVO RETO" description_p="Te ha retado PacoArcas79"/>
      <div className="container mx-auto px-5 py-24 flex justify-between items-center">
        <img className="rounded-lg" alt="Game" src={juegoImage} style={{ width: '70%', height: 'auto' }} />
        {leaderboard()}
      </div>
      <div className="container mx-auto px-5 py-12 flex justify-between">
        <iframe
          width="48%"
          height="450"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        ></iframe>
        <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg" style={{ width: '48%' }}>
          <h1 className="text-3xl font-bold mb-4">Cómo Jugar a TicTacToe</h1>
          <p className="mb-4">{juegoExplicacion}</p>
          <Rating />
        </div>
      </div>
      <div className="mx-auto px-5 py-8 flex">
        <div className="w-2/3 text-white">
          <div className="text-left mb-5 ml-4">
            <span className="text-white font-bold underline font-spartan">
              Similares a este juego
            </span>
          </div>
          <div className="flex flex-wrap -m-4">
            {[damas, parchis, ajedrez, ajedrez, damas, parchis].map((image, index) => (
              <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3">
                <div className="flex flex-col items-center">
                  <img className="w-72 h-72" src={image} alt={`Similar Game ${index}`} />
                  <div className="text-center p-4">
                    <p>{["Damas", "Parchis", "Ajedrez", "Ajedrez", "Damas", "Parchis"][index]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoGamePage;