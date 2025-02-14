import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { product_name, image_url, price, id } = product;
  return (
    <div className="lg:w-72 w-full bg-gray-100 rounded-2xl p-4">
      <div className="lg:w-full w-full h-40 bg-gray-200 rounded-xl mb-4">
        <img
          src={image_url}
          alt={product_name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="lg:h-40  flex flex-col justify-between">
        <div>
          <h2 className="lg:text-xl text-sm font-semibold text-gray-900 mb-2">
            {product_name}
          </h2>
          <p className="text-gray-500 lg:text-base text-sm">Price: {price}</p>
        </div>
        <Link to={`/product-details/${id}`}>
          {/* <button className="text-purple-600 border border-purple-600 rounded-full px-4 py-2 text-sm hover:bg-purple-50 transition-colors mt-4">
            View Details
          </button> */}
                  <button className="relative group cursor-pointer text-sky-50 overflow-hidden h-16 lg:w-64 w-full rounded-md bg-purple-500 p-2 flex justify-center items-center font-extrabold">
      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-purple-600" />
      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-purple-500" />
      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-purple-400" />
      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-purple-300" />
      <p className="z-10">View Details</p>
    </button>



        </Link>
      </div>
    </div>
  );
};

export default Product;
