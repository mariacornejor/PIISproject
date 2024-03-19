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

function MasValorados() {
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
        <Carousel responsive={responsive}>
          <Carruselitem
            imagen={supermario}
            descrip="Juego chulo"
            nombre="Super Mario"
          />
          <Carruselitem
            imagen={gamersarena}
            descrip="Juego chulo"
            nombre="Battle for Honor"
          />
          <Carruselitem imagen={uno} descrip="Juego chulo" nombre="UNO" />
          <Carruselitem
            imagen={juego}
            descrip="Juego chulo"
            nombre="Solitario"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default MasValorados;
