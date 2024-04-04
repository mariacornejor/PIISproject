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
      id: 1,
      userAvatar: userAvatar1,
      username: "EpicGamer99",
      timestamp: "Hace 5 minutos",
      message: "¡Acabo de alcanzar el nivel 50 en el último juego de rol que he estado jugando! ¿Alguien más ha llegado tan lejos?",
      image: postImage1,
      responses: [
        {
          userAvatar: userAvatar2,
          username: "SpeedRunnerX",
          timestamp: "Hace 3 minutos",
          message: "¡Felicidades! Eso es impresionante. Yo estoy en el nivel 48, ¡casi llego!",
        },
        {
          userAvatar: userAvatar3,
          username: "QuestMaster",
          timestamp: "Hace 2 minutos",
          message: "Wow, eso es asombroso. Estoy en el nivel 30, pero me esfuerzo por alcanzarte.",
        },
        {
          userAvatar: userAvatar4,
          username: "RetroGamer87",
          timestamp: "Hace 1 minuto",
          message: "Eso es genial, EpicGamer99. Estoy atrapado en el nivel 25, ¡pero estoy trabajando en ello!",
        }
      ]
    },
    {
      id: 2,
      userAvatar: userAvatar2,
      username: "SpeedRunnerX",
      timestamp: "Hace 1 hora",
      message: "He encontrado un bug en el último parche de actualización del juego de disparos. ¿Alguien más ha experimentado esto?",
      image: postImage2,
      responses: [
        {
          userAvatar: userAvatar1,
          username: "EpicGamer99",
          timestamp: "Hace 55 minutos",
          message: "Sí, he tenido el mismo problema. Parece ser un bug bastante común después de la última actualización.",
        },
        {
          userAvatar: userAvatar3,
          username: "QuestMaster",
          timestamp: "Hace 50 minutos",
          message: "Lo siento por escuchar eso. Espero que el equipo de desarrollo lo solucione pronto.",
        },
        {
          userAvatar: userAvatar4,
          username: "RetroGamer87",
          timestamp: "Hace 45 minutos",
          message: "Gracias por informar. Estaba a punto de actualizar, pero esperaré un poco más hasta que se resuelva el problema.",
        }
      ]
    },
    {
      id: 3,
      userAvatar: userAvatar3,
      username: "QuestMaster",
      timestamp: "Hace 3 horas",
      message: "¡Estoy buscando nuevos amigos para jugar en línea! Si te gusta jugar en equipo, agrégame como amigo y juguemos juntos.",
      responses: [
        {
          userAvatar: userAvatar1,
          username: "EpicGamer99",
          timestamp: "Hace 2 horas",
          message: "¡Me encantaría unirme! Te agregaré ahora mismo.",
        },
        {
          userAvatar: userAvatar2,
          username: "SpeedRunnerX",
          timestamp: "Hace 2 horas",
          message: "¡Yo también quiero unirme! ¿Qué juegos te gustan?",
        },
        {
          userAvatar: userAvatar4,
          username: "RetroGamer87",
          timestamp: "Hace 1 hora",
          message: "¡Voy a agregarte también! ¿Juegas en PC o en consola?",
        }
      ]
    },
    {
      id: 4,
      userAvatar: userAvatar4,
      username: "RetroGamer87",
      timestamp: "Hace 5 horas",
      message: "Recientemente descubrí un juego retro increíble. Es una joya oculta que merece más atención. ¡Deberías probarlo si te gustan los clásicos!",
      responses: [
        {
          userAvatar: userAvatar1,
          username: "EpicGamer99",
          timestamp: "Hace 5 horas",
          message: "¡Suena genial! ¿Puedes compartir el nombre del juego? Me encanta explorar juegos retro.",
        },
        {
          userAvatar: userAvatar2,
          username: "SpeedRunnerX",
          timestamp: "Hace 4 horas",
          message: "¡Estoy intrigado! ¿Está disponible en alguna plataforma específica?",
        },
        {
          userAvatar: userAvatar3,
          username: "QuestMaster",
          timestamp: "Hace 4 horas",
          message: "¡Eso suena interesante! Me encantan los juegos retro. ¿En qué plataforma está disponible?",
        }
      ]
    },
    {
      id: 5,
      userAvatar: userAvatar1,
      username: "EpicGamer99",
      timestamp: "Hace 1 día",
      message: "He estado debatiendo con algunos amigos sobre cuál es el mejor personaje en el último juego de lucha. ¿Cuál es tu opinión?",
      responses: [
        {
          userAvatar: userAvatar2,
          username: "SpeedRunnerX",
          timestamp: "Hace 23 horas",
          message: "En mi opinión, el mejor personaje es el que tiene la mayor versatilidad en movimientos.",
        },
        {
          userAvatar: userAvatar3,
          username: "QuestMaster",
          timestamp: "Hace 22 horas",
          message: "Yo prefiero el personaje que tiene el mejor equilibrio entre ataque y defensa.",
        },
        {
          userAvatar: userAvatar4,
          username: "RetroGamer87",
          timestamp: "Hace 21 horas",
          message: "Para mí, el mejor personaje es el que tiene la mejor historia de fondo.",
        }
      ]
    },
    {
      id: 6,
      userAvatar: userAvatar2,
      username: "SpeedRunnerX",
      timestamp: "Hace 2 días",
      message: "¿Qué os parece la jugada que hice en mi partida de ajedrez de ayer?",
      responses: [
        {
          userAvatar: userAvatar1,
          username: "EpicGamer99",
          timestamp: "Hace 2 días",
          message: "¡Esa jugada fue increíble! No me lo esperaba en absoluto.",
        },
        {
          userAvatar: userAvatar3,
          username: "QuestMaster",
          timestamp: "Hace 2 días",
          message: "Me impresionó mucho tu estrategia. Parece que tienes un buen dominio del juego.",
        },
        {
          userAvatar: userAvatar4,
          username: "RetroGamer87",
          timestamp: "Hace 2 días",
          message: "Definitivamente fue una jugada audaz. ¿Has estado practicando mucho?",
        }
      ]
    },
    {
      id: 7,
      userAvatar: userAvatar3,
      username: "QuestMaster",
      timestamp: "Hace 3 días",
      message: "¡Acabo de completar una misión épica en mi juego de aventuras favorito! No puedo esperar para ver qué sucede después.",
      responses: [
        {
          userAvatar: userAvatar1,
          username: "EpicGamer99",
          timestamp: "Hace 3 días",
          message: "¡Felicidades! ¿Puedes compartir más detalles sobre la misión? Estoy intrigado.",
        },
        {
          userAvatar: userAvatar2,
          username: "SpeedRunnerX",
          timestamp: "Hace 3 días",
          message: "Esa misión es difícil, ¿verdad? Estoy atascado en ella desde hace días.",
        },
        {
          userAvatar: userAvatar4,
          username: "RetroGamer87",
          timestamp: "Hace 3 días",
          message: "¡Buena jugada! Espero alcanzarte pronto en el juego.",
        }
      ]
    },
    {
      id: 8,
      userAvatar: userAvatar3,
      username: "QuestMaster",
      timestamp: "Hace 4 días",
      message: "¡Acabo de descubrir un nuevo juego de estrategia muy adictivo! ¿Alguien más lo ha probado?",
      image: postImage3,
      responses: [
        {
          userAvatar: userAvatar1,
          username: "EpicGamer99",
          timestamp: "Hace 4 días",
          message: "Sí, lo he jugado antes. Es muy desafiante pero muy divertido.",
        },
        {
          userAvatar: userAvatar2,
          username: "SpeedRunnerX",
          timestamp: "Hace 4 días",
          message: "Es uno de mis juegos favoritos. Me encanta la estrategia necesaria para jugarlo.",
        },
        {
          userAvatar: userAvatar4,
          username: "RetroGamer87",
          timestamp: "Hace 3 días",
          message: "Lo jugué una vez pero me costó entenderlo. ¿Tienes algún consejo para principiantes?",
        }
      ]
    }
  ]);

  return (
    <div>
      <Navbar />
      <img className="banner" src={banner} alt="Banner de la página de foros" />
      <div className="bg-background body-font relative justify-center">
        <Secondbar />
        <div className="forum-container">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <div className="user-info">
                <img className="user-avatar" src={post.userAvatar} alt="Avatar del usuario" />
                <div className="username-timestamp">
                  <p className="username">{post.username}</p>
                  <p className="timestamp">{post.timestamp}</p>
                </div>
              </div>
              <div className="post-content">{post.message}</div>
              {post.image && <img className="forum-image" src={post.image} alt="Imagen del foro" />}
              {post.responses && post.responses.map((response, index) => (
                <div key={index} className="response">
                  <div className="user-info">
                    <img className="user-avatar-small" src={response.userAvatar} alt="Avatar del usuario" />
                    <div className="username-timestamp">
                      <p className="username">{response.username}</p>
                      <p className="timestamp">{response.timestamp}</p>
                    </div>
                  </div>
                  <div className="post-content small-text">{response.message}</div>
                </div>
              ))}
              <div className="separator-short"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Foros;