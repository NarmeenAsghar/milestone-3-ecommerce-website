"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// Define the Product type
export type Product = {
  id: number;
  category: string;
  name: string;
  price: string;
  image: string;
};

function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from products.json file
    const fetchProducts = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Filter products based on category
  const getProductsByCategory = (category: string) => {
    return products.filter((product) => product.category === category);
  };

  // Add product to cart and save to localStorage
  const addToCart = (product: Product) => {
    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];

    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="md:p-8 p-2 bg-[#312F30]">
      {/* Rings Section */}
      <div className="my-8 text-center mb-28">
        <h2 className="font-[Italiana] text-[50px] font-semibold text-[#FFF4E9] mb-8">
          Rings
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center overflow-y-auto md:overflow-y-visible md:max-h-full max-h-[450px]">
          {getProductsByCategory("rings").map((product) => (
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
                <Link
                  href={`/shop/${product.id}`}
                  className="bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl px-4 py-2 font-[Mulish] font-normal text-[14px] text-[#312F30] text-center"
                >
                  View Details
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl px-4 py-2 font-[Mulish] font-normal text-[14px] text-[#312F30] text-center"
                >
                  <i className="fas fa-cart-plus mr-2"></i> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Earrings Section */}
      <div className="my-8 text-center mb-28">
        <h2 className="font-[Italiana] text-[50px] font-semibold text-[#FFF4E9] mb-8">
          Earrings
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center overflow-y-auto md:overflow-y-visible md:max-h-full max-h-[450px]">
          {getProductsByCategory("earrings").map((product) => (
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
                <Link
                  href={`/shop/${product.id}`}
                  className="bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl px-4 py-2 font-[Mulish] font-normal text-[14px] text-[#312F30] text-center"
                >
                  View Details
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl px-4 py-2 font-[Mulish] font-normal text-[14px] text-[#312F30] text-center"
                >
                  <i className="fas fa-cart-plus mr-2"></i> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Necklaces Section */}
      <div className="my-8 text-center mb-28">
        <h2 className="font-[Italiana] text-[50px] font-semibold text-[#FFF4E9] mb-8">
          Necklaces
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center overflow-y-auto md:overflow-y-visible md:max-h-full max-h-[450px]">
          {getProductsByCategory("necklaces").map((product) => (
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
                <Link
                  href={`/shop/${product.id}`}
                  className="bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl px-4 py-2 font-[Mulish] font-normal text-[14px] text-[#312F30] text-center"
                >
                  View Details
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl px-4 py-2 font-[Mulish] font-normal text-[14px] text-[#312F30] text-center"
                >
                  <i className="fas fa-cart-plus mr-2"></i> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bracelets Section */}
      <div className="my-8 text-center mb-28">
        <h2 className="font-[Italiana] text-[40px] font-semibold text-[#FFF4E9] mb-8">
          Bracelets
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center overflow-y-auto md:overflow-y-visible md:max-h-full max-h-[450px]">
          {getProductsByCategory("bracelets").map((product) => (
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
                <Link
                  href={`/shop/${product.id}`}
                  className="bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl px-4 py-2 font-[Mulish] font-normal text-[14px] text-[#312F30] text-center"
                >
                  View Details
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl px-4 py-2 font-[Mulish] font-normal text-[14px] text-[#312F30] text-center"
                >
                  <i className="fas fa-cart-plus mr-2"></i> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
