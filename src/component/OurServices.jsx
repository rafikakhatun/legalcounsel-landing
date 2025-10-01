// src/components/OurServices.jsx
import React from "react";
import { 
  FaLandmark, 
  FaGavel, 
  FaHome, 
  FaUserShield, 
  FaBalanceScale, 
  FaFileSignature 
} from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="w-full py-14 px-10">
      {/* heading */}
      <div className="text-center mt-6 space-y-3">
        <h1 className="text-3xl text-[#302E81] font-semibold" data-aos="zoom-in-up">
          Our Legal Services
        </h1>

        <p className="text-lg text-[#4B5563]" data-aos="zoom-in-up">
          Comprehensive legal solutions tailored to meet your personal and business needs.
        </p>
      </div>

      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* card 1 */}
        <div
          className="p-8 bg-[#F9FAFB] shadow-lg rounded-lg space-y-4 border border-gray-200"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <FaLandmark className="text-4xl text-[#F59E0B]" />
          <h1 className="text-[#302E81] text-xl font-semibold">Corporate Law</h1>
          <p className="text-md text-[#4B5563]">
            Expert guidance on business formation, contracts, compliance, and corporate governance.
          </p>
          <button className="text-[#F59E0B] hover:text-amber-700">Learn More →</button>
        </div>

        {/* card 2 */}
        <div className="p-8 bg-[#F9FAFB] shadow-lg rounded-lg space-y-4 border border-gray-200" data-aos="flip-up">
          <FaGavel className="text-4xl text-[#F59E0B]" />
          <h1 className="text-[#302E81] text-xl font-semibold">Civil Litigation</h1>
          <p className="text-md text-[#4B5563]">
            Strategic representation in disputes, lawsuits, and settlement negotiations.
          </p>
          <button className="text-[#F59E0B] hover:text-amber-700">Learn More →</button>
        </div>

        {/* card 3 */}
        <div className="p-8 bg-[#F9FAFB] shadow-lg rounded-lg space-y-4 border border-gray-200" data-aos="zoom-out-left">
          <FaHome className="text-4xl text-[#F59E0B]" />
          <h1 className="text-[#302E81] text-xl font-semibold">Real Estate Law</h1>
          <p className="text-md text-[#4B5563]">
            Handling property transactions, leases, zoning issues, and real estate disputes.
          </p>
          <button className="text-[#F59E0B] hover:text-amber-700">Learn More →</button>
        </div>

        {/* card 4 */}
        <div
          className="p-8 bg-[#F9FAFB] shadow-lg rounded-lg space-y-4 border border-gray-200"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <FaUserShield className="text-4xl text-[#F59E0B]" />
          <h1 className="text-[#302E81] text-xl font-semibold">Personal Injury</h1>
          <p className="text-md text-[#4B5563]">
            Representation for victims of accidents, negligence, and personal injury claims.
          </p>
          <button className="text-[#F59E0B] hover:text-amber-700">Learn More →</button>
        </div>

        {/* card 5 */}
        <div className="p-8 bg-[#F9FAFB] shadow-lg rounded-lg space-y-4 border border-gray-200" data-aos="flip-up">
          <FaBalanceScale className="text-4xl text-[#F59E0B]" />
          <h1 className="text-[#302E81] text-xl font-semibold">Family Law</h1>
          <p className="text-md text-[#4B5563]">
            Compassionate assistance with divorce, custody, adoption, and family matters.
          </p>
          <button className="text-[#F59E0B] hover:text-amber-700">Learn More →</button>
        </div>

        {/* card 6 */}
        <div className="p-8 bg-[#F9FAFB] shadow-lg rounded-lg space-y-4 border border-gray-200" data-aos="zoom-out-left">
          <FaFileSignature className="text-4xl text-[#F59E0B]" />
          <h1 className="text-[#302E81] text-xl font-semibold">Estate Planning</h1>
          <p className="text-md text-[#4B5563]">
            Creating wills, trusts, and comprehensive estate plans to protect your legacy.
          </p>
          <button className="text-[#F59E0B] hover:text-amber-700">Learn More →</button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
