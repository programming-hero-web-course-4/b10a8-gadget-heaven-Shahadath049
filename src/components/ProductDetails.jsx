import React from 'react';
import { Star } from 'lucide-react';


const ProductDetails = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-2xl w-full border border-gray-100 flex">
      <div className="w-1/2 bg-gray-200"></div>
      
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-2">Samsung Galaxy S23 Ultra</h2>
        
        <div className="flex justify-between items-center mb-2">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
            In Stock
          </span>
          <span className="text-2xl font-bold text-black">$999.99</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">
          Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.
        </p>
        
        <div className="mb-3">
          <h3 className="font-semibold mb-1 text-sm">Specification:</h3>
          <ul className="space-y-1 text-xs text-gray-700">
            <li>1. Intel i7 11th Gen</li>
            <li>2. 16GB RAM</li>
            <li>3. 512GB SSD</li>
            <li>4. Touchscreen</li>
          </ul>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex text-yellow-500">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <Star className="w-4 h-4 text-gray-300" />
            <span className="ml-2 text-gray-600 text-xs">4.8</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="bg-purple-600 text-white px-3 py-1.5 rounded-lg flex items-center text-xs">
              Add To Card
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;