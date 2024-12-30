import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="w-full bg-[#312F30] py-20">
      <div className="relative flex flex-col md:flex-row items-center justify-start">
        {/* Image section */}
        <div className="z-1 order-2 md:order-1">
          <Image src="/hero-image.png" alt="Image" width={400} height={500} />
        </div>

        <div className="flex flex-row order-1 md:order-2">
          {/* Heading section */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="font-[Italiana] font-normal text-[45px] sm:text-[60px] md:text-[80px] text-[#FFF4E9] md:absolute md:left-1/4 md:top-[30%] md:ml-6">
              <i>Simple & Elegant</i>
            </h1>
            <p className="font-[Mulish] font-normal text-[14px] sm:text-[20px] md:text-[24px] text-[#FFF4E9] md:absolute md:left-1/4 md:top-[40%] md:mt-16 md:ml-6">
              Jewellery for the modern women
            </p>
            <Link href="/shop">
            <button className="bg-[#FFF4E9] rounded-tr-2xl rounded-bl-2xl md:absolute md:left-1/4 md:top-[50%] md:ml-6 mt-6 mb-10 md:mt-20 px-6 py-4 font-[Mulish] font-normal text-[16px] sm:text-[18px] md:text-[18px] text-[#312F30] text-center">
              Shop Collection
            </button>
            </Link>
          </div>

          {/* Icons */}
          <div className="flex flex-col items-center absolute left-[85%] top-[40%] gap-8 md:left-[90%] md:top-[40%]">
            <div className="text-[20px] sm:text-[24px] text-[#E8B08A]">
              <FaFacebook />
            </div>
            <div className="text-[20px] sm:text-[24px] text-[#E8B08A]">
              <FaLinkedin />
            </div>
            <div className="text-[20px] sm:text-[24px] text-[#E8B08A]">
              <FaInstagram />
            </div>
            <div className="text-[20px] sm:text-[24px] text-[#E8B08A]">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
