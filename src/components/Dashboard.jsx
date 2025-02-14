import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Cart from './Cart';
import Wishlist from './Wishlist';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('cart');

  // Update active tab based on URL pathname
  useEffect(() => {
    if (location.pathname.includes('wishlist')) {
      setActiveTab('wishlist');
    } else {
      setActiveTab('cart');
    }
  }, [location.pathname]);

  // Handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/dashboard${tab === 'wishlist' ? '/wishlist' : ''}`);
  };

  return (
    <div className='lg:mx-5'>
      <div className="w-full ">
        <div className="bg-purple-600 w-full py-8 px-4 text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Dashboard</h1>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Explore the latest gadgets that will take your experience to the next level. 
            From smart devices to the coolest accessories, we have it all!
          </p>
          <div className="flex justify-center gap-4">
            <button 
              className={`px-8 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'cart' 
                  ? 'bg-white text-purple-600' 
                  : 'text-white border border-white hover:bg-purple-500'
              }`}
              onClick={() => handleTabChange('cart')}
            >
              Cart
            </button>
            <button 
              className={`px-8 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'wishlist' 
                  ? 'bg-white text-purple-600' 
                  : 'text-white border border-white hover:bg-purple-500'
              }`}
              onClick={() => handleTabChange('wishlist')}
            >
              Wishlist
            </button>
          </div>
        </div>
        
        <div className="p-8 container mx-auto">
          {activeTab === 'cart' ? (
            <div className="text-gray-800">
              <Cart />
            </div>
          ) : (
            <div className="text-gray-800">
              <Wishlist />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;