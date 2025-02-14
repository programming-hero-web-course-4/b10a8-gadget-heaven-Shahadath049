import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Modal from "./ui/Modal";
import { useNavigate } from "react-router";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {  
    navigate("/");
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Product removed from cart");
  };

  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const sortedItems = [...cartItems].sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));
      return newOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
    setCartItems(sortedItems);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        return total + parseFloat(item.price?.replace("$", ""));
      }, 0)
      .toFixed(2);
  };

  const handlePurchase = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  return (
    <div className="p-4 md:p-6 max-w-full mx-auto">
      <div className="lg:flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Cart</h1>

        <div className="flex flex-col md:flex-row lg:items-start md:items-center gap-4">
          <p className="text-lg font-semibold">
            Total cost: ${calculateTotal()}
          </p>
          <button
            onClick={handleSort}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors"
          >
            Sort by Price {sortOrder === "asc" ? "↑" : "↓"}
          </button>
          <button
            onClick={() => {
              handlePurchase();
              setIsModalOpen(true);
            }}
            className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Purchase
          </button>

          <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Payment Successful 🎉"
      >
        <div className="space-y-4">
          <p>You Have Bought ALL Products</p>
          <p> ${calculateTotal()}</p>
          
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-gray-600 border rounded hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
                <button
                  
              onClick={() => {
                    handleNavigate();
                    setIsModalOpen(false);
              }}
              className="px-4 py-2  bg-purple-600  text-white rounded hover:bg-purple-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
        </div>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow"
          >
            <img
              src={item.image_url || "/api/placeholder/200/150"}
              alt={item.product_name}
              className="w-full md:w-48 h-48 md:h-36 object-cover rounded-lg bg-gray-200"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl font-semibold mb-2">
                {item.product_name}
              </h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="font-semibold">Price: {item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-gray-400 hover:text-red-500 transition-colors border border-gray-200 rounded-full p-2 mt-4 md:mt-0"
            >
              <X size={24} />
            </button>
          </div>
        ))}

        {cartItems.length === 0 && (
          <div className="text-center py-8 font-extrabold text-7xl  text-gray-500">
            Your cart is empty
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
