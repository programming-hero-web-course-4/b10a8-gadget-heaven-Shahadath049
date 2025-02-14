import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useProducts } from './ProductContext';
import { useParams } from 'react-router';

const ProductDetails = () => {
  const { productId } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => p.id === parseInt(productId));
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setIsInCart(cart.some(item => item.id === product.id));
    setIsInWishlist(wishlist.some(item => item.id === product.id));
  }, [product]);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.some(item => item.id === product.id)) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      setIsInCart(true);
    }
  };

  const addToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.some(item => item.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      setIsInWishlist(true);
    }
  };
  const {
    id,
    product_name,
    price,
    availability,
    description,
    specifications,
    rating,
    image_url
  } = product;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Purple Header Section */}
      <div className="bg-purple-600 text-white pb-40 pt-10 px-4  text-center">
        <h1 className="text-3xl font-bold mb-4">Product Details</h1>
        <p className="max-w-2xl mx-auto">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to
          the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Card Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-24">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex gap-8">
          {/* Left Image */}
          <div className="w-1/2">
            <img src={image_url} alt={product_name} className="bg-gray-200 rounded-lg w-full h-full aspect-square" />
          </div>

          {/* Right Content */}
          <div className="w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">{product_name}</h2>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">Price: {price}</span>
            </div>

            <span className={`inline-block px-3 py-1 rounded-full text-sm ${availability ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {availability ? 'In Stock' : 'Out of Stock'}
            </span>

            <p className="text-gray-600">
              {description}
            </p>

            <div>
              <h3 className="font-semibold mb-2">Specification:</h3>
              <ul className="space-y-2 text-gray-600">
                {specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Rating ⭐</h3>
              <div className="flex items-center">
                {[...Array(Math.floor(rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                {[...Array(5 - Math.floor(rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gray-300" />
                ))}
                <span className="ml-2 text-gray-600">{rating}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <button 
                onClick={() => addToCart(product)} 
                className={`px-6 py-2 rounded-lg flex items-center ${
                  isInCart ? 'bg-green-600 text-white' : 'bg-purple-600 text-white'
                }`}
                disabled={isInCart}
              >
                {isInCart ? 'In Cart' : 'Add To Cart'}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>

              <button 
                onClick={() => addToWishlist(product)} 
                className={`${
                  isInWishlist ? 'text-red-600' : 'text-gray-400 hover:text-gray-600'
                }`}
                disabled={isInWishlist}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isInWishlist ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
