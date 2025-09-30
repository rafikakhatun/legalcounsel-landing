// src/components/ExpertAttorneys.jsx
import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import attorney1 from "../assets/side-view-smiley-female-judge-with-gavel.jpg";
import attorney2 from "../assets/portrait-confident-young-businessman-with-his-arms-crossed.jpg";
import attorney3 from "../assets/close-up-male-executive.jpg";

const ExpertAttorneys = () => {
    return (
        <section className="w-full px-10 py-16 bg-[#F3F4F6]">
            {/* Heading */}
            <div className="text-center mt-6 space-y-3">
                <h1 className="text-3xl text-[#302E81] font-semibold" data-aos="zoom-in-up">
                    Our Expert Attorneys
                </h1>
                <p className="text-lg text-[#4B5563]" data-aos="zoom-in-up">
                    Meet our team of experienced legal professionals committed to your success.
                </p>
            </div>

            {/* Card Section */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 p-6 gap-6">
                {/* Card 1 */}
                <div className="p-8 w-full shadow-lg rounded-md overflow-hidden" data-aos="zoom-out-left"
                    data-aos-once="true">
                    <img
                        className="w-full h-64 object-center rounded-sm transform transition-transform duration-300 ease-in hover:scale-110"
                        src={attorney1}
                        alt="Sarah Johnson"

                    />
                    <div className="space-y-3 mt-4">
                        <h1 className="text-xl text-[#302E81] font-semibold">Sarah Johnson</h1>
                        <p className="text-[#F59E0B] font-semibold">Managing Partner</p>
                        <p className="text-[#4B5563] text-md">
                            Specialized in corporate law with over 15 years of experience representing Fortune 500 companies.
                        </p>
                        <div className="space-x-2 flex">
                            <FaLinkedin className="text-[#302E81] text-lg hover:text-[#F59E0B]" />
                            <FaEnvelope className="text-[#302E81] text-lg hover:text-[#F59E0B]" />
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="p-8 w-full shadow-lg rounded-md overflow-hidden" data-aos="zoom-out-left"
                    data-aos-once="true">
                    <img
                        className="w-full h-64 object-center rounded-sm transform transition-transform duration-300 ease-in hover:scale-110"
                        src={attorney2}
                        alt="Michael Chen"

                    />
                    <div className="space-y-3 mt-4">
                        <h1 className="text-xl text-[#302E81] font-semibold">Michael Chen</h1>
                        <p className="text-[#F59E0B] font-semibold">Senior Partner</p>
                        <p className="text-[#4B5563] text-md">
                            Expert in civil litigation with a proven track record of successful case resolutions and settlements.
                        </p>
                        <div className="space-x-2 flex">
                            <FaLinkedin className="text-[#302E81] text-lg hover:text-[#F59E0B]" />
                            <FaEnvelope className="text-[#302E81] text-lg hover:text-[#F59E0B]" />
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="p-8 w-full shadow-lg rounded-md overflow-hidden" data-aos="zoom-out-left"
                    data-aos-once="true">
                    <img
                        className="w-full h-64 object-center rounded-sm transform transition-transform duration-300 ease-in hover:scale-110"
                        src={attorney3}
                        alt="Amanda Rodriguez"

                    />
                    <div className="space-y-3 mt-4">
                        <h1 className="text-xl text-[#302E81] font-semibold">Amanda Rodriguez</h1>
                        <p className="text-[#F59E0B] font-semibold">Family Law Specialist</p>
                        <p className="text-[#4B5563] text-md">
                            Dedicated advocate for families with expertise in complex divorce and custody matters.
                        </p>
                        <div className="space-x-2 flex">
                            <FaLinkedin className="text-[#302E81] text-lg hover:text-[#F59E0B]" />
                            <FaEnvelope className="text-[#302E81] text-lg hover:text-[#F59E0B]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertAttorneys;
