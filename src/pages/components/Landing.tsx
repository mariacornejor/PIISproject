import Navbar from "../../ui/components/Navbar";
import { Link } from 'react-router-dom';
import Carruselitem from "../../ui/components/Carruselitem";
import Carousel from "react-multi-carousel";
import banner from "../../assets/images/banner.png";
import juego from "../../assets/images/juego.png";
import chess from "../../assets/images/ajedrez.png";
import "react-multi-carousel/lib/styles.css";
import Secondbar from "../../ui/components/Secondbar";
import snow from "../../assets/images/snow-fight.png";
import smalland from "../../assets/images/smalland.png";
import ninja from "../../assets/images/100Ninja.png";
import JuegosVarios from "../../ui/components/JuegosVarios";


function Landing() {
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
    <div className="background bg-background">
      <Navbar />
      <img className="banner" src={banner} />
      <Secondbar />

      <div className="carrusel">
        <span className="ml-14 pt-10 text-white font-bold underline">
          Destacados
          <a href="/news">InfoGames</a>
        </span>
        <Carousel responsive={responsive}>
          <Carruselitem
            imagen={chess}
            descrip="No se aceta dinero real... todavia"
            nombre="Ajedrez"
            link="/game/chess"
          />
          <Carruselitem
            imagen={snow}
            descrip="no hay gran poblema que un pequeño no pueda resolver"
            nombre="Snow fight"
            link="/game/snow-fight"
          />

          <Carruselitem
            imagen={juego}
            descrip="Juego chulo"
            nombre="Tic Tac Toe"
            link="/game/tic-tac-toe"
          />
          <Carruselitem
            imagen={ninja}
            descrip="Hazte con todos"
            nombre="100 ninja"
          />
        </Carousel>
      </div>
      <JuegosVarios></JuegosVarios>
    </div>
  );
}

export default Landing;
