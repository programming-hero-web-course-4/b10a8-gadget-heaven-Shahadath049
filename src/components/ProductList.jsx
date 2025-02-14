
import Product from "./Product";
import { useProducts } from "./ProductContext";

 
const ProductList = () => {
   

    const { products, filteredProducts, handleFilter } = useProducts();

    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-32 mb-20">Explore Cutting-Edge Gadgets</h1>
            <div className="container mx-auto p-4 flex items-start gap-8">
                <div className="flex flex-col space-y-4 w-1/6 bg-gray-100 rounded-2xl p-4 ">
                    <button onClick={() => handleFilter("All Products")} className="text-purple-600 border border-purple-600 rounded-full px-4 py-2 text-sm hover:bg-purple-50 transition-colors">
                        All Products
                    </button>
                    {[...new Set(products.map((product) => product.category))].map(
                        (category, index) => (
                            <button onClick={() => handleFilter(category)} key={index} className="text-purple-600 border border-purple-600 rounded-full px-4 py-2 text-sm hover:bg-purple-50 transition-colors">
                                {category}
                            </button>
                        )
                    )}
                </div>
                <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-6">
                    {filteredProducts.map((product, idx) => (
                        <Product key={idx} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};


export default ProductList;
