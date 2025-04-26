"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import { AboutSection } from './about/page';
import { ServicesSection } from './services/page';
import { SolutionsSection } from './solutions/page';
import { TrainingProgramsSection } from './training-programs/page';
import { FAQSection } from './faq/page';

const Home: React.FC = () => {
  const baseSlides = [
    {
      background: '/hero-bg1.jpg',
      title: 'Ready to Be The Next Big Thing in Africa?',
      subtitle: 'Grow with Lendous',
    },
    {
      background: '/hero-bg2.jpg',
      title: 'Starting & Growing a Business is Hard. We are Here to Make it Easier',
      subtitle: 'Select service(s) to explore our range, get a free consultation to ensure solutions fit your stage, receive an online quote, and see your solution deployed with ongoing support.',
    },
    {
      background: '/hero-bg3.jpg',
      title: 'The Lendous Assurance: You Will Never Work Alone!',
      subtitle: 'Whenever your business needs anything, think Lendous first',
    },
  ];

  const slides = [...baseSlides, baseSlides[0]];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      let hasLoadedAtLeastOne = false;
      const promises = baseSlides.map((slide) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.background;
          img.onload = () => {
            console.log(`Successfully loaded image: ${slide.background}`);
            hasLoadedAtLeastOne = true;
            resolve(true);
          };
          img.onerror = () => {
            console.error(`Failed to load image: ${slide.background}`);
            resolve(false);
          };
        });
      });

      const results = await Promise.all(promises);
      if (hasLoadedAtLeastOne) {
        setImagesLoaded(true);
      } else {
        setImageLoadError(true);
        console.error('All hero background images failed to load. Please ensure the images are in the public directory (e.g., public/hero-bg1.jpg).');
      }
    };

    preloadImages();
  }, [slides]);

  useEffect(() => {
    if (!imagesLoaded || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        if (next === slides.length - 1) {
          setTimeout(() => setCurrentSlide(0), 2000);
          return next;
        }
        return next;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length, imagesLoaded, isAutoPlaying]);

  const transformStyle = {
    transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
    transition: currentSlide === 0 ? 'none' : 'transform 1s ease-in-out',
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => {
      const next = prev - 1;
      if (next < 0) {
        return baseSlides.length - 1;
      }
      return next;
    });
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => {
      const next = prev + 1;
      if (next === slides.length - 1) {
        setTimeout(() => setCurrentSlide(0), 2000);
        return next;
      }
      return next;
    });
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="bg-[#E2D8EC] font-aptos overflow-x-hidden">
      {/* Hero Section with Slider */}
      <div id="hero-section" className="relative min-h-screen flex items-center justify-center text-[#FFFFFF] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {imageLoadError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#FFFFFF] text-[16px] bg-black bg-opacity-50 z-10">
              <p>Failed to load hero background images. Please check image paths.</p>
              <p className="mt-2 text-[14px]">Images should be in the public directory (e.g., public/hero-bg1.jpg).</p>
            </div>
          ) : (
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
                    backgroundImage: imagesLoaded ? `url(${slide.background})` : 'none',
                    width: `${100 / slides.length}%`,
                  }}
                ></div>
              ))}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7030A0] to-[#27408F] opacity-85 z-1"></div>
        </div>
        <Navbar scrollToSection={scrollToSection} />
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 py-4">
          <motion.h1
            key={slides[currentSlide].title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="text-[#FFFFFF] text-[32px] font-extrabold tracking-tight drop-shadow-lg break-words"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={slides[currentSlide].subtitle}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
            className="mt-8 italic text-[#E2D8EC] drop-shadow-md font-light break-words leading-tight text-[24px]"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          {/* Stats Cards Above the Button */}
          {currentSlide === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 max-w-4xl mx-auto flex flex-row flex-wrap justify-between space-x-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-[#7030A0] rounded-full flex items-center justify-center">
                  <span className="text-[#FFFFFF] text-[24px] font-bold">$300M+</span>
                </div>
                <p className="mt-4 text-[#E2D8EC] text-[16px] text-center">Value Delivered by Lendous</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-[#7030A0] rounded-full flex items-center justify-center">
                  <span className="text-[#FFFFFF] text-[24px] font-bold">4+ Years</span>
                </div>
                <p className="mt-4 text-[#E2D8EC] text-[16px] text-center">Supporting African SMEs</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-[#7030A0] rounded-full flex items-center justify-center">
                  <span className="text-[#FFFFFF] text-[24px] font-bold">30+ Years</span>
                </div>
                <p className="mt-4 text-[#E2D8EC] text-[16px] text-center">Leadership Experience</p>
              </div>
            </motion.div>
          )}
          <div className="mt-12 flex justify-center">
            <motion.button
              onClick={() => scrollToSection('services')}
              whileHover={{ scale: 1.1, backgroundColor: '#FFFFFF', color: '#7030A0', boxShadow: '0 0 15px rgba(26, 248, 102, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold transition duration-300 shadow-lg text-[16px]"
            >
              Explore Services
            </motion.button>
          </div>
        </div>
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 bottom-8 z-5 bg-black bg-opacity-50 text-[#FFFFFF] rounded-full p-3 opacity-50 hover:opacity-100 hover:bg-opacity-75 transition duration-300"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 bottom-8 z-5 bg-black bg-opacity-50 text-[#FFFFFF] rounded-full p-3 opacity-50 hover:opacity-100 hover:bg-opacity-75 transition duration-300"
        >
          <ChevronRight size={32} />
        </button>
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

      

      <ServicesSection />
      
      <SolutionsSection />
      
      <AboutSection />

      <TrainingProgramsSection />

      <FAQSection />

      
    </div>
  );
};

export default Home;