import Product from "./Product";
import { useProducts } from "./ProductContext";

const ProductList = () => {
  const { products, filteredProducts, handleFilter } = useProducts();

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-32 mb-20">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="container mx-auto p-4 lg:flex items-start gap-8">
        <div className="lg:flex lg:flex-col space-x-2 space-y-4 lg:w-1/6 w-full bg-gray-100 rounded-2xl p-4  mb-5">
          <button
            onClick={() => handleFilter("All Products")}
            className="overflow-hidden relative w-auto p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
          >
            All Products
            <span className="absolute w-full h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
            <span className="absolute w-full h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
            <span className="absolute w-full h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              Explore!
            </span>
          </button>
          {[...new Set(products.map((product) => product.category))].map(
            (category, index) => (
              <button
                onClick={() => handleFilter(category)}
                key={index}
                className="lg:flex gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-purple-600 px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
              >
                {category}
              </button>
            )
          )}
        </div>
        <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 justify-items-center gap-6">
          {filteredProducts.map((product, idx) => (
            <Product key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
