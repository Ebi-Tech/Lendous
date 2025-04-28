"use client";

import Image from "next/image";
import { motion } from 'framer-motion';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'What types of businesses do you support?',
      answer: 'We support African SMEs across various industries, including tech, finance, and operations.',
    },
    {
      question: 'How can I get a free consultation?',
      answer: 'You can schedule a free consultation by exploring our services and selecting the one that fits your needs.',
    },
    {
      question: 'What is the process for receiving an online quote?',
      answer: 'After your consultation, we’ll provide a tailored online quote based on your business requirements.',
    },
    {
      question: 'Do you offer ongoing support after solution deployment?',
      answer: 'Yes, we provide continuous support to ensure your business thrives after deployment.',
    },
  ];

  return (
    <section id="faq" className="pt-28 sm:pt-28 pb-20 sm:pb-24 px-4 sm:px-6 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto">
        {/* Header, Subtitle, and Image */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-10 sm:mb-12">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-[32px] sm:text-[36px] md:text-[40px] font-extrabold text-[#27408F] leading-tight"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="mt-8 text-[24px] text-gray-700 font-light max-w-4xl mx-auto md:mx-0"
            >
              Find answers to common questions about our services and solutions.
            </motion.p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            >
              <Image
                src="/hero-bg3.jpg"
                alt="FAQ Image"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="mt-12 sm:mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-[#E2D8EC] rounded-lg shadow-lg border border-gray-100 hover:border-[#1AF866] transition-all duration-300 text-left"
            >
              <h3 className="text-[20px] font-semibold text-[#27408F]">{faq.question}</h3>
              <p className="mt-4 text-[16px] text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#FFFFFF', color: '#7030A0', boxShadow: '0 0 15px rgba(26, 248, 102, 0.5)' }}
 
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold transition duration-300 shadow-lg text-[16px]"
          >
            Contact Us for More Info
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;