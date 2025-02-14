// contexts/ProductContext.js
import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch("/Products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    const handleFilter = (category) => {
        if (category === "All Products") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(
                (product) => product.category === category
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <ProductContext.Provider 
            value={{
                products,
                filteredProducts,
                handleFilter
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

// Custom hook to use the product context
export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
};