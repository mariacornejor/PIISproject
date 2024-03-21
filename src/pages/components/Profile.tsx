import "react-multi-carousel/lib/styles.css";
import Navbar from "../../ui/components/Navbar";
import { Link } from "react-router-dom";
import fotoPerfil from "../../assets/images/perroHuman.webp";
import fotoLogro1 from "../../assets/images/vampiroPequeño.png";
import Recientesitems from "../../ui/components/Recientesitems";
import Logrositem from "../../ui/components/Logrositem";
import BarraNivel from "../../ui/components/BarraNivel";
import fotoVampiroGrande from "../../assets/images/vampiroGrande.png";
import fotoAtaud from "../../assets/images/ataud.png";
import fotoCompra from "../../assets/images/VampiroConBolso.png";
import fotoCalavera from "../../assets/images/calavera.png";
import fotoPoker from "../../assets/images/poker.png";
import fotoDamas from "../../assets/images/damas.png";
import fotoAjedres from "../../assets/images/ajedrez.png";
import fotoUno from "../../assets/images/uno.png";
import fotoParchis from "../../assets/images/parchis.png";
import fotoVampMedio from "../../assets/images/vampiroMedioGrande.png";
import fotoNosferatu from "../../assets/images/nosferatu.png";

import { FaPen } from "react-icons/fa";
import Comentarioitem from "../../ui/components/Comentarioitem";

function Profile() {
  return (
    <div className="background bg-background">
      <Navbar />
      <div className="grid gap-2 mb-2 md:grid-cols-1 w-3/4 m-auto">
        {/** Parte de la imagen izquierda*/}
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
          {/** Parte de la imagen derecha*/}
          <div className="ml-auto mr-10">
            <h3 className="text-2xl m-auto text-white  font-semibold">
              Rango mas alto
            </h3>
            <div className="w-24 mt-3 h-24 m-auto overflow-hidden rounded-xl border-2 relative right-0 shadow-lg">
              <img
                src={fotoNosferatu}
                alt=""
                className=" object-cover w-full h-full"
              />
            </div>
            <h3 className="text-center text-white m-auto font-semibold mt-3">
              Nosferatu
            </h3>
          </div>
        </div>

        {/** Parte del comentario */}
        <div className="content-center text-left">
          <h1 className="text-2xl px-12 flex max-w-50 flex-col my-4 text-white align-middle">
            Comentario
          </h1>
          <div className="relative py-10 bg-leaderboard rounded-lg content-center">
            <Comentarioitem></Comentarioitem>
          </div>
        </div>

        {/** Parte de la actividad reciente */}
        <div className="content-center text-left">
          <h1 className="text-2xl px-12 flex max-w-50 flex-col my-4 text-white align-middle">
            Actividad Reciente
          </h1>
          <div className="grid grid-cols-3 relative py-10 bg-leaderboard rounded-lg content-center">
            <Recientesitems
              src={fotoPoker}
              nombre="Poker"
              puntos={10823}
            ></Recientesitems>
            <Recientesitems
              src={fotoAjedres}
              nombre="Ajedres"
              puntos={2823}
            ></Recientesitems>
            <Recientesitems
              src={fotoParchis}
              nombre="Parchis"
              puntos={1003823}
            ></Recientesitems>
            <Recientesitems
              src={fotoDamas}
              nombre="Damas"
              puntos={53851}
            ></Recientesitems>
            <Recientesitems
              src={fotoUno}
              nombre="Uno"
              puntos={23}
            ></Recientesitems>
          </div>
        </div>

        {/** Posible parte de torneo XD (SIN HACER POR AHORA)*/}

        {/** Parte de los logros de plataforma */}
        <div className="content-center text-left">
          <h1 className="text-2xl px-12 flex max-w-50 flex-col my-4 text-white align-middle">
            Logros
          </h1>
          <Logrositem
            src={fotoLogro1}
            nombre="peque peque"
            descripcion="Has jugado a un juego por primera vez"
          ></Logrositem>
          <Logrositem
            src={fotoAtaud}
            nombre="No es el final"
            descripcion="Has perdido una partida"
          ></Logrositem>
          <Logrositem
            src={fotoCalavera}
            nombre="Adicción frenética"
            descripcion="Has conseguido tu primera sangre en un juego multijugador"
          ></Logrositem>
          <Logrositem
            src={fotoVampMedio}
            nombre="A la cima"
            descripcion="Has llegado al rango Goul en un juego"
          ></Logrositem>
          <Logrositem
            src={fotoCompra}
            nombre="Quien nada compra nada tiene"
            descripcion="Has utilizado la moneda de la pagina una vez"
          ></Logrositem>
          <Logrositem
            src={fotoVampiroGrande}
            nombre="Imparable"
            descripcion="Has llegado al rango Barón en un juego"
          ></Logrositem>
          <Logrositem
            src={fotoNosferatu}
            nombre="Rey de reyes"
            descripcion="Has llegado al rango Nosferatu en un juego"
          ></Logrositem>
        </div>
      </div>
    </div>
  );
}

export default Profile;
