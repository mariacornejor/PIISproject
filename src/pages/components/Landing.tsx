import Navbar from "../../ui/components/Navbar";
import Carruselitem from "../../ui/components/Carruselitem";
import Carousel from "react-multi-carousel";
import banner from "../../assets/images/banner.png";
import juego from "../../assets/images/juego.png";
import "react-multi-carousel/lib/styles.css";
import Secondbar from "../../ui/components/Secondbar";
import poker from "../../assets/images/poker.png";
import smalland from "../../assets/images/smalland.png";
import ninja from "../../assets/images/100Ninja.png";
import JuegosVarios from "../../ui/components/JuegosVarios";
import BarraNivel from "../../ui/components/BarraNivel";

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
      <BarraNivel nivel={12} porcentaje={76}></BarraNivel>
      <div className="carrusel">
        <span className="ml-14 pt-10 text-white font-bold underline">
          Destacados
        </span>
        <Carousel responsive={responsive}>
          <Carruselitem
            imagen={poker}
            descrip="No se aceta dinero real... todavia"
            nombre="Poker"
          />
          <Carruselitem
            imagen={smalland}
            descrip="no hay gran poblema que un pequeño no pueda resolver"
            nombre="SmalLand"
          />
          <Carruselitem
            imagen={ninja}
            descrip="Hazte con todos"
            nombre="100 ninja"
          />
          <Carruselitem
            imagen={juego}
            descrip="Juego chulo"
            nombre="Solitario"
          />
        </Carousel>
      </div>
      <JuegosVarios></JuegosVarios>
    </div>
  );
}

export default Landing;
