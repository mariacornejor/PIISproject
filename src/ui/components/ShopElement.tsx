import React from 'react';
import BtnPopUp from './BtnPopUp';

type Product = {
  image: string;
  name: string;
  description: string;
  price: number;
};

function ShopElement({ product, onBuy }: { product: Product; onBuy: (product: Product) => void }) {
  return (
    <div className="max-w-[350px] h-[320px] rounded overflow-hidden shadow-lg bg-white">
      <img className="w-[250px] h-[140px]" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.price} BBs</span>
        <BtnPopUp nombre_boton="Comprar" titulo_popup="Confirmar compra" descripcion_popup={`¿Estás seguro que deseas comprar ${product.name}?`} />
      </div>
    </div>
  );
}

export default ShopElement;