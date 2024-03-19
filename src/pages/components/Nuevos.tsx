import Navbar from "../../ui/components/Navbar";
import Carruselitem from "../../ui/components/Carruselitem";
import Carousel from "react-multi-carousel";
import banner from "../../assets/images/banner.png";
import juego from "../../assets/images/juego.png";
import "react-multi-carousel/lib/styles.css";
import Secondbar from "../../ui/components/Secondbar";
import supermario from "../../assets/images/supermario.png";
import uno from "../../assets/images/uno.png";
import gamersarena from "../../assets/images/gamersarena.png";
import JuegosVarios from "../../ui/components/JuegosVarios";

function Nuevos() {
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
          Novedades
        </span>
        <Carousel responsive={responsive}>
          <Carruselitem
            imagen={supermario}
            descrip="Juego de plataformas, rescata a la princesa"
            nombre="Super Mario"
          />
          <Carruselitem
            imagen={juego}
            descrip="Juego chulo"
            nombre="Solitario"
          />
          <Carruselitem
            imagen={uno}
            descrip="Rompe amistades, gana enemigos, ahora solo quedas tu"
            nombre="UNO"
          />

          <Carruselitem
            imagen={gamersarena}
            descrip="Lucha... ¡Por tu honor!"
            nombre="Battle for Honor"
          />
        </Carousel>
      </div>
      <JuegosVarios></JuegosVarios>
    </div>
  );
}

export default Nuevos;
