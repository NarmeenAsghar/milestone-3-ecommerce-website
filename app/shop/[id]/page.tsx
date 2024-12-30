"use client";

// Import necessary hooks and types
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import { Product } from "@/app/shop/page"; // Assuming Product type is in a separate file

const ProductDetailPage = () => {
  const { id } = useParams(); // This will get the 'id' from the URL
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch product details based on the product ID from the URL
      const fetchProductDetails = async () => {
        const response = await fetch("/products.json");
        const data = await response.json();
        const selectedProduct = data.find(
          (product: Product) => product.id === parseInt(id as string)
        );
        setProduct(selectedProduct || null);
      };

      fetchProductDetails();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="md:p-8 p-2 bg-[#312F30]">
    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="rounded sm:h-[400px] mx-auto"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left md:ml-4 mt-4 md:mt-0">
        <h1 className="font-[Italiana] text-[50px] font-semibold text-[#FFF4E9]">
          {product.name}
        </h1>
        {/* Jewelry Description */}
        <p className="text-[18px] text-[#FFF4E9] font-[Mulish] mt-4">
          This exquisite piece of jewelry is crafted with the finest materials, offering a blend of elegance and sophistication. Whether you`re looking for a timeless classic or a bold statement piece, this jewelry is perfect for any occasion.
        </p>
        <p className="text-[18px] text-[#FFF4E9] font-[Bodoni Moda] mt-4">
          {product.price}
        </p>
        <p className="text-[16px] text-[#FFF4E9] font-[Mulish] mt-4">
          Category: {product.category}
        </p>
  
        {/* Jewelry Details: Size and Color */}
        <div className="mt-4 text-[#FFF4E9]">
          {/* Size Selector */}
          <div className="mb-4">
            <label className="text-[16px] font-[Mulish] block mb-2">Size:</label>
            <select className="bg-[#FFF4E9] text-[#312F30] rounded px-4 py-2 w-40">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
  
          {/* Color Selector */}
          <div className="mb-4">
            <label className="text-[16px] font-[Mulish] block mb-2">Color:</label>
            <select className="bg-[#FFF4E9] text-[#312F30] rounded px-4 py-2 w-40">
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
              <option value="white">White</option>
              <option value="black">Black</option>
            </select>
          </div>
        </div>
  
        {/* Quantity and Add to Cart */}
        <div className="mt-6 items-center">
          <label className="text-[16px] text-[#FFF4E9] mr-2">Quantity:</label>
          <input
            type="number"
            className="bg-[#FFF4E9] text-[#312F30] rounded px-4 py-2 w-[60px]"
            defaultValue="1"
          />
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default ProductDetailPage;
