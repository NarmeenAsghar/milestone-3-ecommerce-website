import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { FaUser, FaPhone, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="flex items-center justify-around w-full h-[100px] bg-[#312F30]">
      {/* for narbar */}
      <nav className="hidden md:flex items-center gap-10">
        <div className="relative cursor-pointer font-[Mulish] font-normal text-[18px] text-[#FFF4E9]">
          <Link href="/">Home</Link>
        </div>
        <div className="relative cursor-pointer font-[Mulish] font-normal text-[18px] text-[#FFF4E9]">
          <Link href="/shop">Shop</Link>
        </div>
        <div className="relative cursor-pointer font-[Mulish] font-normal text-[18px] text-[#FFF4E9]">
          <Link href="/about">About</Link>
        </div>
      </nav>

      {/* heading */}
      <h1 className="font-[Italiana] font-extralight text-[30px] sm:text-[30px] text-[#FFF4E9]">
        <Link href="/">Jewel & Co.</Link>
      </h1>

      {/* for icons */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center cursor-pointer">
          <Link href="/account">
            <div className="flex flex-row items-center justify-center gap-2 font-[Mulish] font-normal text-[18px] text-[#FFF4E9]">
              <FaUser size={16} color="#FFF4E9" />
              Account
            </div>
          </Link>
        </div>
        <div className="flex items-center cursor-pointer">
          <Link href="/contact">
            <div className="flex flex-row items-center justify-center gap-2 font-[Mulish] font-normal text-[18px] text-[#FFF4E9]">
              <FaPhone size={18} color="#FFF4E9" />
              Contact
            </div>
          </Link>
        </div>
        <div className="flex items-center cursor-pointer">
          <Link href="/cart">
            <div className="flex flex-row items-center justify-center gap-2 font-[Mulish] font-normal text-[18px] text-[#FFF4E9]">
              <FaShoppingCart size={18} color="#FFF4E9" />
              Cart
            </div>
          </Link>
        </div>
      </div>

      {/* using shadcn ui component sheet for responsiveness*/}
      <Sheet>
        <SheetTrigger className="md:hidden text-[#FFF4E9]">
          <Menu size={26} />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col items-start space-y-4 pt-10 px-4 font-[Mulish] font-medium text-[20px] text-[#312F30]">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="flex flex-row items-center gap-8 mt-8 ml-4">
            <div className="flex items-center cursor-pointer">
              <Link href="/account">
                <div>
                  <FaUser size={16} color="#312F30" />
                </div>
              </Link>
            </div>
            <div className="flex items-center cursor-pointer">
              <Link href="/contact">
                <div>
                  <FaPhone size={18} color="#312F30" />
                </div>
              </Link>
            </div>
            <div className="flex items-center cursor-pointer">
              <Link href="/cart">
                <div>
                  <FaShoppingCart size={18} color="#312F30" />
                </div>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Header;
