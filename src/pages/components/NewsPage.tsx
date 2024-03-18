import Navbar from "../../ui/components/Navbar";
import Carousel from "react-multi-carousel";
import supermario from "../../assets/images/supermario.png";
import uno from "../../assets/images/uno.png";
import gamersarena from "../../assets/images/gamersarena.png";
import NewsCard from "../../ui/components/NewsCard";
import banner from "../../assets/images/banner.png";
import Secondbar from "../../ui/components/Secondbar";

function Noticias() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Navbar />
      <img className="banner" src={banner} />
      <div className="bg-background body-font relative h-screen  justify-center ">
      <Secondbar />

        <div className="carrusel ">
          <Carousel responsive={responsive}>
            <NewsCard
              imagen={uno}
              descrip="El juego más esperado se encuentra YA en nuestra plataforma, disfrútalo :)
              El mítico juego cuenta con la modalidad solitario y multijugador.
              Invita a tus amigos y gana puntos!
              ¿Te animas?"
              nombre="UNO, el juego"
              tags={["juegodemesa", "familiar", "multijugador", "cartas"]}
            />

            <NewsCard
              imagen={supermario}
              descrip="Recién revelado, el nuevo Súper Mario después de 10 años llega a nuestra platafomra próximamente. Enterate de todos los detalles aquí."
              nombre="Nuevo Súper Mario"
              tags={["videojuegos", "aventura", "MarioBros"]}
            />
            <NewsCard
              imagen={gamersarena}
              descrip="La más grande liga de nuestra plataforma comienza el proximo 01 de Marzo.
              Prepara tu equipo, y apúntate pronto!"
              nombre="Gamers Arena League"
              tags={["eSports", "competitivo", "multijugador", "torneo"]}
            />

            <NewsCard
              imagen={gamersarena}
              descrip="La más grande liga de nuestra plataforma comienza el proximo 01 de Marzo.
              Prepara tu equipo, y apúntate pronto!"
              nombre="Gamers Arena League"
              tags={["eSports", "competitivo", "multijugador", "torneo"]}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Noticias;
