import React, { useState, useEffect } from "react";
import Navbar from "../../ui/components/Navbar";
import Input from "../../ui/components/Input";
import fotoPerfil from "../../assets/images/perroHuman.webp";
import fotoVampMedio from "../../assets/images/vampiroMedioGrande.png";
import fotoNosferatu from "../../assets/images/nosferatu.png";
import fotoVampiroGrande from "../../assets/images/vampiroGrande.png";
import fotoLogro1 from "../../assets/images/vampiroPequeño.png";
import fotomarco1 from "../../assets/images/marco1.png";
import fotomarco2 from "../../assets/images/marco2.png";
import fotomarco3 from "../../assets/images/marco3.jpg";
import fotomarco4 from "../../assets/images/marco4.jpg";
import fotomarco5 from "../../assets/images/marco5.jpg";
import fotomarco6 from "../../assets/images/marco6.jpg";
import fotosticker1 from "../../assets/images/sticker1.jpg";
import fotosticker2 from "../../assets/images/sticker2.jpg";
import fotosticker3 from "../../assets/images/sticker3.jpg";
import fotosticker4 from "../../assets/images/sticker4.webp";
import fotosticker5 from "../../assets/images/sticker5.jpg";
import fotosticker6 from "../../assets/images/sticker6.jpg";
import fotosticker7 from "../../assets/images/sticker7.jpg";

function EditProfile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    obtenerDatosPerfil();
  }, []);

  async function obtenerDatosPerfil() {
    try {
      // Realizar una solicitud al backend para obtener los datos del perfil del usuario
      const response = await fetch("http://localhost:3000/api/profile", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setUsername(data.username);
        setEmail(data.email);
      } else {
        throw new Error(
          data.message || "Error al obtener los datos del perfil del usuario"
        );
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleImageChange(event) {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      setProfileImage(e.target.result);
    };

    reader.readAsDataURL(selectedImage);
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="background bg-background pb-36">
      <Navbar />
      <div className="grid gap-1 mb-1 md:grid-cols-2">
        {/** Parte de la info privada */}
        <div className="relative py-10 m-3 mt-10 ml-8 bg-leaderboard rounded-lg content-center">
          <h1 className="h-8 text-3xl px-12 flex max-w-50 flex-col my-4 text-white">
            Perfil de Usuario
          </h1>
          <div className="px-12 flex max-w-96 flex-col gap-2 text-white">
            <form action="" method="post">
              <Input titulo="Username" valorPredefinido={username}></Input>
              <Input titulo="Email" valorPredefinido={email}></Input>
              <label htmlFor="profileImage" className="text-white">
                Cambiar imagen de perfil
              </label>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handleImageChange}
              />
              <button className="ml-0 mt-10 top-12 left-13 right-10 z-20 text-sm rounded border-2 border-white bg-white py-1 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
                Aceptar
              </button>
            </form>
          </div>
          <p className="text-white h-8  px-12 flex max-w-50 flex-col my-4">
            Guardamos los siguientes datos privados relacionados con tu cuenta.
            <br />
            Sólo tú, el dueño de la cuenta, puedes verlos
          </p>
        </div>

        {/** Parte de la imagen */}
        <div className="relative py-10 m-3 mt-10 mr-8 rounded-lg items-center flex justify-center">
          <h3 className="px-12 h-8 text-3xl absolute top-0 left-0 right-0 text-white text-center py-2 text-gray-900 font-semibold object-cover">
            {username}
          </h3>
          <div className="w-96 h-96 overflow-hidden rounded-xl border-2 border-gray-300 shadow-lg relative">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Imagen de perfil"
                className="w-full h-auto"
              />
            ) : (
              <img
                src={fotoPerfil}
                alt="Imagen de perfil"
                className="w-full h-auto"
              />
            )}
          </div>
        </div>

        {/** Parte de las estadisticas */}
      </div>

      {/** Parte del historial de rango */}
      <div className="relative py-10 m-3 mt-10 ml-8 mr-8 bg-leaderboard rounded-lg content-center flex">
        <h1 className="h-8 text-3xl px-12 flex max-w-50 flex-col my-4 text-white">
          Historial de Rango
        </h1>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotoLogro1}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold">Vampiro Menor</div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotoVampMedio}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold">Goul</div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotoVampiroGrande}
            alt="peque peque"
            className="w-32 h-32rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold">Barón</div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotoNosferatu}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold">Nosferatu</div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
      </div>
      {/** Parte de los marcos */}

      <div className="relative py-10 m-3 mt-10 ml-8 mr-8 bg-leaderboard rounded-lg content-center flex">
        <h1 className="h-8 text-3xl px-12 flex max-w-50 flex-col my-4 text-white">
          Marcos
        </h1>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotomarco1}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotomarco2}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotomarco3}
            alt="peque peque"
            className="w-32 h-32rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotomarco4}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotomarco5}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotomarco6}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
      </div>
      {/** Parte de las pegatinas? para el chat?*/}
      <div className="relative py-10 m-3 mt-10 ml-8 mr-8 bg-leaderboard rounded-lg content-center flex">
        <h1 className="h-8 text-3xl px-12 flex max-w-50 flex-col my-4 text-white">
          Pegatinas
        </h1>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotosticker1}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotosticker2}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotosticker3}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotosticker4}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotosticker5}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotosticker6}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
        <div className="bg-leaderboard text-white p-3 rounded-lg shadow-md flex  flex-col items-center space-y-2 m-4">
          <img
            src={fotosticker7}
            alt="peque peque"
            className="w-32 h-32 rounded-2xl object-cover pl-1 ml-1"
          />
          <div className="text-left">
            <div className="text-xl font-bold"></div>
            <div className="text-sm text-center">Conseguido</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
