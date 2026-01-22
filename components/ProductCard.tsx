
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden rounded-xl">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {product.hasFreeShipping && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
            Envío Gratis
          </div>
        )}

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-md">
                <i className="fa-regular fa-heart"></i>
            </button>
        </div>

        <button className="absolute bottom-4 right-4 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-blue-500/40">
          <i className="fa-solid fa-cart-plus text-lg"></i>
        </button>
      </div>

      <div className="p-5 text-center">
        <p className="text-[10px] text-blue-600 font-black uppercase tracking-[0.2em] mb-1">{product.brand}</p>
        <h3 className="text-sm font-bold text-gray-900 uppercase truncate">
          {product.name}
        </h3>
        
        <div className="mt-3 flex flex-col items-center">
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through font-medium mb-1">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-xl font-bebas tracking-wider text-gray-900">
            ${product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
