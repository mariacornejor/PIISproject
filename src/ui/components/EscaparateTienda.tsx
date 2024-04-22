import ShopElement from './ShopElement';

function EscaparateTienda({ products, onBuy }) {
  return (
    <div className="flex flex-wrap justify-center mx-[18%]">
      {products.map(product => (
        <div key={product.id} className="p-4">
          <ShopElement product={product} onBuy={onBuy} />
        </div>
      ))}
    </div>
  );
}

export default EscaparateTienda;