// src/components/Hero.jsx
import React from "react";
import heroImg from "../assets/legal-image.jpg"; // image import

const Hero = () => {
  return (
    <section className="container mx-auto p-6 bg-[#302E81] pt-32 pb-20 text-white flex flex-col-reverse md:flex-row justify-between">
      {/* Left content */}
      <div
        className="space-y-6"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h1 className="text-3xl font-semibold md:text-5xl mt-10">
          Expert Legal Solutions for <br />
          <span className="text-[#FBBE24]">Every Challenge</span>
        </h1>

        <p className="text-lg text-[#E4E7EB]">
          Dedicated legal team providing exceptional service with integrity and{" "}
          <br className="hidden md:flex" />
          professional excellence.
        </p>

        {/* Button section */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-amber-500 hover:bg-amber-600 rounded-md px-6 py-3">
            Free Consultation
          </button>
          <button className="border-2 hover:text-amber-500 hover:border-amber-500 border-white py-3 px-6 rounded-md">
            Our Services
          </button>
        </div>
      </div>

      {/* Right content */}
      <div className="w-auto h-auto flex justify-center items-center ml-4 md:mr-8">
        <img
          className="rounded-full"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src={heroImg}
          alt="Legal Team"
          width="300"
          height="300"
        />
      </div>
    </section>
  );
};

export default Hero;
