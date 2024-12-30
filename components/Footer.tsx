import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <section className="bg-[#312F30] py-12">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About Section */}
        <div>
          <h2 className="text-[24px] font-[Italiana] font-bold text-[#FFF4E9]">Jewel & Co.</h2>
          <p className="mt-4 text-[#717171] font-[Bodoni Moda] font-normal text-[16px]">
            Discover the finest jewelry with our exquisite collection of rings, necklaces, and more. Luxury within reach.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[20px] font-[Italiana] font-normal text-[#FFF4E9]">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/shop" className="text-[#717171] font-[Bodoni Moda] font-normal text-[16px]">Shop</a></li>
            <li><a href="/about" className="text-[#717171] font-[Bodoni Moda] font-normal text-[16px]">About Us</a></li>
            <li><a href="/contact" className="text-[#717171] font-[Bodoni Moda] font-normal text-[16px]">Contact</a></li>
            <li><a href="/faq" className="text-[#717171] font-[Bodoni Moda] font-normal text-[16px]">FAQ</a></li>
            <li><a href="/terms" className="text-[#717171] font-[Bodoni Moda] font-normal text-[16px]">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-[20px] font-[Italiana] font-normal text-[#FFF4E9]">Follow Us</h3>
          <div className="mt-4 flex space-x-6">
            <a href="#" className="text-[#717171]">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-[#717171]">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-[#717171]">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-[#717171]">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-[#717171] pt-6 text-center">
        <p className="text-[#717171] font-[Bodoni Moda] font-normal text-[16px]">
          &copy; {new Date().getFullYear()} Jewel & Co. All Rights Reserved.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Footer
