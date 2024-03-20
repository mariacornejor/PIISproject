import React from "react";
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
 return (
   <div>
     <Navbar />
     <img className="banner" src={banner} alt="Banner de la página de foros" />
     <div className="bg-background body-font relative justify-center">
       <Secondbar />
       <div className="forum-container">
         <div className="forum">
           <div className="user-info">
             <img className="user-avatar" src={userAvatar1} alt="Avatar del usuario" />
             <p className="username">EpicGamer99</p>
             <p className="timestamp">Hace 5 minutos</p>
           </div>
           <p className="message">¡Acabo de alcanzar el nivel 50 en el último juego de rol que he estado jugando! ¿Alguien más ha llegado tan lejos?</p>
         </div>
         <img className="forum-image" src={postImage1} alt="Imagen del foro" />
         {/* Más comentarios con espacio adicional */}
         <div className="spacer"></div>
         <div className="forum">
           <div className="user-info">
             <img className="user-avatar" src={userAvatar2} alt="Avatar del usuario" />
             <p className="username">SpeedRunnerX</p>
             <p className="timestamp">Hace 1 hora</p>
           </div>
           <p className="message">He encontrado un bug en el último parche de actualización del juego de disparos. ¿Alguien más ha experimentado esto?</p>
         </div>
         <img className="forum-image" src={postImage3} alt="Imagen del foro" />
         {/* Agregamos más comentarios al foro */}
         <div className="spacer"></div>
         <div className="forum">
           <div className="user-info">
             <img className="user-avatar" src={userAvatar3} alt="Avatar del usuario" />
             <p className="username">QuestMaster</p>
             <p className="timestamp">Hace 3 horas</p>
           </div>
           <p className="message">¡Estoy buscando nuevos amigos para jugar en línea! Si te gusta jugar en equipo, agrégame como amigo y juguemos juntos.</p>
         </div>
         <div className="spacer"></div>
         <div className="forum">
           <div className="user-info">
             <img className="user-avatar" src={userAvatar4} alt="Avatar del usuario" />
             <p className="username">RetroGamer87</p>
             <p className="timestamp">Hace 5 horas</p>
           </div>
           <p className="message">Recientemente descubrí un juego retro increíble. Es una joya oculta que merece más atención. ¡Deberías probarlo si te gustan los clásicos!</p>
         </div>
         {/* Agregamos más comentarios al foro */}
         <div className="spacer"></div>
         <div className="forum">
           <div className="user-info">
             <img className="user-avatar" src={userAvatar1} alt="Avatar del usuario" />
             <p className="username">EpicGamer99</p>
             <p className="timestamp">Hace 1 día</p>
           </div>
           <p className="message">He estado debatiendo con algunos amigos sobre cuál es el mejor personaje en el último juego de lucha. ¿Cuál es tu opinión?</p>
         </div>
         <div className="spacer"></div>
         <div className="forum">
           <div className="user-info">
             <img className="user-avatar" src={userAvatar2} alt="Avatar del usuario" />
             <p className="username">SpeedRunnerX</p>
             <p className="timestamp">Hace 2 días</p>
           </div>
           <p className="message">¿Qué os parece la jugada que hize en mi partida de ajedrez de ayer?</p>
         </div>
         <img className="forum-image" src={postImage2} alt="Imagen del foro" />
         <div className="spacer"></div>
         <div className="forum">
           <div className="user-info">
             <img className="user-avatar" src={userAvatar3} alt="Avatar del usuario" />
             <p className="username">QuestMaster</p>
             <p className="timestamp">Hace 3 días</p>
           </div>
           <p className="message">¡Acabo de completar una misión épica en mi juego de aventuras favorito! No puedo esperar para ver qué sucede después.</p>
         </div>
         <div className="spacer"></div>
         <div className="forum">
           <div className="user-info">
             <img className="user-avatar" src={userAvatar4} alt="Avatar del usuario" />
             <p className="username">RetroGamer87</p>
             <p className="timestamp">Hace 4 días</p>
           </div>
           <p className="message">He estado jugando un juego indie recientemente y estoy impresionado por el arte pixelado. ¿Alguien más aprecia el arte retro en los juegos?</p>
         </div>
       </div>
     </div>
   </div>
 );
}

export default Foros;