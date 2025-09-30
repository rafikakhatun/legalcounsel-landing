// src/components/Header.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className="w-full p-6 shadow-sm bg-[#302E81] text-white fixed z-50">
      <nav className="flex justify-between items-center w-full relative">
        <div className="font-semibold text-xl tracking-tight">
          <h1 className="text-[#FBBE24]" data-aos="fade-down-right">
            Legal<span className="text-white">Counsel</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul
          className="md:flex hidden space-x-8"
          data-aos="fade-down-left"
        >
          <li className="hover:text-[#FBBE24]">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-[#FBBE24]">
            <a href="#">Services</a>
          </li>
          <li className="hover:text-[#FBBE24]">
            <a href="#">Attorneys</a>
          </li>
          <li className="hover:text-[#FBBE24]">
            <a href="#">Testimonials</a>
          </li>
          <li className="hover:text-[#FBBE24]">
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes
              className="text-xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FaBars
              className="text-xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col w-screen fixed bg-[#302E81] top-18 left-0 right-0 text-center">
            <li className="py-2 hover:text-[#FBBE24]">
              <a href="#">Home</a>
            </li>
            <li className="py-2 hover:text-[#FBBE24]">
              <a href="#">Services</a>
            </li>
            <li className="py-2 hover:text-[#FBBE24]">
              <a href="#">Attorneys</a>
            </li>
            <li className="py-2 hover:text-[#FBBE24]">
              <a href="#">Testimonials</a>
            </li>
            <li className="py-2 hover:text-[#FBBE24]">
              <a href="#">Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
    </>
  );
};

export default Header;
