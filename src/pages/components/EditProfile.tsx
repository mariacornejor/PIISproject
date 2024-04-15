import React, { useState, useEffect } from "react";
import Navbar from "../../ui/components/Navbar";
import Input from "../../ui/components/Input";
import fotoPerfil from "../../assets/images/perroHuman.webp";

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
          <h3 className="px-12 h-8 text-3xl absolute top-0 left-0 right-0 text-white text-center py-2 text-gray-900 font-semibold">
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
            {/** Parte del historial de rango */}

            {/** Parte de las estadisticas */}

            {/** Parte de los marcos */}

            {/** Parte de las pegatinas? para el chat? */}

      </div>
    </div>
  );
}

export default EditProfile;
