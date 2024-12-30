"use client";

import { useState, useEffect } from "react";
import { Product } from "@/app/shop/page"; // Import Product type

// Define CartPage component
function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    // Get cart from localStorage on component mount
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Remove product from cart and update localStorage
  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="md:p-8 p-2 bg-[#312F30]">
      <h2 className="font-[Italiana] text-[50px] font-semibold text-[#FFF4E9] mb-8 text-center">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-[#FFF4E9]">Your cart is empty!</p>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center overflow-y-auto">
          {cart.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-[#FFF4E9] rounded w-full sm:w-[80%] md:w-[95%] lg:w-[90%] mx-auto"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover rounded w-full sm:h-[250px] mx-auto"
              />
              <h3 className="text-[24px] font-[Italiana] font-semibold text-[#FFF4E9] mt-4">
                {product.name}
              </h3>
              <p className="text-[14px] text-[#FFF4E9] font-[Bodoni Moda]">
                {product.price}
              </p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl px-4 py-2 font-[Mulish] font-normal text-[18px] text-[#312F30] text-center"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
