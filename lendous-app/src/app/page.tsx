"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const sections = [
    {
      title: "Ready to Be The Next Big Thing in Africa?",
      subtitle: "Grow with Lendous",
      image: "/hero-bg1.jpg",
    },
    {
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
      image: "/hero-bg2.jpg",
    },
    {
      title: (
        <>
          The Lendous Assurance:
          <br />
          You Will Never Work Alone!
        </>
      ),
      subtitle: "Whenever your business needs anything, think Lendous first",
      image: "/hero-bg3.jpg",
    },
  ];

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      let hasLoadedAtLeastOne = false;
      const promises = sections.map((section) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = section.image || "";
          img.onload = () => {
            hasLoadedAtLeastOne = true;
            resolve(true);
          };
          img.onerror = () => {
            resolve(false);
          };
        });
      });

      const results = await Promise.all(promises);
      setImagesLoaded(hasLoadedAtLeastOne);
      setImageLoadError(!hasLoadedAtLeastOne);
    };

    preloadImages();
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#E2D8EC] overflow-x-hidden font-sans">
      {/* Section 1: Hero Section */}
      <div
        id="hero-section"
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden snap-start"
      >
        <div className="absolute inset-0 z-0">
          {imageLoadError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-base bg-black bg-opacity-50 z-10 px-4">
              <p>Failed to load images. Please check image paths.</p>
              <p className="mt-2 text-sm">
                Images should be in the public directory (e.g., public/hero-bg1.jpg).
              </p>
            </div>
          ) : (
            <div className="h-full bg-[#F5F5F5]"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0] opacity-85 z-1 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 px-4 sm:px-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-snug"
            >
              {sections[0].title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-gray-600 text-lg sm:text-xl md:text-2xl font-medium italic"
            >
              {sections[0].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection("services")}
                className="px-8 py-3 sm:px-10 sm:py-4 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore Solutions
              </button>
              <button
                onClick={() => scrollToSection("consultation")}
                className="px-8 py-3 sm:px-10 sm:py-4 bg-transparent border-2 border-[#1AF866] text-[#1AF866] rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Free Consultation
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={sections[0].image || "/placeholder.jpg"}
                alt="Hero Image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 2 */}
      <div
        id="section-2"
        className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start bg-[#7030A0]"
      >
        <div className="absolute inset-0 z-0">
          {imageLoadError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-base bg-black bg-opacity-50 z-10 px-4">
              <p>Failed to load images. Please check image paths.</p>
              <p className="mt-2 text-sm">
                Images should be in the public directory (e.g., public/hero-bg2.jpg).
              </p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7030A0] to-[#27408F] opacity-85 z-1 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 px-4 sm:px-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-snug"
            >
              {sections[1].title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-[#E2D8EC] text-lg sm:text-xl md:text-2xl font-medium italic"
            >
              {sections[1].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection("services")}
                className="px-8 py-3 sm:px-10 sm:py-4 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore Solutions
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={sections[1].image || "/placeholder.jpg"}
                alt="Section 2 Image"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 3 */}
      <div
        id="section-3"
        className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start bg-[#F5F5F5]"
      >
        <div className="absolute inset-0 z-0">
          {imageLoadError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-base bg-black bg-opacity-50 z-10 px-4">
              <p>Failed to load images. Please check image paths.</p>
              <p className="mt-2 text-sm">
                Images should be in the public directory (e.g., public/hero-bg3.jpg).
              </p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0] opacity-85 z-1 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 px-4 sm:px-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-snug"
            >
              {sections[2].title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-gray-600 text-lg sm:text-xl md:text-2xl font-medium italic"
            >
              {sections[2].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { value: "$300M+", label: "Value Delivered by Lendous" },
                { value: "4+", label: "Years Supporting African SMEs" },
                { value: "30+", label: "Years Leadership Experience" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-[#1AF866] transition-all duration-300"
                >
                  <h3 className="text-gray-800 text-2xl sm:text-3xl font-bold">{stat.value}</h3>
                  <p className="text-gray-600 mt-2 text-base sm:text-lg">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={sections[2].image || "/placeholder.jpg"}
                alt="Section 3 Image"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="bg-[#7030A0] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to Grow Your Business?</h2>
            <p className="mt-2 text-lg">
              Let's discuss how our STARS approach can transform your business.
            </p>
          </div>
          <button
            onClick={() => scrollToSection("consultation")}
            className="px-8 py-3 bg-white text-[#7030A0] rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Get in Touch
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
