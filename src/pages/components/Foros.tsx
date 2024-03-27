import React, { useState } from "react";
import Navbar from "../../ui/components/Navbar";
import banner from "../../assets/images/banner.png";
import Secondbar from "../../ui/components/Secondbar";
import userAvatar1 from "../../assets/images/perfilforo.webp";
import userAvatar2 from "../../assets/images/lolforo.jpg";
import userAvatar3 from "../../assets/images/foroperfil2.jpeg";
import userAvatar4 from "../../assets/images/perfilpayaso.png";
import postImage1 from "../../assets/images/nvl50.jpg";
import postImage2 from "../../assets/images/ajedrezforo.png";
import postImage3 from "../../assets/images/bugforo.webp";
import "../../ui/css/Foros.css"; 

function Foros() {
  const [posts, setPosts] = useState([
    {
      userAvatar: userAvatar1,
      username: "EpicGamer99",
      timestamp: "Hace 5 minutos",
      message: "¡Acabo de alcanzar el nivel 50 en el último juego de rol que he estado jugando! ¿Alguien más ha llegado tan lejos?",
      image: postImage1,
    },
    {
      userAvatar: userAvatar2,
      username: "SpeedRunnerX",
      timestamp: "Hace 1 hora",
      message: "He encontrado un bug en el último parche de actualización del juego de disparos. ¿Alguien más ha experimentado esto?",
      image: postImage3,
    },
    {
      userAvatar: userAvatar3,
      username: "QuestMaster",
      timestamp: "Hace 3 horas",
      message: "¡Estoy buscando nuevos amigos para jugar en línea! Si te gusta jugar en equipo, agrégame como amigo y juguemos juntos.",
    },
    {
      userAvatar: userAvatar4,
      username: "RetroGamer87",
      timestamp: "Hace 5 horas",
      message: "Recientemente descubrí un juego retro increíble. Es una joya oculta que merece más atención. ¡Deberías probarlo si te gustan los clásicos!",
    },
    {
      userAvatar: userAvatar1,
      username: "EpicGamer99",
      timestamp: "Hace 1 día",
      message: "He estado debatiendo con algunos amigos sobre cuál es el mejor personaje en el último juego de lucha. ¿Cuál es tu opinión?",
    },
    {
      userAvatar: userAvatar2,
      username: "SpeedRunnerX",
      timestamp: "Hace 2 días",
      message: "¿Qué os parece la jugada que hize en mi partida de ajedrez de ayer?",
      image: postImage2,
    },
    {
      userAvatar: userAvatar3,
      username: "QuestMaster",
      timestamp: "Hace 3 días",
      message: "¡Acabo de completar una misión épica en mi juego de aventuras favorito! No puedo esperar para ver qué sucede después.",
    },
    {
      userAvatar: userAvatar4,
      username: "RetroGamer87",
      timestamp: "Hace 4 días",
      message: "He estado jugando un juego indie recientemente y estoy impresionado por el arte pixelado. ¿Alguien más aprecia el arte retro en los juegos?",
    },
  ]);

  return (
    <div>
      <Navbar />
      <div className="extra-space"></div> 
      <img className="banner" src={banner} alt="Banner de la página de foros" />
      <div className="bg-background body-font relative justify-center">
        <Secondbar />
        <div className="forum-container">
          {posts.map((post) => (
            <div key={post.username} className="post">
              <div className="user-info">
                <img className="user-avatar" src={post.userAvatar} alt="Avatar del usuario" />
                <div className="username-timestamp">
                  <p className="username">{post.username}</p>
                  <div className="timestamp">{post.timestamp}</div>
                </div>
              </div>
              <div className="extra-space-user"></div> 
              <div className="post-content">{post.message}</div>
              {post.image && <img className="forum-image" src={post.image} alt="Imagen del foro" />}
              <div className="separator-short"></div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Foros;