"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Calendar, 
  FileText, 
  HeadphonesIcon, 
  ChevronDown, 
  ChevronUp,
  Building,
  MessageSquare
} from "lucide-react";
import { JSX, useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  interface FAQ {
    question: string;
    answer: string;
    icon: JSX.Element;
  }

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: 'What types of businesses do you support?',
      answer: 'We specialize in supporting African SMEs across diverse sectors including technology startups, financial services, manufacturing, agriculture, retail, healthcare, and operational businesses. Our tailored solutions address industry-specific challenges while promoting sustainable growth and innovation.',
      icon: <Building className="text-emerald-500" size={24} />
    },
    {
      question: 'How can I schedule a complimentary consultation?',
      answer: 'You can easily schedule a complimentary consultation through our online booking system. Simply visit our Services page, select the category that aligns with your business needs, and choose an available time slot that works for you. Our team will confirm your appointment within 24 hours.',
      icon: <Calendar className="text-blue-500" size={24} />
    },
    {
      question: 'What is your process for developing customized quotes?',
      answer: 'Following your initial consultation, our team conducts a comprehensive assessment of your specific business requirements. We then prepare a detailed, transparent quote outlining proposed solutions, implementation timeline, deliverables, and investment requirements. This personalized document is typically delivered within 3-5 business days.',
      icon: <FileText className="text-purple-500" size={24} />
    },
    {
      question: 'Do you provide post-implementation support services?',
      answer: 'Absolutely. We offer comprehensive post-implementation support packages designed to ensure long-term success. Our dedicated support team provides technical assistance, maintenance services, system updates, and ongoing optimization recommendations. Support plans can be customized based on your specific operational requirements and budget considerations.',
      icon: <HeadphonesIcon className="text-orange-500" size={24} />
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <HelpCircle size={18} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Knowledge Base</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Find comprehensive answers to common inquiries about our services, methodology, and commitment to empowering African businesses.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/hero-bg3.jpg"
                alt="Business Consultation"
                width={600}
                height={320}
                className="object-cover w-full h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-full">
                  Expert Support
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">Empowering African Enterprises</h3>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gray-50">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                </div>
                <div>
                  {openIndex === index ? 
                    <ChevronUp size={20} className="text-gray-500" /> : 
                    <ChevronDown size={20} className="text-gray-500" />
                  }
                </div>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`px-6 pb-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-12 pr-6 border-l-2 border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 bg-blue-50 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900">Still have questions?</h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Our team is ready to provide personalized assistance tailored to your specific business needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <MessageSquare size={18} />
              Contact Our Experts
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection("consultation")}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-sm border border-blue-200 hover:border-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Calendar size={18} />
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;