import EscaparateTienda from "../../ui/components/EscaparateTienda"
import GorraRoja from "../../assets/images/GorraRoja.jpg";
import Corona from "../../assets/images/Corona.jpg";
import Collar from "../../assets/images/Collar.jpg";
import GafasSol from "../../assets/images/GafasSol.png";
import Gafas from "../../assets/images/Gafas.jpg";
import Bufanda from "../../assets/images/Bufanda.jpg";
import MascotaMurcielago from "../../assets/images/MascotaMurcielago.png";
import GafasSki from "../../assets/images/GafasSki.png";
import DiademaGato from "../../assets/images/DiademaGato.png";
import Sombrero from "../../assets/images/Sombrero.png";
import CadenaOro from "../../assets/images/CadenaOro.png";
import Flores from "../../assets/images/Flores.png";
import Navbar from "../../ui/components/Navbar";
import banner from "../../assets/images/banner.png";
import Secondbar from "../../ui/components/Secondbar";

function Shop() {
  const products = [
    { id: 1, name: 'Gorra', description: 'Protegete del sol!', price: 20, image: GorraRoja },
    { id: 2, name: 'Corona', description: 'Se el Rey', price: 35, image: Corona },
    { id: 3, name: 'Collar', description: 'Lookin Fancy', price: 10, image: Collar },
    { id: 4, name: 'Gafas de sol', description: 'Gafas de sol', price: 20, image: GafasSol },
    { id: 5, name: 'Gafas', description: 'No te pierdas un pixel', price: 5, image: Gafas },
    { id: 6, name: 'Bufanda', description: 'Protegete del frio', price: 50, image: Bufanda },
    { id: 7, name: 'Mascota Murcielago', description: 'El mejor Compañero', price: 100, image: MascotaMurcielago },
    { id: 8, name: 'Gafas Ski', description: 'Cuidado con la nieve!', price: 65, image: GafasSki },
    { id: 9, name: 'Diadema Gatito', description: 'Miau', price: 35, image: DiademaGato },
    { id: 10, name: 'Sombrero', description: 'El rey de los Piratas', price: 90, image: Sombrero },
    { id: 11, name: 'Cadena de oro', description: 'Bling Bling', price: 200, image: CadenaOro },
    { id: 12, name: 'Flores', description: 'Campestre', price: 20, image: Flores }
  ];

  const handleBuy = (product) => {
    console.log('Comprado:', product.name);
  };
  return (
    <div className="bg-background">
      <Navbar />
      <img className="banner" src={banner} />
      <Secondbar />
      <EscaparateTienda products={products} onBuy={handleBuy} />
    </div>
  )
}

export default Shop