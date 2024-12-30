import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <section className="w-full py-20 bg-[#312F30]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-[Italiana] text-[40px] font-semibold text-[#FFF4E9] mb-4">About Us</h2>
          <p className="text-[18px] md:text-[20px] text-[#FFF4E9] font-[Bodoni Moda]">
            Discover the elegance and luxury of our exquisite jewelry collection, crafted to make every moment special.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left section: About us text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-[30px] font-[Italiana] font-semibold text-[#FFF4E9] mb-4">Our Story</h3>
            <p className="text-[14px] md:text-[18px] text-[#FFF4E9] font-[Bodoni Moda]">
              At <strong>JewelsStore</strong>, we are passionate about creating timeless, handcrafted jewelry that brings elegance to your everyday life. Our designs are a perfect blend of tradition and contemporary style, meticulously crafted with the finest materials.
            </p>
            <p className="text-[14px] md:text-[18px] text-[#FFF4E9] font-[Bodoni Moda] mt-4">
              We believe jewelry is not just an accessory, but a representation of your personal style and the special moments in your life. Whether you’re looking for the perfect engagement ring, a statement necklace, or an everyday piece, our collection is designed to cater to your unique needs.
            </p>
          </div>

          {/* Right section: Image */}
          <div className="flex-1">
            <Image src="/about-image.jpg" alt="About Us" width={300} height={300} className="w-full rounded-[10px] shadow-lg" />
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16 text-center">
          <h3 className="text-[30px] font-[Italiana] font-semibold text-[#FFF4E9] mb-4">Our Mission</h3>
          <p className="text-[14px] md:text-[18px] text-[#FFF4E9] font-[Bodoni Moda]">
            Our mission is to make luxury jewelry accessible to everyone, ensuring that every piece is not only beautiful but also affordable. We’re committed to ethical sourcing, high-quality craftsmanship, and delivering exceptional customer service.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page
