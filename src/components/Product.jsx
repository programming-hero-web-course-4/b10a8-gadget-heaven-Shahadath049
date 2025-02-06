import React from 'react';

const Product = ({product}) => {
    console.log(product);
    const {product_name, image_url, price} = product;
    return (
        
        <div className="w-80 bg-gray-100 rounded-2xl p-4">
            <div className="w-full h-40 bg-gray-200 rounded-xl mb-4">
                <img
                    src={image_url}
                    alt={product_name}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>
            
            <div className="flex flex-col space-y-2">
                <h2 className="text-xl font-semibold text-gray-900">{product_name}</h2>
                <p className="text-gray-500">Price: {price}</p>
                <button className="text-purple-600 border border-purple-600 rounded-full px-4 py-2 text-sm hover:bg-purple-50 transition-colors">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default Product;
