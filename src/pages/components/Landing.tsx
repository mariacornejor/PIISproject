import Navbar from "../../ui/components/Navbar";
import Secondbar from "../../ui/components/Secondbar";
import Carruselitem from "../../ui/components/Carruselitem";
import Carousel from "react-multi-carousel";
import banner from "../../assets/images/banner.png";
import juego from "../../assets/images/juego.png";
import "react-multi-carousel/lib/styles.css";
import { SidebarWithBurgerMenu } from "../../ui/components/NavBarLateral";

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
      <SidebarWithBurgerMenu />
      <img className="banner" src={banner} />
      <Secondbar />
      <div className="carrusel">
        <Carousel responsive={responsive}>
          <Carruselitem
            imagen={juego}
            descrip="Juego chulo"
            nombre="Solitario"
          />
          <Carruselitem
            imagen={juego}
            descrip="Juego chulo"
            nombre="Solitario"
          />
          <Carruselitem
            imagen={juego}
            descrip="Juego chulo"
            nombre="Solitario"
          />
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

export default Landing;
