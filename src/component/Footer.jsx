// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#342F91] py-10 px-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & Social */}
        <div
          className="flex flex-col space-y-4"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="font-semibold text-xl tracking-tight">
            <h1 className="text-[#FBBE24]">
              Legal<span className="text-white">Counsel</span>
            </h1>
          </div>
          <p className="text-gray-300 text-md">
            Providing exceptional legal services with integrity and professionalism since 1995.
          </p>
          {/* social link */}
          <div className="flex flex-row gap-3 text-lg">
            <FaFacebook className="hover:text-[#FBBE24]" />
            <FaTwitter className="hover:text-[#FBBE24]" />
            <FaLinkedin className="hover:text-[#FBBE24]" />
            <FaInstagram className="hover:text-[#FBBE24]" />
          </div>
        </div>

        {/* Quick Links */}
        <div
          className="flex flex-col text-gray-300 space-y-2"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1 className="text-white font-semibold text-lg">Quick Links</h1>
          <ul className="space-y-3 mt-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Attorneys</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Practice Areas */}
        <div
          className="flex flex-col text-gray-300"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1 className="text-white font-semibold text-lg">Practice Areas</h1>
          <ul className="space-y-3 mt-3">
            <li><a href="#">Corporate Law</a></li>
            <li><a href="#">Civil Litigation</a></li>
            <li><a href="#">Real Estate Law</a></li>
            <li><a href="#">Personal Injury</a></li>
            <li><a href="#">Family Law</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div
          className="flex flex-col text-gray-300 space-y-4"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1 className="text-white font-semibold text-lg">Newsletter</h1>
          <p>Subscribe to our newsletter for legal tips and firm updates.</p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 w-full rounded-l-md bg-white focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-md transition duration-300"
            >
              <FaPaperPlane className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-6 border-t border-[#4B5563] mt-6 text-gray-300">
        <p>© 2025 LegalCounsel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
