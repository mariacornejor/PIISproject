import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

interface Juego {
  _id: string;
  gameDetails: {
    imageUrl: string;
    name: string;
    description: string;
    gameType: string;
  };
}

function JuegosVarios(props: any) {
  const [juegos, setJuegos] = useState<Juego[]>([]);

  useEffect(() => {
    const obtenerJuegos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/games'); // Especifica la URL completa del backend
        console.log('Juegos ', response.data)
        // Verifica si los datos recibidos son un array
        if (Array.isArray(response.data)) {
          // Verifica si la respuesta está vacía
          setJuegos(response.data)
          if (response.data.length === 0) {
            console.warn('La respuesta del servidor está vacía.');
          } else {
            setJuegos(response.data);
          }
        } else {
          console.error('Los datos recibidos no son un array:', response.data);
        }
      } catch (error) {
        console.error('Error al recuperar los juegos:', error);
      }
    };
  
    obtenerJuegos();
  }, []);

  return (
    <div className="w-2/3 justify-center m-auto text-white bg-leaderboard/70 p-10 rounded-lg">
      <div className="text-left mb-5 ml-4">
        <span className="text-white font-bold underline">{props.titulo || 'Juegos'}</span>
      </div>
      <div className="flex flex-wrap -m-4">
        {/* Mapear los juegos recuperados y renderizar los enlaces */}
        {juegos.map(juego => (
          <div key={juego._id} className="p-4 w-full sm:w-1/2 md:w-1/3">
            <Link to={`/game/${juego._id}`} className="block w-full h-full">
              <div className="flex flex-col items-center">
                <img className="w-72 h-72" src={juego.gameDetails.imageUrl} alt={juego.gameDetails.name} />
                <div className="text-center p-4">
                  <p>{juego.gameDetails.name}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JuegosVarios;
