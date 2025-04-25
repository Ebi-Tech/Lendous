"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SlideInSection from '../../components/SlideInSection';

const Home: React.FC = () => {
  const baseSlides = [
    '/hero-bg1.jpg', // Black businessman working on laptop
    '/hero-bg2.jpg', // Nigerian marketplace
    '/hero-bg3.jpg', // Black business team meeting
    '/hero-bg4.jpg', // Sunrise over African savanna
  ];

  // Duplicate the first slide at the end for seamless looping
  const slides = [...baseSlides, baseSlides[0]];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        // When we reach the duplicated slide (index 4), reset to 0 instantly
        if (next === slides.length) {
          return 0;
        }
        return next;
      });
    }, 3000); // Change slide every 2 seconds as per your updated code
    return () => clearInterval(interval);
  }, [slides.length]);

  // Reset transform instantly when currentSlide is 0 (after reaching the duplicated slide)
  const transformStyle =
    currentSlide === 0
      ? { transform: 'translateX(0)', transition: 'none' }
      : { transform: `translateX(-${currentSlide * (100 / slides.length)}%)`, transition: 'transform 1s ease-in-out' };

  return (
    <div className="bg-[#E2D8EC] font-aptos">
      {/* Hero Section */}
      <SlideInSection direction="down" className="relative h-screen flex items-center justify-center text-[#FFFFFF] overflow-hidden">
        <div className="absolute inset-0">
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
                  backgroundImage: `url(${slide})`,
                  width: `${100 / slides.length}%`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#7030A0] to-[#27408F] opacity-85"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-[36px] sm:text-[40px] md:text-[52px] font-bold tracking-tight drop-shadow-lg">
            Ready to Be The Next Big Thing in Africa?
          </h1>
          <p className="text-[22px] sm:text-[26px] md:text-[30px] mt-4 italic text-[#E0D0F0] drop-shadow-md">
            Launch, Grow, Scale Your Business with Lendous
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/solutions">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#7030A0' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold transition duration-300 shadow-lg"
              >
                Explore Solutions
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#7030A0' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-3 border-2 border-[#FFFFFF] text-[#FFFFFF] rounded-lg font-semibold transition duration-300 shadow-lg"
              >
                Free Consultation
              </motion.button>
            </Link>
          </div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-8 h-8 text-[#1AF866]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </SlideInSection>

      {/* Problems We Solve Section */}
      <SlideInSection direction="left" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#27408F] leading-tight">
            Starting & Growing a Business is Hard.
            <br />
            We are Here to Make it Easier
          </h2>
          <p className="text-[14px] sm:text-[16px] text-gray-600 mt-6 max-w-2xl mx-auto">
            In a world filled with guesswork managing your business, so many business tools, and endless subscriptions, let’s give you only the Systems, Tools, Advisory, & Resources (STARS) you need at your current business stage.
          </p>
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: 1, title: 'Select Service(s)', desc: 'Explore our range of services & pick the preferred.' },
              { step: 2, title: 'Get a Free Consultation', desc: 'We ensure your selection(s) are solving the problems at your current stage.' },
              { step: 3, title: 'Receive an Online Quote', desc: 'We share with you the best quote for what you need.' },
              { step: 4, title: 'Your Solution Gets Deployed', desc: 'We deliver your solution in record time and stay close to support on your next need.' },
            ].map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative bg-[#E2D8EC] p-4 sm:p-6 rounded-lg shadow-lg transition-transform duration-300 group"
              >
                <span className="text-[20px] sm:text-[24px] font-bold text-[#7030A0] block">{item.step}.</span>
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#27408F] mt-2">{item.title}</h3>
                <p className="text-[14px] sm:text-[16px] text-gray-700 mt-2">{item.desc}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#1AF866] rounded-lg transition duration-300"></div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 sm:mt-10">
            <Link href="/solutions">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#1AF866', color: '#27408F' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-3 bg-[#7030A0] text-[#FFFFFF] rounded-lg font-semibold transition duration-300 shadow-lg"
              >
                Explore Solutions
              </motion.button>
            </Link>
          </div>
        </div>
      </SlideInSection>

      {/* Why Lendous Section */}
      <SlideInSection direction="right" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#E2D8EC] text-[#27408F]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold tracking-tight">
            The Lendous Assurance: You Will Never Work Alone!
          </h2>
          <p className="text-[14px] sm:text-[16px] mt-4 text-[#7030A0]">
            Whenever your business needs anything, think Lendous first.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-8 sm:gap-12">
            {[
              { value: '$300M+', label: 'Value Delivered by Lendous Leaders' },
              { value: '4+ Years', label: 'Supporting African SMEs' },
              { value: '30+ Years', label: 'Leadership Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-[20px] sm:text-[24px] font-bold text-[#7030A0]">{stat.value}</p>
                <p className="text-[14px] sm:text-[16px] mt-2 text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideInSection>

      {/* Pre-Footer Section: Ready to Grow Your Business */}
      <SlideInSection direction="down" className="bg-[#7030A0] text-[#FFFFFF] py-8 sm:py-12 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
    <div className="text-center sm:text-left">
      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold">
        Ready to Grow Your Business?
      </h2>
      <p className="text-[14px] sm:text-[16px] mt-2">
        Let’s discuss how our STARS approach can transform your business.
      </p>
    </div>
    <Link href="/contact">
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#7030A0' }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 sm:px-8 sm:py-3 bg-transparent border-2 border-[#FFFFFF] text-[#FFFFFF] rounded-full font-semibold transition duration-300 flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#7030A0]"
      >
        Get in Touch
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.button>
    </Link>
  </div>
</SlideInSection>
    </div>
  );
};

export default Home;