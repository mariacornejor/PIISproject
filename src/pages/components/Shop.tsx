import EscaparateTienda from "../../ui/components/EscaparateTienda"
import GorraRoja from "../../assets/images/GorraRoja.jpg";

function Shop() {
    const products = [
        { id: 1, name: 'Gorrita', description: 'Gorra Roja.', price: 20, image: {GorraRoja} },
        { id: 2, name: 'Corona', description: 'Corona de Rey.', price: 35, image: {GorraRoja} },
        { id: 3, name: 'Coronar', description: 'Corona de Rey.', price: 35, image: 'CoronaRey.jpg' },
        { id: 4, name: 'Coronas', description: 'Corona de Rey.', price: 35, image: 'CoronaRey.jpg' },
        { id: 5, name: 'Coronad', description: 'Corona de Rey.', price: 35, image: 'CoronaRey.jpg' },
        { id: 6, name: 'Coronaa', description: 'Corona de Rey.', price: 35, image: 'CoronaRey.jpg' }
      ];
    
      const handleBuy = (product) => {
        console.log('Comprado:', product.name);
      };
  return (
    <div>
        <EscaparateTienda products={products} onBuy={handleBuy} />
    </div>
  )
}

export default Shop