"use client";


import Navbar from "../../components/Navbar";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const baseSlides = [
    {
      background: "/hero-bg1.jpg",
      title: "Ready to Be The Next Big Thing in Africa?",
      subtitle: "Grow with Lendous",
    },
    {
      background: "/hero-bg2.jpg",
      title: (
        <>
          Starting & Growing a Business
          <br className="block sm:hidden" />
          <br className="hidden sm:block" />
          is Hard. We are Here to Make it Easier.
        </>
      ),
      subtitle:
        "Select service(s) to explore our range, get a free consultation to ensure solutions fit your stage, receive an online quote, and see your solution deployed with ongoing support.",
    },
    {
      background: "/hero-bg3.jpg",
      title: (
        <>
          The Lendous Assurance:
          <br />
          You Will Never Work Alone!
        </>
      ),
      subtitle: "Whenever your business needs anything, think Lendous first",
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
        console.error(
          "All hero background images failed to load. Please ensure the images are in the public directory (e.g., public/hero-bg1.jpg)."
        );
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
    transition: currentSlide === 0 ? "none" : "transform 1s ease-in-out",
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
      <div
        id="hero-section"
        className="relative min-h-[calc(100vh-70px)] sm:min-h-[calc(100vh-80px)] flex items-center justify-center text-[#FFFFFF] overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {imageLoadError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#FFFFFF] text-[16px] font-aptos bg-black bg-opacity-50 z-10 px-4">
              <p className="text-center">
                Failed to load hero background images. Please check image paths.
              </p>
              <p className="mt-2 text-[14px] font-aptos text-center">
                Images should be in the public directory (e.g.,
                public/hero-bg1.jpg).
              </p>
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
                  key={`slide-${index}`}
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage: imagesLoaded
                      ? `url(${slide.background})`
                      : "none",
                    width: `${100 / slides.length}%`,
                  }}
                ></div>
              ))}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7030A0] to-[#27408F] opacity-85 z-1 backdrop-blur-sm"></div>
        </div>
       
        <div className="relative z-10 max-w-6xl mx-auto text-center px-8 sm:px-10 pt-20 sm:pt-24 pb-10 sm:pb-16">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-[#FFFFFF] text-[30px] sm:text-[38px] md:text-[44px] font-extrabold font-aptos tracking-tight drop-shadow-lg leading-tight sm:leading-snug"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            className="mt-6 sm:mt-10 text-[#E2D8EC] text-[18px] sm:text-[20px] md:text-[22px] font-light italic font-aptos drop-shadow-md leading-relaxed max-w-3xl mx-auto"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          {/* Stats List */}
          {currentSlide === 2 && (
            <motion.ul
              className="mt-8 sm:mt-12 max-w-3xl mx-auto bg-[#FFFFFF]/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 text-[#E2D8EC] text-[16px] sm:text-[18px] font-aptos shadow-xl"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {[
                "$300M+ Value Delivered by Lendous",
                "4+ Years Supporting African SMEs",
                "30+ Years Leadership Experience",
              ].map((stat, index) => (
                <motion.li
                  key={`stat-${index}`}
                  className="flex items-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <span className="text-[#1AF866] mr-2">•</span>
                  <span>
                    <strong className="font-bold">{stat.split(" ")[0]}</strong>{" "}
                    {stat.split(" ").slice(1).join(" ")}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          )}
          <div className="mt-10 sm:mt-14 flex justify-center">
            <motion.button
              onClick={() => scrollToSection("services")}
              whileHover={{
                scale: 1.15,
                backgroundColor: "#FFFFFF",
                color: "#7030A0",
                boxShadow: "0 0 25px rgba(26, 248, 102, 0.7)",
              }}
              whileTap={{ scale: 0.9 }}
              className="px-10 sm:px-12 py-4 sm:py-5 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold font-aptos text-[18px] sm:text-[20px] shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              Explore Services
            </motion.button>
          </div>
        </div>
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 sm:left-6 bottom-32 sm:bottom-16 z-10 bg-black bg-opacity-50 text-[#FFFFFF] rounded-full p-4 sm:p-5 opacity-70 hover:opacity-100 hover:bg-opacity-75 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={28} className="sm:w-10 sm:h-10" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 sm:right-6 bottom-32 sm:bottom-16 z-10 bg-black bg-opacity-50 text-[#FFFFFF] rounded-full p-4 sm:p-5 opacity-70 hover:opacity-100 hover:bg-opacity-75 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={28} className="sm:w-10 sm:h-10" />
        </button>
        <motion.div
          className="absolute bottom-10 sm:bottom-14 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 text-[#1AF866]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>

  </div>
  );
};

export default Home;
