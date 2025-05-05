"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <div
        id="hero-section"
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ minHeight: "80vh", maxHeight: "800px" }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
          <Image
            src="/hero-bg5.jpg"
            alt="Hero Background - Contact Us"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
            className="transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-900/10 z-1"></div>
        </motion.div>
        <div className="py-16 sm:py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-start gap-6 sm:gap-8">
          <div className="text-center md:text-left md:max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[16px] font-bold text-white"
            >
              Contact Us Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-4 sm:mt-6 text-[14px] font-normal text-gray-200 bg-gray-900/50 p-4 sm:p-6 rounded-xl shadow-lg max-w-md"
            >
              Let’s discuss how we can help your business thrive with tailored solutions and ongoing support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="mt-6"
            >
              <button
                onClick={() => scrollToSection("contact-form-section")}
                className="px-6 sm:px-8 py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-bold text-[14px] shadow-lg transition-all duration-300 hover:text-[#1AF866] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#1AF866] focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Get in touch with us"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Side: Header, Description, Benefits, and Hours */}
            <div className="md:w-1/2 bg-[#7030A0] p-6 sm:p-8 rounded-t-lg md:rounded-t-none md:rounded-l-lg text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-[16px] font-bold text-white"
              >
                Let’s Discuss Your Business Needs
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                className="mt-6 text-[14px] font-normal text-gray-100 max-w-4xl mx-auto md:mx-0"
              >
                Whether you’re looking to streamline operations, boost sales, or implement new technologies, our team is here to help you achieve your business goals.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 space-y-4"
              >
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#1AF866] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[14px] font-normal text-gray-100">Comprehensive business assessment</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#1AF866] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[14px] font-normal text-gray-100">Tailored solutions for African SMEs</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#1AF866] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[14px] font-normal text-gray-100">Ongoing support and guidance</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8"
              >
                <h3 className="text-[16px] font-bold text-white uppercase">Our Business Hours:</h3>
                <p className="mt-3 text-[14px] font-normal text-gray-100">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </motion.div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-1/2 p-6 sm:p-8 bg-white rounded-b-lg md:rounded-b-none md:rounded-r-lg">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              >
                <h3 className="text-[16px] font-bold text-[#27408F] mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-[14px] font-normal placeholder-gray-500 transition-all duration-300"
                        required
                        aria-label="Your Name"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="email"
                        placeholder="Your Email *"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-[14px] font-normal placeholder-gray-500 transition-all duration-300"
                        required
                        aria-label="Your Email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-[14px] font-normal placeholder-gray-500 transition-all duration-300"
                        aria-label="Company Name"
                      />
                    </div>
                    <div className="flex-1">
                      <select
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-[14px] font-normal transition-all duration-300"
                        aria-label="I'm interested in"
                      >
                        <option value="" disabled selected hidden>
                          I’m interested in
                        </option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="training-programs">Training Programs</option>
                        <option value="business-solutions">Business Solutions</option>
                        <option value="partnership">Partnership Opportunities</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message *"
                      rows={4}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-[14px] font-normal resize-none placeholder-gray-500 transition-all duration-300"
                      required
                      aria-label="Your Message"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-3 bg-[#7030A0] text-white rounded-lg font-bold text-[14px] transition-all duration-300 shadow-lg hover:text-[#1AF866] hover:bg-[#5a2480] focus:outline-none focus:ring-2 focus:ring-[#7030A0] focus:ring-offset-2"
                    aria-label="Send Message"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;