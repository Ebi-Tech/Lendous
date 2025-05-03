"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { JSX, useState } from "react";

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
      question: "How can I schedule a complimentary consultation?",
      answer: "You can easily schedule a complimentary consultation through our online booking system. Simply visit our Services page, select the category that aligns with your business needs, and choose an available time slot that works for you. Our team will confirm your appointment within 24 hours.",
    },
    {
      question: "What is your process for developing customized quotes?",
      answer: "Following your initial consultation, our team conducts a comprehensive assessment of your specific business requirements. We then prepare a detailed, transparent quote outlining proposed solutions, implementation timeline, deliverables, and investment requirements. This personalized document is typically delivered within 3-5 business days.",
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
    <div>
      {/* Hero Section */}
      <div
        id="faq-hero-section"
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
            src="/hero-bg3.jpg"
            alt="FAQ Hero Background"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
            className="transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30 z-1 backdrop-blur-[3px]"></div>
        </motion.div>
        <div className="py-16 sm:py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-start gap-6 sm:gap-8">
          <div className="text-center md:text-left md:max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
            >
              Answers to Your Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mt-4 sm:mt-6 text-lg sm:text-xl font-medium text-gray-200 leading-relaxed bg-gray-900/50 p-4 sm:p-6 rounded-xl shadow-lg max-w-md"
            >
              Explore our FAQs to learn more about how we can support your business growth and address your unique challenges.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="mt-6"
            >
              <button
                onClick={() => scrollToSection("faq-content-section")}
                className="px-6 sm:px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold text-base shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Explore FAQs"
              >
                Explore FAQs
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Content Section */}
      <section id="faq-content-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <HelpCircle size={18} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Common Questions</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Find answers to common asked questions about our services and approach.
            </motion.p>
          </div>

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
                  <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
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
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;