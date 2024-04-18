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
import React, { useState, useEffect } from "react";
import BtnPopUp from "../../ui/components/BtnPopUp";
import ListaDeUsuarios from "../../ui/components/ListaUsuarios";
import perfil1 from "../../assets/images/perro1.jpg";
import perfil2 from "../../assets/images/perro2.jpg";
import perfil3 from "../../assets/images/perr3.jpg";

type Props = {
  point?: number;
  type?: string;
  userName?: string;
};

type User = {
  nivel: number;
  pNivel: number;
};

type Amigo = {
  fotoperfil: string;
  username: string;
  email: string;
  nivel: string;
  rango: string;
  fotorango: string;
};

function Profile(props: Props) {
  const cookies = document.cookie;
  const [userData, setUserData] = useState<User | null>(null);
  const [amigos, setAmigos] = useState<Amigo[]>([]); // Lista de amigos
  const [mostrarUltimoLogro, setMostrarUltimoLogro] = useState(false); // Estado para controlar la visualización del último logro

  useEffect(() => {
    obtenerUsuarioPerfil();
    obtenerListaAmigos();
  }, []);

  async function obtenerUsuarioPerfil() {
    try {
      let token = cookies.split("=")[1];
      if (!token) {
        throw new Error("No se encontró el token del usuario");
      }

      // Realizar una solicitud al endpoint que retorna la información del usuario basándose en el token
      const response = await fetch("http://localhost:3000/api/profile", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setUserData(data);
      } else {
        throw new Error(
          data.message || "Error al obtener la información del usuario"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      // Manejo adicional de errores si es necesario (por ejemplo, mostrar un mensaje al usuario)
    }
  }

  async function obtenerListaAmigos() {
    // Lógica para obtener la lista de amigos desde el backend
    try {
      // Simulación de datos de amigos
      const amigosData: Amigo[] = [
        {
          fotoperfil: perfil1,
          username: "bel",
          email: "bel1@gmail.com",
          nivel: "Nivel 53",
          rango: "Barón",
          fotorango: fotoVampiroGrande,
        },
        {
          fotoperfil: perfil2,
          username: "vic",
          email: "vicct@gmail.com",
          nivel: "Nivel 32",
          rango: "Goul",
          fotorango: fotoVampMedio,
        },
        {
          fotoperfil: perfil3,
          username: "aitor",
          email: "aitorcito@gmail.com",
          nivel: "Nivel 25",
          rango: "Goul",
          fotorango: fotoVampMedio,
        },
        // Agrega más amigos si es necesario
      ];
      setAmigos(amigosData);
    } catch (error) {
      console.error("Error al obtener la lista de amigos:", error);
    }
  }

  async function actualizarComentario(comentario: string) {
    try {
      // Realizar una solicitud al endpoint para actualizar el comentario en el backend
      const response = await fetch(
        "http://localhost:3000/api/profile/comentario",
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ comentario }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("Comentario actualizado exitosamente");
        // Actualizar el estado del usuario con el nuevo comentario
        setUserData((prevUserData) => {
          if (prevUserData) {
            return { ...prevUserData, comentario };
          }
          return prevUserData;
        });
      } else {
        throw new Error(
          data.message || "Error al actualizar el comentario del usuario"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      // Manejo adicional de errores si es necesario (por ejemplo, mostrar un mensaje al usuario)
    }
  }

  const handleClickVerUltimoLogro = () => {
    setMostrarUltimoLogro(true);
  };

  const handleCloseUltimoLogro = () => {
    setMostrarUltimoLogro(false);
  };

  return (
    <div className="background bg-background">
      <Navbar />
      <div className="grid gap-2 mb-2 md:grid-cols-1 w-3/4 m-auto">
        {userData && (
          <>
            {/** Parte del encabezado */}
            <div className="bg-leaderboard items-center relative py-5 mt-10 rounded-lg flex justify-start text-left">
              <div className="w-36 h-36 ml-10 overflow-hidden rounded-xl border-2 relative right-0 shadow-lg">
                <img src={fotoPerfil} alt="" className="w-full h-auto" />
              </div>
              <div className="text-left px-12 min-w-96">
                <div className="flex ">
                  <h3 className="text-3xl text-white  font-semibold">
                    {userData.username}
                  </h3>
                  <button className="ml-10 top-12 left-13 right-10 z-20 text-sm rounded border-2 border-white bg-white py-1 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                    <Link
                      to="/EditProfile"
                      className="w-full text-background h-full flex items-center justify-center"
                    >
                      <p className="flex items-center gap-1">
                        <FaPen />
                      </p>
                    </Link>
                  </button>
                </div>

                <p className=" text-white mb-8">En linea</p>
                <BarraNivel
                  nivel={userData.nivel}
                  porcentaje={userData.pNivel}
                />
              </div>
              {/** Parte de la imagen derecha del encabezado*/}
              <div className="ml-auto mr-10">
                <h3 className="text-2xl m-auto text-white  font-semibold">
                  Rango más alto
                </h3>
                <div className="w-24 mt-3 h-24 m-auto overflow-hidden rounded-xl border-2 relative right-0 shadow-lg">
                  <img
                    src={fotoNosferatu}
                    alt=""
                    className=" object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-center text-white m-auto font-semibold mt-3 font-mono">
                  Nosferatu
                </h3>
              </div>
            </div>

            {/** Parte de los amigos */}
            <div className="content-center text-left">
              <h1 className="text-2xl px-12 flex max-w-50 flex-col my-4 text-white align-middle">
                Amigos
              </h1>
              <div className="bg-leaderboard py-5 px-8 mt-10 rounded-lg flex flex-col">
                <div className="grid gap-4">
                  {/* Datos de amigos */}
                  {amigos.map((amigo, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 relative content-center"
                    >
                      <div className="w-16 h-16 overflow-hidden rounded-full">
                        <img
                          src={amigo.fotoperfil}
                          alt="Foto de perfil"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-white font-semibold text-2xl">
                          {amigo.username}
                        </h4>
                        {amigo.nivel}
                        <p className="text-gray-300">{amigo.email}</p>
                      </div>
                      <div className="text-white font-semibold overflow-hidden rounded-md font-mono">
                        <img
                          src={amigo.fotorango}
                          alt="Foto de perfil"
                          className="w-12 h-12 object-cover"
                        />
                        {amigo.rango}
                      </div>
                      {/* Botón "Retar" */}
                      <BtnPopUp
                        nombre_boton="Retar"
                        titulo_popup={`¡Reto Enviado a ${amigo.username}!`}
                        descripcion_popup={`Has enviado un reto a ${amigo.username}.`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/** Parte del comentario */}
            <div className="content-center text-left">
              <h1 className="text-2xl px-12 flex max-w-50 flex-col my-4 text-white align-middle">
                Comentario
              </h1>
              <div className="relative py-10 bg-leaderboard rounded-lg content-center">
                <Comentarioitem
                  comentario={userData.comentario}
                  onSubmitComentario={actualizarComentario}
                />
              </div>
            </div>

            {/** Parte de la actividad reciente */}
            <div className="content-center text-left">
              <h1 className="text-2xl px-12 flex max-w-50 flex-col my-4 text-white align-middle">
                Actividad Reciente
              </h1>
              <div className="grid grid-cols-3 relative py-10 bg-leaderboard rounded-lg content-center">
                <Recientesitems src={fotoPoker} nombre="Poker" puntos={10823} />
                <Recientesitems
                  src={fotoAjedres}
                  nombre="Ajedres"
                  puntos={2823}
                />
                <Recientesitems
                  src={fotoParchis}
                  nombre="Parchis"
                  puntos={1003823}
                />
                <Recientesitems src={fotoDamas} nombre="Damas" puntos={53851} />
                <Recientesitems src={fotoUno} nombre="Uno" puntos={23} />
              </div>
            </div>

            {/** Parte de los logros de plataforma */}
            <div className="content-center text-left">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-2xl px-12 flex max-w-50 flex-col my-4 text-white align-middle">
                  Logros
                </h1>
                <button
                  type="submit"
                  style={{
                    width: "25%",
                    padding: "1rem",
                    backgroundColor: "#b85c5c",
                    color: "white",
                    borderRadius: "7px",
                    cursor: "pointer",
                    fontFamily: "Montserrat",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginTop: "1.8rem", // Reduce el margen superior para acercar el botón al título
                    marginRight: "1rem", // Ajusta el margen derecho según tu diseño
                    marginBottom: "2rem",
                  }}
                  onClick={handleClickVerUltimoLogro}
                >
                  VER ÚLTIMO LOGRO
                </button>
              </div>

              {/* Caja de diálogo para mostrar el último logro */}
              {mostrarUltimoLogro && (
                <div
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#5c1414",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <h2 style={{ fontFamily: "Montserrat", color: "white" }}>
                      Último logro desbloqueado:
                    </h2>
                    <p style={{ fontFamily: "Montserrat", color: "white" }}>
                      Rey de Reyes
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        className="object-cover"
                        src={fotoNosferatu}
                        alt="Logro"
                        style={{
                          width: "100px",
                          height: "100px",
                          marginBottom: "10px",
                          marginTop: "20px",
                          borderRadius: "70px",
                        }}
                      />
                      <h2
                        style={{
                          fontFamily: "Montserrat",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        Nivel actual: Nosferatu
                      </h2>
                      <button
                        type="button"
                        onClick={handleCloseUltimoLogro}
                        style={{
                          fontWeight: "bold",
                          fontFamily: "Montserrat",
                          backgroundColor: "#d46a6a",
                          color: "white",
                          padding: "0.5rem 1rem",
                          borderRadius: "5px",
                          border: "none",
                          cursor: "pointer",
                          marginTop: "1rem",
                        }}
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <Logrositem
                src={fotoLogro1}
                nombre="peque peque"
                descripcion="Has jugado a un juego por primera vez"
              />
              <Logrositem
                src={fotoAtaud}
                nombre="No es el final"
                descripcion="Has perdido una partida"
              />
              <Logrositem
                src={fotoCalavera}
                nombre="Adicción frenética"
                descripcion="Has conseguido tu primera sangre en un juego multijugador"
              />
              <Logrositem
                src={fotoVampMedio}
                nombre="A la cima"
                descripcion="Has llegado al rango Goul en un juego"
              />
              <Logrositem
                src={fotoCompra}
                nombre="Quien nada compra nada tiene"
                descripcion="Has utilizado la moneda de la página una vez"
              />
              <Logrositem
                src={fotoVampiroGrande}
                nombre="Imparable"
                descripcion="Has llegado al rango Barón en un juego"
              />
              <Logrositem
                src={fotoNosferatu}
                nombre="Rey de reyes"
                descripcion="Has llegado al rango Nosferatu en un juego"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
