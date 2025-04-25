"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SlideInSection from '../../components/SlideInSection';
import Navbar from '../../components/Navbar';

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
        if (next === slides.length) {
          return 0;
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Reset transform instantly when currentSlide is 0 (after reaching the duplicated slide)
  const transformStyle =
    currentSlide === 0
      ? { transform: 'translateX(0)', transition: 'none' }
      : { transform: `translateX(-${currentSlide * (100 / slides.length)}%)`, transition: 'transform 1s ease-in-out' };

  return (
    <div className="bg-[#E2D8EC] font-poppins">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-[#FFFFFF] overflow-hidden">
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
        {/* Navbar placed directly on the Hero section */}
        <Navbar />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7030A0] to-[#27408F] opacity-85"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 py-8">
          <h1 className="text-[36px] sm:text-[40px] md:text-[52px] font-extrabold tracking-tight drop-shadow-lg">
            Ready to Be The Next Big Thing in Africa?
          </h1>
          <p className="text-[22px] sm:text-[26px] md:text-[30px] mt-6 italic text-[#F0E8FF] drop-shadow-md font-light">
            Grow with Lendous
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/solutions">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: '#FFFFFF', color: '#7030A0', boxShadow: '0 0 15px rgba(26, 248, 102, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold transition duration-300 shadow-lg"
              >
                Explore Solutions
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
      </div>

      {/* Problems We Solve Section with Stats */}
      <SlideInSection direction="left" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-extrabold text-[#27408F] leading-tight">
            Starting & Growing a Business is Hard.
            <br />
            We are Here to Make it Easier
          </h2>
          {/* Stats as Circular Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8">
            {[
              { value: '$300M+', label: 'Value Delivered by Lendous Leaders' },
              { value: '4+ Years', label: 'Supporting African SMEs' },
              { value: '30+ Years', label: 'Leadership Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#7030A0] to-[#27408F] rounded-full flex items-center justify-center text-[#FFFFFF] font-bold text-[16px] sm:text-[20px] shadow-lg px-4 text-center leading-tight">
                  {stat.value}
                </div>
                <p className="text-[12px] sm:text-[14px] mt-3 text-gray-700 max-w-[120px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          {/* Steps with Icons */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {[
              { icon: <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#7030A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>, title: 'Select Service(s)', desc: 'Explore our range of services & pick the preferred.' },
              { icon: <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#7030A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2v-6a2 2 0 012-2h2m4 0V6a2 2 0 00-2-2H7a2 2 0 00-2 2v2" /></svg>, title: 'Get a Free Consultation', desc: 'We ensure your selection(s) are solving the problems at your current stage.' },
              { icon: <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#7030A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 8c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" /></svg>, title: 'Receive an Online Quote', desc: 'We share with you the best quote for what you need.' },
              { icon: <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#7030A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Your Solution Gets Deployed', desc: 'We deliver your solution in record time and stay close to support on your next need.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2, boxShadow: '0 0 15px rgba(112, 48, 160, 0.3)' }}
                className="relative bg-gradient-to-br from-[#E2D8EC] to-[#F5EFFF] p-4 sm:p-6 rounded-xl shadow-lg transition-transform duration-300 group"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#27408F] mt-4 text-center">{item.title}</h3>
                <p className="text-[14px] sm:text-[16px] text-gray-700 mt-3 text-center font-light">{item.desc}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#1AF866] rounded-xl transition duration-300"></div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 sm:mt-16">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: '#FFFFFF', color: '#7030A0', boxShadow: '0 0 15px rgba(26, 248, 102, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold transition duration-300 shadow-lg"
              >
                Explore Services
              </motion.button>
            </Link>
          </div>
        </div>
      </SlideInSection>

      {/* Pre-Footer Section: Ready to Grow Your Business */}
      <SlideInSection direction="down" className="bg-[#7030A0] text-[#FFFFFF] py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold">
              Ready to Grow Your Business?
            </h2>
          </div>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#FFFFFF', color: '#7030A0', boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 sm:px-8 sm:py-3 bg-transparent border-2 border-[#FFFFFF] text-[#FFFFFF] rounded-full font-semibold transition duration-300 flex items-center gap-2"
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