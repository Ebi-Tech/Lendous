"use client";
import Image from "next/image";
import Link from "next/link";
import SlideInSection from "../../../components/SlideInSection";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  interface FAQ {
    question: string;
    answer: string;
  }

  const faqs: FAQ[] = [
    {
      question: "How quickly can you start working with us?",
      answer: "Immediately after your Free Consultation. Once we align on the right solutions to your business problems, work commences immediately per agreed terms.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "Retail: Superstore, Electronic Store, Bakery, Boutique Restaurant: A la carte, Fast Food, Fine Dining Services: Hair Salon",
    },
    {
      question: "Can you accommodate our budget constraints?",
      answer: "We understand the budget realities of African SMEs and offer flexible engagement models. After understanding your specific needs, we'll propose solutions that align with your budget while delivering maximum value.",
    },
    {
      question: "Do you work with businesses outside Nigeria?",
      answer: "Yes, we serve clients across multiple African countries. Our team has experience working with businesses in West, East, and Southern Africa, and we can accommodate remote consultations when needed.",
    },
    {
      question: "How do you measure the success of your services?",
      answer: "We establish clear, measurable objectives at the beginning of each engagement. Depending on your goals, these might include revenue growth, cost reduction, improved efficiency metrics, customer satisfaction, or other relevant KPIs.",
    },
    {
      question: "What makes your approach different from other consultancies?",
      answer: "First we are not a mere consultancy, we are your Growth Partner, helping you address problems so you can shine. We take care of what you need but cannot handle by yourself. We handhold you through it all, and do not just sell tools like the others do, leaving you to figure it out",
    },
    {
      question: "What types of businesses do you support?",
      answer: "We specialize in supporting African SMEs across diverse sectors including technology startups, financial services, manufacturing, agriculture, retail, healthcare, and operational businesses. Our tailored solutions address industry-specific challenges while promoting sustainable growth and innovation.",
    },
    {
      question: "Do you provide post-implementation support services?",
      answer: "Absolutely. We offer comprehensive post-implementation support packages designed to ensure long-term success. Our dedicated support team provides technical assistance, maintenance services, system updates, and ongoing optimization recommendations. Support plans can be customized based on your specific operational requirements and budget considerations.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section
        id="faq-hero-section"
        className="relative flex flex-col justify-center bg-cover bg-center"
        style={{
          minHeight: "700px",
          backgroundImage: "url('/hero-bg6.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300/50 to-purple-100/10 z-1"></div>

        {/* Accent Top Border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1AF866] via-[#27408F] to-[#7030A0] z-10"></div>

        <div className="py-12 sm:py-16 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-12 text-center">
          <div className="space-y-6 sm:space-y-10 px-4 sm:px-0">
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white text-[20px] sm:text-[36px] font-extrabold leading-tight [text-shadow:_0_2px_6px_rgba(0,0,0,0.4)]"
              >
                Answers to Your Questions
              </motion.h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <svg width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 5C20 -1.66667 40 -1.66667 60 5C80 11.6667 100 11.6667 120 5"
                    stroke="#1AF866"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-white text-[16px] sm:text-[18px] font-comic-neue tracking-wide mt-6"
            >
              Explore our FAQs to learn more about how we can support your business
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
              <motion.button
                role="button"
                tabIndex={0}
                onClick={() => scrollToSection("faq-content-section")}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <span className="font-poppins">Explore FAQs</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 48"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-12"
          >
            <path
              d="M0 48H1440V0C1200 32 960 48 720 48C480 48 240 32 0 0V48Z"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section id="faq-content-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <h3 className="text-[16px] font-bold text-gray-900">{faq.question}</h3>
                  <div>
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-gray-500" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-500" />
                    )}
                  </div>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-[14px] font-normal text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <SlideInSection className="bg-[#7030A0] text-white py-5 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-8 text-center sm:text-left">
          <div className="mt-0">
            <h2 className="text-[24px]  font-extrabold font-poppins">
              Ready to{" "}
              <span className="font-comic-neue text-[#1AF866] text-[24px]">
                Grow
              </span>{" "}
              Your Business?
            </h2>
            <p className="mt-4 text-[12px] sm:text-[14px] font-comic-neue tracking-wide">
              Let's help you do the dirty work so you can focus on what you know
              how to do.
            </p>
          </div>
          <Link href="/contact">
            <motion.button
              onClick={() => scrollToSection("consultation")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 bg-white text-[#7030A0] rounded-lg font-semibold text-[14px] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-poppins"
            >
              <span className="font-comic-neue text-[14px]">Get in Touch</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </Link>
        </div>
      </SlideInSection>
    </div>
  );
};

export default FAQSection;