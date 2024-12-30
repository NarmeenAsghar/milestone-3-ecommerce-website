import React from "react";
import Image from "next/image";

function Features() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-[#312F30]">
      {/* Image at the top */}
      <div className="relative w-full max-w-[600px]">
        <img
          src="/Frame 163.png"
          alt="Top Image"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Heading below the image */}
      <h2 className="mt-8 text-[36px] font-[Italiana] text-[#FFF4E9] text-center">
        Our Best Feature
      </h2>

      {/* Paragraph below the heading */}
      <p className="mt-4 text-[18px] font-[Mulish] text-[#FFF4E9] text-center px-4 sm:px-8">
        The most finest jewellery you could find.
      </p>

      {/* section-1 */}
      <div className="grid grid-cols-2 md:grid-rows-1 md:grid-flow-col justify-center items-center gap-4 px-4 md:px-0 sm:gap-12 mt-20 md:mt-36">
        {/* Product Card 1 */}
        <div className="relative max-w-[250px] bg-[#4D433E] overflow-hidden">
          <Image
            src="/akansharma 1.png"
            alt="Rings"
            width={200}
            height={190}
            className="sm:w-full sm:h-48 sm:px-10 sm:my-10 pt-6 sm:pt-0"
          />
          <button className="absolute top-4 left-4 bg-[rgba(214,158,120,0.46)] text-[#ffffff] py-1 px-3 text-xs rounded-full">
            New
          </button>
          <div className="p-4 bg-[#1D1917]">
            <h3 className="font-[Bodoni Moda] font-normal text-[16px] text-[#ffffff]">
              Gold Ring
            </h3>
            <p className="font-[Bodoni Moda] font-normal text-[12px] text-[#ffffff] mt-2">
              ₹30,000
              <s className="text-[#717171] font-[Bodoni Moda] font-normal text-[12px] pl-4">
                ₹40,000
              </s>
            </p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="relative max-w-[250px] bg-[#4D433E] overflow-hidden">
          <Image
            src="/akansharma 4.png"
            alt="Rings"
            width={200}
            height={190}
            className="sm:w-full sm:h-48 sm:px-10 sm:my-10 pt-6 sm:pt-0"
          />
          <button className="absolute top-4 left-4 bg-[rgba(214,158,120,0.46)] text-[#ffffff] py-1 px-3 text-xs rounded-full">
            10% OFF
          </button>
          <div className="p-4 bg-[#1D1917]">
            <h3 className="font-[Bodoni Moda] font-normal text-[16px] text-[#ffffff]">
              Diamond Studs
            </h3>
            <p className="font-[Bodoni Moda] font-normal text-[12px] text-[#ffffff] mt-2">
              ₹85,500
              <s className="text-[#717171] font-[Bodoni Moda] font-normal text-[12px] pl-4">
                ₹95,000
              </s>
            </p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="relative max-w-[250px] bg-[#4D433E] overflow-hidden">
          <Image
            src="/akansharma 5.png"
            alt="Rings"
            width={100}
            height={48}
            className="sm:w-full sm:h-48 sm:px-16 sm:py-10 py-14 ml-6 sm:ml-0 sm:my-10"
          />
          <div className="p-4 bg-[#1D1917]">
            <h3 className="font-[Bodoni Moda] font-normal text-[16px] text-[#ffffff]">
              Heart Bracelet
            </h3>
            <p className="font-[Bodoni Moda] font-normal text-[12px] text-[#ffffff] mt-2">
              ₹2,20,000
            </p>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="relative max-w-[250px] bg-[#4D433E] overflow-hidden">
          <Image
            src="/akansharma 3.png"
            alt="Rings"
            width={200}
            height={190}
            className="sm:w-full sm:h-48 sm:px-10 sm:my-10 pt-4"
          />
          <button className="absolute top-4 left-4 bg-[rgba(214,158,120,0.46)] text-[#ffffff] py-1 px-3 text-xs rounded-full">
            New
          </button>
          <div className="p-4 bg-[#1D1917]">
            <h3 className="font-[Bodoni Moda] font-normal text-[14px] md:text-[16px] text-[#ffffff]">
              Gold Rose Earings
            </h3>
            <p className="font-[Bodoni Moda] font-normal text-[12px] text-[#ffffff] mt-2">
              ₹26,000
              <s className="text-[#717171] font-[Bodoni Moda] font-normal text-[12px] pl-4">
                ₹30,000
              </s>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
