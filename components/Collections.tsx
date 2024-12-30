import React from "react";
import Link from "next/link";
import Image from "next/image";

function Collections() {
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
        Collection
      </h2>

      {/* Paragraph below the heading */}
      <p className="mt-4 text-[18px] font-[Mulish] text-[#FFF4E9] text-center px-4 sm:px-8">
        Find all the jewellery you will need here.
      </p>

      {/* section-1 */}
      <div className="grid grid-cols-2 md:grid-rows-1 md:grid-flow-col justify-center items-center gap-4 px-4 md:px-0 sm:gap-12 mt-20">
        <div className="relative">
          <Image
            src="/coll-image-1.png"
            alt="Image"
            width={250}
            height={300}
            className="rounded-[4px]"
          />
          <Link href="/shop">
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Mulish] font-normal text-[24px] text-[#FFF4E9]">
              Rings
            </button>
          </Link>
        </div>
        <div className="relative">
          <Image
            src="/coll-image-2.png"
            alt="Image"
            width={250}
            height={300}
            className="rounded-[4px]"
          />
          <Link href="/shop">
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Mulish] font-normal text-[24px] text-[#FFF4E9]">
              Earrings
            </button>
          </Link>
        </div>
        <div className="relative">
          <Image
            src="/coll-image-3.png"
            alt="Image"
            width={250}
            height={300}
            className="rounded-[4px]"
          />
          <Link href="/shop">
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Mulish] font-normal text-[24px] text-[#FFF4E9]">
              Necklace
            </button>
          </Link>
        </div>
        <div className="relative">
          <Image
            src="/coll-image-4.png"
            alt="Image"
            width={250}
            height={300}
            className="rounded-[4px]"
          />
          <Link href="/shop">
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Mulish] font-normal text-[24px] text-[#FFF4E9]">
              Bracelets
            </button>
          </Link>
        </div>
      </div>

      {/* section-2 */}
      <div className="flex flex-col md:flex-row gap-6 mt-32 px-2 sm:px-10">
        {/* First div */}
        <div className="flex items-center gap-4">
          <div className="w-1/2">
            <Image src="/Frame 32.png" alt="Image 1" width={400} height={500} />
          </div>
          <div className="w-1/2">
            <h1 className="text-[20px] sm:text-[30px] font-[Italiana] text-[#FFF4E9] font-normal">
              Diamond`s Haven
            </h1>
            <p className="text-[10px] sm:text-[14px] font-[Mulish] text-[#FFF4E9] font-light mt-2">
              Mesmerising jewellery collection that encapsulates the essence of
              timeless elegance & sophistication
            </p>
            <Link href="/shop">
              <button className="bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl mt-6 px-4 py-2 font-[Mulish] font-normal text-[8px] sm:text-[16px] text-[#312F30] text-center">
                VIEW DETAILS
              </button>
            </Link>
          </div>
        </div>

        {/* Second div */}
        <div className="flex items-center gap-4">
          <div className="w-1/2">
            <Image
              src="/Frame 32 (1).png"
              alt="Image 2"
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-[20px] sm:text-[30px] font-[Italiana] text-[#FFF4E9] font-normal">
              Silver Wolf
            </h1>
            <p className="text-[10px] sm:text-[14px] font-[Mulish] text-[#FFF4E9] font-light mt-2">
              Enchanting jewellery collection that echoes the untamed spirit of
              the wild.
            </p>
            <Link href="/shop">
              <button className="bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl mt-6 px-4 py-2 font-[Mulish] font-normal text-[8px] sm:text-[16px] text-[#312F30] text-center">
                VIEW DETAILS
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* section-3 */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 px-2 sm:px-10">
        {/* First div */}
        <div className="flex items-center gap-4">
          <div className="w-1/2">
            <h1 className="text-[20px] sm:text-[30px] font-[Italiana] text-[#FFF4E9] font-normal">
              Couple Paradise
            </h1>
            <p className="text-[10px] sm:text-[14px] font-[Mulish] text-[#FFF4E9] font-light mt-2">
              Captivating jewellery collection that celebrates the eternal bond
              of love.
            </p>
            <Link href="/shop">
              <button className="bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl mt-6 px-4 py-2 font-[Mulish] font-normal text-[8px] sm:text-[16px] text-[#312F30] text-center">
                VIEW DETAILS
              </button>
            </Link>
          </div>
          <div className="w-1/2">
            <Image
              src="/Frame 32 (2).png"
              alt="Image 1"
              width={400}
              height={500}
            />
          </div>
        </div>

        {/* Second div */}
        <div className="flex items-center gap-4">
          <div className="w-1/2">
            <h1 className="text-[20px] sm:text-[30px] font-[Italiana] text-[#FFF4E9] font-normal">
              Gold Lava
            </h1>
            <p className="text-[10px] sm:text-[14px] font-[Mulish] text-[#FFF4E9] font-light mt-2">
              Radiant jewellery collection that captures the essence of molten
              gold.
            </p>
            <Link href="/shop">
              <button className="bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl mt-6 px-4 py-2 font-[Mulish] font-normal text-[8px] sm:text-[16px] text-[#312F30] text-center">
                VIEW DETAILS
              </button>
            </Link>
          </div>
          <div className="w-1/2">
            <Image
              src="/Frame 32 (3).png"
              alt="Image 2"
              width={450}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
