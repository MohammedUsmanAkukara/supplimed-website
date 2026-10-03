import React from 'react';
import Button from './Button';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 border-b-4 border-b-transparent hover:border-b-suppliGreen hover:-translate-y-1 flex flex-col group">
      
      {/* Product Image Area */}
      <div className="relative overflow-hidden bg-gray-50 border-b border-gray-100 aspect-[4/3] flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Pack Size Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-bold text-suppliDarkGreen border border-gray-100 shadow-sm">
          {product.packSize}
        </div>
      </div>
      
      {/* Product Details Area */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category Tag */}
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
          {product.category.replace('-', ' ')}
        </span>
        
        <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-tight group-hover:text-suppliDarkGreen transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm font-medium flex-grow mb-6 line-clamp-3 leading-relaxed">
          {product.description}
        </p>
        
        <Button variant="outline" className="w-full mt-auto rounded-lg font-bold border-gray-200 hover:bg-gray-50">
          View Specifications
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;