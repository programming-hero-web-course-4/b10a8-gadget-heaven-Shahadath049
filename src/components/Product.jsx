import React from 'react';
import { Link } from 'react-router';

const Product = ({product}) => {
   
    const {product_name, image_url, price, id} = product;
    return (
        
        <div className="w-72  bg-gray-100 rounded-2xl p-4">
        <div className="w-full h-40 bg-gray-200 rounded-xl mb-4">
            <img
                src={image_url}
                alt={product_name}
                className="w-full h-full object-cover rounded-xl"
            />
        </div>
        
        <div className="h-40 flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{product_name}</h2>
                <p className="text-gray-500">Price: {price}</p>
            </div>
                <Link to={`/product-details/${id}`}>
                <button className="text-purple-600 border border-purple-600 rounded-full px-4 py-2 text-sm hover:bg-purple-50 transition-colors mt-4">
                View Details
            </button>
                </Link>
        </div>
    </div>
    );
};

export default Product;
