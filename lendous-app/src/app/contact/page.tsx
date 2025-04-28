"use client";

import { motion } from 'framer-motion';
import Image from "next/image";

const ContactSection: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen bg-white flex items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-4xl sm:text-5xl font-extrabold text-[#27408F] leading-tight"
              >
                Contact Us Today
              </motion.h2>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              >
                <Image
                  src="/hero-bg3.jpg"
                  alt="Contact Us Image"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Side: Header, Description, Benefits, and Hours */}
            <div className="md:w-1/2 bg-[#7030A0] p-6 sm:p-8 rounded-t-lg md:rounded-t-none md:rounded-l-lg text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              >
                Let’s Discuss Your Business Needs
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl font-medium italic text-white max-w-4xl mx-auto md:mx-0"
              >
                Whether you’re looking to streamline operations, boost sales, or implement new technologies, our team is here to help you achieve your business goals.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 space-y-3"
              >
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#1AF866] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base text-white">Comprehensive business assessment</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#1AF866] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base text-white">Tailored solutions for African SMEs</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#1AF866] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base text-white">Ongoing support and guidance</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6"
              >
                <h3 className="text-base font-semibold text-white uppercase">Our Business Hours:</h3>
                <p className="mt-3 text-base text-white">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </motion.div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-1/2 p-6 sm:p-8 bg-white rounded-b-lg md:rounded-b-none md:rounded-r-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              >
                <h3 className="text-4xl sm:text-5xl font-extrabold text-[#27408F] mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-base"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="email"
                        placeholder="Your Email *"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-base"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-base"
                      />
                    </div>
                    <div className="flex-1">
                      <select
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-base"
                      >
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="business-assessment">Business Assessment</option>
                        <option value="solutions">Solutions for SMEs</option>
                        <option value="support">Support and Guidance</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message *"
                      rows={4}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 resize-none text-base"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-3 bg-[#7030A0] text-white rounded-lg font-semibold transition duration-300 shadow-lg text-base"
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