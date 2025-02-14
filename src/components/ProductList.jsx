
import Product from "./Product";
import { useProducts } from "./ProductContext";

 
const ProductList = () => {
   

    const { products, filteredProducts, handleFilter } = useProducts();

    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-32 mb-20">Explore Cutting-Edge Gadgets</h1>
            <div className="container mx-auto p-4 lg:flex items-start gap-8">
                <div className="lg:flex lg:flex-col space-x-2 space-y-4 lg:w-1/6 w-full bg-gray-100 rounded-2xl p-4  mb-5">
                    <button onClick={() => handleFilter("All Products")} className="lg:flex gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-purple-600 px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                        All Products
                    </button>
                    {[...new Set(products.map((product) => product.category))].map(
                        (category, index) => (
                            <button onClick={() => handleFilter(category)} key={index} className="lg:flex gap-1 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-purple-600 px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
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
