"use client";

import { motion } from 'framer-motion';


const ContactSection: React.FC = () => {
  return (
    <div className="bg-[#E2D8EC] font-aptos">
    
      <section className="py-20 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-extrabold text-[#27408F] leading-tight">
            Contact Us
          </h2>
          <p className="text-[24px] mt-8 text-gray-700 font-light">
            Get in touch with us to learn more about how we can help your business grow.
          </p>
          <div className="mt-12 sm:mt-16">
            <form className="max-w-md mx-auto space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#1AF866] focus:ring-2 focus:ring-[#1AF866] outline-none text-gray-700"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#1AF866] focus:ring-2 focus:ring-[#1AF866] outline-none text-gray-700"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#1AF866] focus:ring-2 focus:ring-[#1AF866] outline-none text-gray-700 resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1, backgroundColor: '#FFFFFF', color: '#7030A0', boxShadow: '0 0 15px rgba(26, 248, 102, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold transition duration-300 shadow-lg text-[16px]"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;