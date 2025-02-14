import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
const Wishlist = () => {

    const [cartItems, setCartItems] = useState([]);
    
  
    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('wishlist')) || [];
      setCartItems(items);
    }, []);
  
    const removeFromCart = (id) => {
      const updatedCart = cartItems.filter(item => item.id !== id);
      setCartItems(updatedCart);
      localStorage.setItem('wishlist', JSON.stringify(updatedCart));
    };
  
   
  
  
  
    



    return (


        <div className="p-6 max-w-full mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Wishlist</h1>
          <div className="flex items-center gap-4">
            
          
          </div>
        </div>
  
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <img
                src={item.image_url || '/api/placeholder/200/150'}
                alt={item.product_name}
                className="w-48 h-36 object-cover rounded-lg bg-gray-200"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{item.product_name}</h2>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="font-semibold">Price: {item.price}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className=" text-gray-400 hover:text-red-500 transition-colors border border-gray-200 rounded-full p-2"
              >
                <X size={24} />
              </button>
            </div>
          ))}
          
          {cartItems.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Your cart is empty
            </div>
          )}
        </div>
      </div>
    );
};

export default Wishlist;