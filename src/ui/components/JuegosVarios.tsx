import damas from "../../assets/images/damas.png";
import parchis from "../../assets/images/parchis.png";
import ajedrez from "../../assets/images/ajedrez.png";
import { Link } from "react-router-dom";

type Props = {
  titulo?: string;
};

function JuegosVarios(props: Props) {
  const titulo = props.titulo !== undefined ? props.titulo : "Juegos";

  return (
    <div className="w-2/3 justify-center ml-72 text-white bg-leaderboard/70 p-10 rounded-lg">
      <div className="text-left mb-5 ml-4">
        <span className="text-white font-bold underline">{titulo}</span>
      </div>
      <div className="flex flex-wrap -m-4">
        {/* Juego Similar 1 */}
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
          <Link to="/game" className="block w-full  h-full  ">
            <div className="flex flex-col items-center">
              <img className="w-72 h-72" src={damas} alt="Damas" />
              <div className="text-center p-4">
                <p>DAMAS</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Juego Similar 2 */}
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
          <Link to="/game" className="block w-full h-full">
            <div className="flex flex-col items-center">
              <img className="w-72 h-72" src={parchis} alt="Parchis" />
              <div className="text-center p-4">
                <p>PARCHIS</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Juego Similar 3 */}
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
          <Link to="/game" className="block w-full  h-full">
            <div className="flex flex-col items-center">
              <img className="w-72 h-72" src={ajedrez} alt="Parchis" />
              <div className="text-center p-4">
                <p>AJEDREZ</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Juego Similar 4 */}
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
          <Link to="/game" className="block w-full h-full  ">
            <div className="flex flex-col items-center">
              <img className="w-72 h-72" src={ajedrez} alt="Parchis" />
              <div className="text-center p-4">
                <p>AJEDREZ</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Juego Similar 5 */}
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
          <Link to="/game" className="block w-full h-full">
            <div className="flex flex-col items-center">
              <img className="w-72 h-72" src={damas} alt="Parchis" />
              <div className="text-center p-4">
                <p>DAMAS</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Juego Similar 6 */}
        <div className="p-4 w-full sm:w-1/2 md:w-1/3">
          <Link to="/game" className="block w-full  h-full ">
            <div className="flex flex-col items-center">
              <img className="w-72 h-72" src={parchis} alt="Parchis" />
              <div className="text-center p-4">
                <p>PARCHIS</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JuegosVarios;
