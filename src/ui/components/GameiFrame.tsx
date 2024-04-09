
import { BsArrowsFullscreen } from "react-icons/bs";
import React from "react";

type Props = {
  enlace? : string
  nombre? : string
}

function GameiFrame(props : Props) {

  const enlace = props.enlace !== undefined ? props.enlace : "http://185.236.248.96:3000/"

  const [score, setScore] = React.useState("0");

  const nombre = props.nombre !== undefined ? props.nombre : "Nombre del juego"

  const cookies = document.cookie;

  async function obtenerScore() {
    try {
      //console.log(token.split("=")[1]);
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
      //console.log("Console log");
      //console.log(data);
      if (response.ok) {
        // Aquí, asumo que 'data' contiene un campo que indica el tipo de usuario, por ejemplo 'tipoUsuario'
        return data.score; // O el campo correspondiente que indica el tipo de usuario
      } else {
        throw new Error(
          data.message || "Error al obtener la información del usuario"
        );
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Error al obtener el tipo de usuario";
      console.error(message);
      // Manejo adicional de errores si es necesario (por ejemplo, mostrar un mensaje al usuario)
    }
  }
  function getData(){
    if (cookies != "") {
      obtenerScore()
        .then((score) => {
          console.log("score: "+score); // Haz algo con el tipo de usuario, por ejemplo, actualizar la UI
          setScore(score);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  // Llamar a la función y manejar el resultado según sea necesario
  
  const intervalId = setInterval(getData, 3000);
  return (
    <div
    className="py-5 lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
    style={{ minHeight: "600px" }} // Añadiendo min-height aquí
  >
    {/* Div modificado para el texto con z-index */}
    <div className="absolute top-0 left-0 right-0 text-left z-sm:flex-nowrap flex-wrap10">
      <span className="text-white font-bold underline font-spartan ">
        {nombre}
      </span>
      <span className="text-white ml-10 font-bold font-spartan ">
        {score}
      </span>
    </div>
    <iframe
      width="100%"
      height="100%"
      className="absolute inset-0 mt-10"
      title="map"
      src={enlace}
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
  )
}

export default GameiFrame