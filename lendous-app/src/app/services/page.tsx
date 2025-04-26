"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUsers, FaMoneyBillWave, FaHandshake } from 'react-icons/fa';
import SlideInSection from '../../../components/SlideInSection';
import Navbar from '../../../components/Navbar';

const Services: React.FC = () => {
  const baseSlides = [
    '/hero-bg1.jpg',
    '/hero-bg2.jpg',
    '/hero-bg3.jpg',
    '/hero-bg4.jpg',
  ];

  const slides = [...baseSlides, baseSlides[0]];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = baseSlides.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
      await Promise.all(promises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        if (next === slides.length - 1) {
          setTimeout(() => setCurrentSlide(0), 1000);
          return next;
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length, imagesLoaded]);

  const transformStyle = {
    transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
    transition: currentSlide === 0 ? 'none' : 'transform 1s ease-in-out',
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceIcons = {
    'Lendous Tech': <FaLaptopCode className="w-6 h-6 text-[#27408F]" />,
    'Lendous People': <FaUsers className="w-6 h-6 text-[#27408F]" />,
    'Lendous Capital': <FaMoneyBillWave className="w-6 h-6 text-[#27408F]" />,
    'Lendous Support': <FaHandshake className="w-6 h-6 text-[#27408F]" />,
  };

  const cardGradients = [
    'bg-gradient-to-br from-[#E2D8EC] to-[#F5F5FF]',
    'bg-gradient-to-br from-[#F0E8FF] to-[#FAFAFF]',
    'bg-gradient-to-br from-[#F5F5FF] to-[#E2D8EC]',
    'bg-gradient-to-br from-[#FAFAFF] to-[#F0E8FF]',
  ];

  const serviceData = [
    {
      title: 'Lendous Tech',
      services: [
        'Development',
        'Web',
        'Business App Development',
        'Dashboard Development',
        'Data Analysis & Reporting',
        'Business Systems Setup',
        'Digital Transformation',
        'Workflow Automation',
        'Robotic Process Automation',
        'Tech Tools Curation',
        'Agents',
        'CRM, ERPs, HRIS, BFMS, Apps, BI/Analytics Tools etc.',
      ],
    },
    {
      title: 'Lendous People',
      services: [
        'People Operations',
        'Talent Acquisition',
        'Outsourced Hiring',
        'Rent a Resource (EaaS)',
        'Learning & Development',
        'Senior Leaders Training',
        'Middle Managers Training',
        'New Managers Training',
        'Operational Teams’ Training (HR, Sales, Systems & Process, Customer Service etc.)',
      ],
    },
    {
      title: 'Lendous Capital',
      services: [
        'Funding Readiness Support',
        'Pitch deck development',
        'Investor/Lender Introduction',
        'Grant & Loan application',
        'Credit & Financial Health Advisory',
        'SME credit risk analysis',
        'Financial health improvement plans',
        'Debt/Equity guidance for growth financing',
      ],
    },
    {
      title: 'Lendous Support',
      services: [
        'Advisory',
        'Across all Areas of Expertise',
        'Sales & Expansion',
        'In-Country Expansion',
        'Africa Expansion (East & West Africa)',
        'Market Research & Analysis',
        'Solution Delivery',
        'Project Management',
        'Process Management',
        'Change Management',
        'Continuous Improvement',
        'Business Compliance',
      ],
    },
  ];

  return (
    <div className="bg-[#E2D8EC] font-poppins">
      {/* Hero Section */}
      <div id="hero-section" className="relative h-screen flex items-center justify-center text-[#FFFFFF] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {!imagesLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#7030A0] to-[#27408F] opacity-85"></div>
          )}
          <div
            className="flex h-full"
            style={{
              ...transformStyle,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="h-full bg-cover bg-center"
                style={{
                  backgroundImage: imagesLoaded ? `url(${slide})` : 'none',
                  width: `${100 / slides.length}%`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#7030A0] to-[#27408F] opacity-85 z-0"></div>
        <Navbar />
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 py-8">
          <h1 className="text-[36px] sm:text-[40px] md:text-[52px] font-extrabold tracking-tight drop-shadow-lg">
            Comprehensive Services for African SMEs
          </h1>
          <p className="text-[24px] sm:text-[26px] md:text-[30px] mt-6 italic text-[#F0E8FF] drop-shadow-md font-light">
            We’ve Got You Covered
          </p>
          <div className="mt-10 flex justify-center">
            <motion.button
              onClick={scrollToServices}
              whileHover={{ scale: 1.1, backgroundColor: '#FFFFFF', color: '#7030A0', boxShadow: '0 0 15px rgba(26, 248, 102, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold transition duration-300 shadow-lg text-[16px]"
            >
              Explore Services
            </motion.button>
          </div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-8 h-8 text-[#1AF866]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>

      {/* Services Section */}
      <div id="services">
        <SlideInSection direction="left" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#FFFFFF] relative">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-extrabold text-[#27408F] leading-tight">
              Services
            </h2>
            <p className="text-[24px] mt-4 text-gray-700 font-light">
              We blend our combined expertise across the following service areas to give you solutions.
            </p>
            <div className="mt-12 sm:mt-16 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {serviceData.map((category, index) => (
                  <motion.div
                    key={index}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(112, 48, 160, 0.4)' }}
                    className={`p-6 rounded-2xl shadow-lg transition-transform duration-300 ${cardGradients[index]} border border-gray-100 relative z-10 hover:border-[#1AF866]`}
                  >
                    <div className="flex items-center mb-4">
                      {serviceIcons[category.title as keyof typeof serviceIcons]}
                      <h3 className="text-[32px] font-semibold text-[#27408F] ml-3">{category.title}</h3>
                    </div>
                    <ol className="sm:hidden list-disc list-inside text-[16px] text-gray-700 font-medium space-y-6">
                      {category.services.map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ol>
                    <div className="hidden sm:flex sm:flex-wrap sm:gap-4 text-[16px] text-gray-700 font-medium">
                      {category.services.map((service, idx) => (
                        <span key={idx} className="flex items-center">
                          <span className="text-[#7030A0] text-[14px] mr-2 font-bold">•</span>
                          {service}
                          {idx < category.services.length - 1 && ' '}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mt-12 sm:mt-16">
              <Link href="/solutions">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: '#FFFFFF', color: '#7030A0', boxShadow: '0 0 15px rgba(26, 248, 102, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold transition duration-300 shadow-lg text-[16px]"
                >
                  Explore Solutions
                </motion.button>
              </Link>
            </div>
          </div>
        </SlideInSection>
      </div>
    </div>
  );
};

export default Services;