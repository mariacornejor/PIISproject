import "react-multi-carousel/lib/styles.css";
import Navbar from "../../ui/components/Navbar";
import { Link } from "react-router-dom";
import fotoPerfil from "../../assets/images/perroHuman.webp";
import fotoLogro1 from "../../assets/images/vampiroPequeño.png";
import Recientesitems from "../../ui/components/Recientesitems";
import Logrositem from "../../ui/components/Logrositem";
import BarraNivel from "../../ui/components/BarraNivel";
import fotoNosferatu from "../../assets/images/vampiroGrande.png";
import { FaPen } from "react-icons/fa";
import Comentarioitem from "../../ui/components/Comentarioitem";

function Profile() {
  return (
    <div className="background bg-background">
      <Navbar />
      <div className="grid gap-2 mb-2 md:grid-cols-1 w-3/4 m-auto">
        {/** Parte de la imagen */}
        <div className="bg-leaderboard items-center relative py-5  mt-10 rounded-lg flex justify-start text-left">
          <div className="w-36 h-36 ml-10 overflow-hidden rounded-xl border-2 relative right-0 shadow-lg">
            <img src={fotoPerfil} alt="" className="w-full h-auto" />
          </div>
          <div className="text-left px-12 min-w-96">
            <div className="flex ">
              <h3 className="text-3xl text-white  font-semibold">COCO LOCO</h3>
              <button className="ml-10 top-12 left-13 right-10 z-20 text-sm rounded border-2 border-white bg-white py-1 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                <Link
                  to="/edit"
                  className="w-full text-background h-full flex items-center justify-center"
                >
                  <p className="flex items-center gap-1">
                    <FaPen />
                  </p>
                </Link>
              </button>
            </div>

            <p className=" text-white mb-8">En linea</p>
            <BarraNivel nivel={2} porcentaje={35}></BarraNivel>
          </div>
          <div className="ml-auto mr-10">
            <h3 className="text-2xl m-auto text-white  font-semibold">
              Rango mas alto
            </h3>
            <div className="w-24 mt-3 h-24 m-auto overflow-hidden rounded-xl border-2 relative right-0 shadow-lg">
              <img src={fotoNosferatu} alt="" className="w-full h-auto" />
            </div>
            <h3 className="text-center text-white m-auto font-semibold mt-3">
              Nosferatu
            </h3>
          </div>
        </div>

        {/** Parte del comentario */}
        <div className="relative py-10 bg-leaderboard rounded-lg content-center">
          <Comentarioitem></Comentarioitem>
        </div>

        {/** Parte de la actividad reciente */}
        <div className="content-center text-center">
          <h1 className="text-2xl px-12 flex max-w-50 flex-col my-4 text-white align-middle">
            Actividad Reciente
          </h1>
          <div className="grid grid-cols-3 relative py-10 bg-leaderboard rounded-lg content-center">
            <Recientesitems
              src={fotoLogro1}
              nombre="Poker"
              puntos={273823}
            ></Recientesitems>
            <Recientesitems
              src={fotoLogro1}
              nombre="Poker"
              puntos={273823}
            ></Recientesitems>
            <Recientesitems
              src={fotoLogro1}
              nombre="Poker"
              puntos={273823}
            ></Recientesitems>
            <Recientesitems
              src={fotoLogro1}
              nombre="Poker"
              puntos={273823}
            ></Recientesitems>
            <Recientesitems
              src={fotoLogro1}
              nombre="Poker"
              puntos={273823}
            ></Recientesitems>
          </div>
        </div>

        {/** Posible parte de torneo XD (SIN HACER POR AHORA)*/}

        {/** Parte de los logros de plataforma */}
        <div className="content-center text-center">
          <h1 className="text-2xl px-12 flex max-w-50 flex-col my-4 text-white align-middle">
            Logros
          </h1>
          <Logrositem
            src={fotoLogro1}
            nombre="peque peque"
            descripcion="pepe comio un caballo"
          ></Logrositem>
          <Logrositem
            src={fotoLogro1}
            nombre="peque peque"
            descripcion="pepe comio un caballo"
          ></Logrositem>
        </div>
      </div>
    </div>
  );
}

export default Profile;
