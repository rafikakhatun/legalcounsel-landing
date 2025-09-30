// src/components/ClientTestimonials.jsx
import React from "react";
import client1 from "../assets/hispanic-male-executive-gesturing-copy-space-while-making-eye-contact-studio.jpg";
import client2 from "../assets/professional-woman-stylish-suit-office-with-tablet-device.jpg";
import client3 from "../assets/hotel-receptionist-work.jpg";
import { FaQuoteLeft } from "react-icons/fa";

const ClientTestimonials = () => {
  return (
    <section className="w-full py-16 px-10 text-white bg-[#302E81]">
      <div className="text-center mt-6 space-y-3">
        <h1
          className="text-2xl md:text-4xl font-semibold"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Client Testimonials
        </h1>
        <p
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Hear what our satisfied clients have to say about our services.
        </p>
      </div>

      {/* Card Section */}
      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="p-8 shadow-md bg-[#342F91] rounded-lg space-y-4">
          <FaQuoteLeft className="text-yellow-400 text-3xl" />
          <p
            className="text-[#E4E7EB] text-sm"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            "LegalCounsel provided exceptional service during my business
            acquisition. Their attention to detail and strategic advice saved us
            from potential pitfalls and ensured a smooth transaction."
          </p>

          <div className="flex space-x-3 mt-2">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={client1}
              alt="Robert Thompson"
            />
            <div className="mt-0 text-sm">
              <p className="font-semibold text-base">Robert Thompson</p>
              <p className="text-[#E4E7EB]">CEO, Thompson Enterprises</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-8 shadow-md bg-[#342F91] rounded-lg space-y-4">
          <FaQuoteLeft className="text-yellow-400 text-3xl" />
          <p
            className="text-[#E4E7EB] text-sm"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            "Working with Amanda on my divorce case was a blessing. She was
            compassionate, professional, and fought hard for my rights while
            keeping the best interests of my children in mind."
          </p>

          <div className="flex space-x-3 mt-2">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={client2}
              alt="Patricia Gayen"
            />
            <div className="mt-0 text-sm">
              <p className="font-semibold text-base">Patricia Gayen</p>
              <p className="text-[#E4E7EB]">Family Law Client</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-8 shadow-md bg-[#342F91] rounded-lg space-y-4">
          <FaQuoteLeft className="text-yellow-400 text-3xl" />
          <p
            className="text-[#E4E7EB] text-sm"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            "Michael's expertise in real estate law was invaluable during our
            commercial property purchase. His negotiation skills and thorough
            contract review protected our investment."
          </p>

          <div className="flex space-x-3 mt-2">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={client3}
              alt="David Nguyen"
            />
            <div className="mt-0 text-sm">
              <p className="font-semibold text-base">David Nguyen</p>
              <p className="text-[#E4E7EB]">Real Estate Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
