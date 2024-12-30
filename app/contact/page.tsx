import React from "react";
import { FaMapMarkerAlt, FaPhone, FaRegClock } from "react-icons/fa";

function page() {
  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full bg-[#312F30]">
        {/* top div */}
        <div className="flex items-center justify-center h-full mt-20">
            <h1 className="font-[Italiana] text-[40px] font-semibold text-[#FFF4E9] md:mb-4">
              Contact
            </h1>
        </div>

      {/* form section */}
      <div className="min-h-screen flex justify-center items-center px-20">
        <div className="w-full max-w-[1440px]">
          <h1 className="text-center font-[Italiana] text-[24px] font-semibold text-[#FFF4E9]">
            Get In Touch With Us
          </h1>
          <p className="text-center text-[10px] md:text-[14px] text-[#FFF4E9] font-[Bodoni Moda] mt-4 mb-8">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br /> An Email. Our Staff Always Be There To Help You
            Out. Do Not Hesitate!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 w-full md:h-[537px]">
            {/* Contact Information */}
            <div className="md:w-[393px]">
              <div className="flex items-center space-x-3 mb-6">
                <FaMapMarkerAlt className="text-[#FFF4E9]" size={24} />
                <ul className="mt-10">
                  <li className="font-[Italiana] text-[24px] font-semibold text-[#FFF4E9]">
                    Address
                  </li>
                  <li className="text-[16px] text-[#FFF4E9] font-[Bodoni Moda]">
                    236 5th SE Avenue, New York NY10000, United States
                  </li>
                </ul>
              </div>
              <div className="flex items-center space-x-3 mb-6">
                <FaPhone className="text-[#FFF4E9]" size={24} />
                <ul className="mt-10">
                  <li className="font-[Italiana] text-[24px] font-semibold text-[#FFF4E9]">
                    Phone
                  </li>
                  <li className="text-[16px] text-[#FFF4E9] font-[Bodoni Moda]">
                    Mobile: +(84) 546-6789
                  </li>
                  <li className="text-[16px] text-[#FFF4E9] font-[Bodoni Moda]">
                    Hotline: +(84) 456-6789
                  </li>
                </ul>
              </div>
              <div className="flex items-center space-x-3">
                <FaRegClock className="text-[#FFF4E9]" size={24} />
                <ul className="mt-10">
                  <li className="font-[Italiana] text-[24px] font-semibold text-[#FFF4E9]">
                    Working Time
                  </li>
                  <li className="text-[16px] text-[#FFF4E9] font-[Bodoni Moda]">
                    Monday-Friday: 9:00 - 22:00
                  </li>
                  <li className="text-[16px] text-[#FFF4E9] font-[Bodoni Moda]">
                    Saturday-Sunday: 9:00 - 21:00
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-[435px] mt-10 order-2">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-[16px] text-[#FFF4E9] font-[Bodoni Moda] pb-4"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#312F30] font-[Bodoni Moda] font-medium text-[16px]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-[16px] text-[#FFF4E9] font-[Bodoni Moda] pb-4"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#312F30] font-[Bodoni Moda] font-medium text-[16px]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-[16px] text-[#FFF4E9] font-[Bodoni Moda] pb-4"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={3}
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#312F30] font-[Bodoni Moda] font-medium text-[16px]"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-[237px] py-3 border-[1px] border-[#FFF4E9] rounded-[15px] font-[Bodoni Moda] font-light text-[16px] text-[#FFF4E9]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default page;
