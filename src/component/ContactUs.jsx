// src/components/ContactUs.jsx
import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-white py-16 md:py-24 w-full">
      {/* header */}
      <div className="text-center mt-8 space-y-3">
        <h1 className="text-[#302E81] font-semibold text-3xl">Contact Us</h1>
        <p className="text-[#4B5563] text-lg">
          Schedule a consultation or reach out with any questions about our legal
          services.
        </p>
      </div>

      {/* form and location container */}
      <div className="p-8 flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Contact Us Form - Left Section */}
        <div
          className="lg:w-1/2 w-full p-6 border border-[#D1D5DA] rounded-md mt-2"
          data-aos="flip-left"
        >
          <form className="space-y-5">
            {/* Name and Email */}
            <div className="flex flex-col md:flex-row w-full gap-3">
              <div className="flex flex-col w-full md:w-1/2">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full py-3 px-6 border border-gray-300 rounded-md focus:ring-2 ring-blue-700 outline-none"
                />
              </div>

              <div className="flex flex-col w-full md:w-1/2">
                <label htmlFor="email">Full Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full py-3 px-6 border border-gray-300 rounded-md focus:ring-2 ring-blue-700 outline-none"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                type="tel"
                className="w-full py-3 px-4 border border-gray-300 rounded-md focus:ring-2 ring-blue-700 outline-none"
              />
            </div>

            {/* Service Needed */}
            <div>
              <label htmlFor="service">Service Needed</label>
              <select
                id="service"
                className="mt-2 w-full py-3 px-4 border border-gray-300 rounded-md focus:ring-2 ring-blue-700 outline-none"
              >
                <option value="">Select a service</option>
                <option value="">Corporate law</option>
                <option value="">Civil litigation</option>
                <option value="">Real estate law</option>
                <option value="">Personal Injury</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="5"
                className="mt-2 w-full border border-gray-300 rounded-md focus:ring-2 ring-blue-700 outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="px-6 py-3 mt-2 rounded-md text-white font-semibold text-md bg-[#342F91]">
              <a href="#">Submit Request</a>
            </button>
          </form>
        </div>

        {/* Our Location - Right Section */}
        <div
          className="lg:w-1/2 w-full p-6 shadow-md space-y-5 rounded-md"
          data-aos="flip-right"
        >
          <h1 className="text-xl font-semibold text-[#342F91]">Our Location</h1>
          <div className="w-full bg-[#E4E7EB] rounded-md h-64 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2900945425813!2d88.3407130749633!3d22.5682509794949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a1e1ee880f%3A0x3ba0dd3aa1410929!2sCalcutta%20High%20Court!5e0!3m2!1sen!2sin!4v1747035922877!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-3">
            <i className="fas fa-map-marker-alt text-[#F59E0B] mt-2 text-lg"></i>
            <p className="text-[#4B5563] text-md">210, High Court Road, Kolkata - 700001</p>
          </div>

          {/* Contact Number */}
          <div className="flex items-start space-x-3">
            <i className="fas fa-phone-alt text-[#F59E0B] mt-2 text-lg"></i>
            <p className="text-[#4B5563] text-md">(555) 123-4567</p>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-3">
            <i className="fas fa-envelope text-[#F59E0B] mt-2 text-lg"></i>
            <p className="text-[#4B5563] text-md">info@legalcounsel.com</p>
          </div>

          {/* Opening Hours */}
          <div className="flex items-start space-x-3">
            <i className="fas fa-clock text-[#F59E0B] mt-2 text-md"></i>
            <p className="text-[#4B5563] text-md">
              Monday - Friday: 9:00 AM - 5:30 PM
              <br />
              Saturday: 10:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
