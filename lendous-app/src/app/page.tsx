"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import SlideInSection from "../../components/SlideInSection";

const Home: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  useEffect(() => {
    const preloadImages = async () => {
      let hasLoadedAtLeastOne = false;
      const imageUrls = ["/hero-bg1.jpg", "/hero-bg2.jpg", "/hero-bg3.jpg"];
      const promises = imageUrls.map((url) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = url || "";
          img.onload = () => {
            hasLoadedAtLeastOne = true;
            resolve(true);
          };
          img.onerror = () => {
            resolve(false);
          };
        });
      });

      await Promise.all(promises);
      setImagesLoaded(hasLoadedAtLeastOne);
    };

    preloadImages();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="font-poppins">
      {/* Section 1: Hero Section */}
      <section
        id="hero-section"
        className="relative flex flex-col justify-center"
        style={{ 
          minHeight: '700px',
          
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="h-full bg-[#F5F5F5]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0] opacity-85 z-1 backdrop-blur-sm"></div>
        </div>

        <div className="py-12 sm:py-16 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 px-4 sm:px-0">
            <h1 className="text-[#27408F] text-[36px] sm:text-[40px] font-extrabold leading-tight sm:leading-snug">
              Ready to Be The Next Big Thing in Africa?
            </h1>

            <p className="text-black text-[16px] sm:text-[18px] font-medium italic">
              Grow with Lendous
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={() => scrollToSection("services")}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Explore Solutions
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("consultation")}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)",
                  borderColor: "#7030A0",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-[#1AF866] text-[#27408F] rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Free Consultation
              </motion.button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center mt-4 sm:mt-6 lg:mt-0">
            <div className="relative w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-bg1.jpg"
                alt="Hero Image"
                fill
                className="object-cover max-h-[400px] sm:max-h-[450px] md:max-h-[500px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="relative flex flex-col justify-center"
        style={{ 
          minHeight: '700px'
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="h-full bg-[#7030A0]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#7030A0] to-[#27408F] opacity-85 z-1 backdrop-blur-sm"></div>
        </div>

        <SlideInSection
          direction="right"
          className="py-16 sm:py-20 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-6 sm:gap-8"
        >
          <div className="pt-5 w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 px-4 sm:px-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-[36px] sm:text-[40px] font-extrabold leading-tight sm:leading-snug"
            >
              Starting & Growing a Business<br className="block sm:hidden" /><br className="hidden sm:block" />is Hard. We are Here to Make it Easier.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-[#E2D8EC] text-[16px] sm:text-[18px] font-medium italic"
            >
              Select service(s) to explore our range, get a free consultation to ensure solutions fit your stage, receive an online quote, and see your solution deployed with ongoing support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection("services")}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Explore Solutions
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center mt-4 sm:mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-bg2.jpg"
                alt="Section 2 Image"
                fill
                className="object-cover max-h-[400px] sm:max-h-[450px] md:max-h-[500px]"
              />
            </div>
          </motion.div>
        </SlideInSection>
      </section>

      {/* Section 3 */}
      <section
        className="pb-10 relative flex flex-col justify-center"
        style={{ 
          minHeight: '700px'
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="h-full bg-[#F5F5F5]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0] opacity-85 z-1 backdrop-blur-sm"></div>
        </div>

        <SlideInSection
          direction="up"
          className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
            <div className="mt-5 w-full lg:w-3/5 text-center lg:text-left space-y-4 sm:space-y-6 px-4 sm:px-0 order-0 lg:order-none">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-gray-800 text-[36px] sm:text-[40px] font-extrabold leading-tight sm:leading-snug mt-10"
              >
                The Lendous Assurance:<br />You Will Never Work Alone!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-gray-600 text-[16px] sm:text-[18px] font-medium italic"
              >
                Whenever your business needs anything, think Lendous first
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="w-full lg:w-2/5 flex justify-center mt-4 sm:mt-6 lg:mt-0 order-1 lg:order-none"
            >
              <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-bg3.jpg"
                  alt="Section 3 Image"
                  fill
                  className="object-cover max-h-[300px] sm:max-h-[350px] md:max-h-[400px]"
                />
              </div>
            </motion.div>
          </div>

          <div className="w-full px-4 sm:px-0 order-2 lg:order-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { value: "$300M+", label: "Value Delivered by Lendous" },
                { value: "4+", label: "Years Supporting African SMEs" },
                { value: "30+", label: "Years Leadership Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg border-2 border-transparent transition-all duration-300"
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    borderColor: "#1AF866",
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <h3 className="text-gray-800 text-[24px] sm:text-[28px] font-bold">{stat.value}</h3>
                  <p className="text-gray-600 mt-1 text-[14px]">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SlideInSection>
      </section>

      {/* Footer Banner */}
      <section className="bg-[#7030A0] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="mt-10 text-center sm:text-left">
            <h2 className="text-[36px] sm:text-[40px] font-extrabold">Ready to Grow Your Business?</h2>
            <p className="mt-2 text-[16px] sm:text-[18px] font-medium italic">
              Let's discuss how our STARS approach can transform your business.
            </p>
          </div>
          <motion.button
            onClick={() => scrollToSection("consultation")}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-[#7030A0] rounded-lg font-semibold text-[16px] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
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
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default Home;
