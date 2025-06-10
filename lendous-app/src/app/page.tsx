"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import SlideInSection from "../../components/SlideInSection";
import Link from "next/link";
import { Plus, Minus, MessageSquare, Wrench, Rocket } from "lucide-react";

// Custom typewriter effect component with dynamic underline
interface TypewriterTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className,
  typingSpeed = 50,
  onComplete = () => {},
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsComplete(false);
    setTextWidth(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [currentIndex, text, typingSpeed, isComplete, onComplete]);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [displayText]);

  return (
    <div
      className={`relative flex flex-row items-center whitespace-nowrap ${className}`}
    >
      <span ref={textRef} className="inline-block">
        {displayText}
      </span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block align-baseline ml-1"
      >
        |
      </motion.span>
      <span
        className="absolute -bottom-1 left-0 h-1 bg-[#1AF866] transition-all duration-100 ease-linear"
        style={{ width: `${textWidth}px` }}
      />
    </div>
  );
};

const Home: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [clickedStep, setClickedStep] = useState<number | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const rotatingTexts = [
    "Drive Sales",
    "Plug Revenue Leaks",
    "Build structures to expand",
  ];

  const steps = [
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "Tell us about your business, challenge, and needs.",
      prefix: "We offer",
    },
    {
      icon: Wrench,
      title: "Solution Pack",
      description:
        "From our range of growth services, we build you a solution.",
      prefix: "We build your",
    },
    {
      icon: Rocket,
      title: "Support You",
      description:
        "Our solutions are Done-For-You, so you can focus on what you know how to do.",
      prefix: "We deliver the solution &",
    },
  ];

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
      setIsMobile(window.innerWidth <= 768);
    };

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);
    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile) {
        const isOutside = cardsRef.current.every(
          (ref) => ref && !ref.contains(event.target as Node)
        );
        if (isOutside) {
          setClickedStep(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => {
        setIsTyping(true);
        setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isTyping, rotatingTexts.length]);

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

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setClickedStep(clickedStep === index ? null : index);
    }
  };

  return (
    <main className="font-poppins">
      {/* Section 1: Hero Section */}
      <section
        id="hero-section"
        className="relative flex flex-col justify-center bg-cover bg-center"
        style={{
          minHeight: "700px",
          backgroundImage: "url('/hero-bg1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="absolute inset-0 bg-[#27408F] opacity-60 z-1 backdrop-blur-sm"></div>

        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1AF866] via-[#27408F] to-[#7030A0] z-10"></div>

        <div className="py-12 sm:py-16 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-12 text-center">
          <div className="space-y-6 sm:space-y-10 px-4 sm:px-0">
            <div className="relative">
              <h1 className="text-white text-[32px] sm:text-[36px] font-extrabold leading-tight sm:leading-snug">
                Ready to Be The Next Big Thing in Africa?
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <svg
                  width="120"
                  height="10"
                  viewBox="0 0 120 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5C20 -1.66667 40 -1.66667 60 5C80 11.6667 100 11.6667 120 5"
                    stroke="#1AF866"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <p className="text-white text-[16px] sm:text-[18px] font-comic-neue tracking-wide mt-6">
              Launch. <span className="text-[#1AF866]">Grow. </span>Expand. your
              business with Lendous
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
              <Link href="/solutions">
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
                  <span className="font-poppins">Explore Solutions</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

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

      {/* Section 2 */}
      <section
        className="relative flex flex-col justify-center bg-cover bg-center"
        style={{
          minHeight: "700px",
          backgroundColor: "#5B2A86",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0 "></div>

        <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-[#1AF866] to-[#7030A0] z-10"></div>

        <SlideInSection
          direction="right"
          className="py-16 sm:py-20 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-12 text-center"
        >
          <div className="space-y-8 sm:space-y-12 px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-10 inline-block bg-[#27408F]/80 px-6 py-2 rounded-full"
            >
              <span className="text-white text-[14px] font-comic-neue tracking-wider">
                Problem We Solve
              </span>
            </motion.div>

            <div className="relative ">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white text-[24px]  lg:text-[28px] font-extrabold leading-loose sm:leading-snug font-poppins"
              >
                We remove the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Guesswork</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#1AF866]/30 -rotate-1 z-0"></span>
                </span>{" "}
                in Running Your Business
                <br className="block sm:hidden" />
                <br className="hidden sm:block" />
                and Help You{" "}
                <span className="relative block sm:inline-block align-baseline">
                  <TypewriterText
                    text={rotatingTexts[textIndex]}
                    typingSpeed={40}
                    onComplete={() => setIsTyping(false)}
                    className="font-comic-neue text-[#1AF866] text-[22px] lg:text-[28px] inline-block align-baseline"
                  />
                </span>
              </motion.h1>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={`problem-step-${index}`}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full md:w-1/3 transition-all duration-300 ${
                    (isMobile ? clickedStep === index : hoveredStep === index) 
                      ? "ring-2 ring-[#1AF866]" 
                      : ""
                  }`}
                  onMouseEnter={() => !isMobile && setHoveredStep(index)}
                  onMouseLeave={() => !isMobile && setHoveredStep(null)}
                  onClick={() => handleCardClick(index)}
                  whileHover={!isMobile ? {
                    scale: 1.03,
                    backgroundColor: "rgba(255,255,255,0.15)",
                  } : {}}
                >
                  <div className="absolute -top-5 -left-2 w-12 h-12 rounded-full bg-[#7030A0] flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {index + 1}. {step.prefix}
                    </h3>
                    <h4 className="text-lg font-bold text-[#B598CF] mb-3">
                      {step.title}
                    </h4>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isMobile 
                          ? (clickedStep === index ? "auto" : 0)
                          : (hoveredStep === index ? "auto" : 0),
                        opacity: isMobile 
                          ? (clickedStep === index ? 1 : 0)
                          : (hoveredStep === index ? 1 : 0),
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white text-sm">{step.description}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-[#1AF866]"
                    initial={{ width: "0%" }}
                    animate={{
                      width: isMobile
                        ? (clickedStep === index ? "100%" : "0%")
                        : (hoveredStep === index ? "100%" : "0%"),
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex justify-center mt-10"
            >
              <Link href="/contact">
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
                  <span className="font-poppins"> Get Free Consultation</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </SlideInSection>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 48"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-12"
          >
            <path
              d="M0 0C240 48 480 48 720 48C960 48 1200 32 1440 0V48H0V0Z"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="pb-10 relative flex flex-col justify-center bg-cover bg-center"
        style={{
          minHeight: "700px",
          backgroundColor: "#F5F5F5",
        }}
      >
        <div className="absolute inset-0 bg-transparent z-0"></div>

        <div className="absolute top-0 right-0 bottom-0 w-2 bg-gradient-to-b from-[#7030A0] to-[#1AF866] z-10"></div>

        <SlideInSection
          direction="up"
          className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center gap-8 sm:gap-12 px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="w-full flex flex-col items-center gap-8 sm:gap-12">
            <div className="mt-5 space-y-8 sm:space-y-12 px-4 sm:px-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8 inline-block bg-[#7030A0] px-6 py-2 rounded-full"
              >
                <span className="text-white text-[14px] font-comic-neue tracking-wider">
                  Why Lendous?
                </span>
              </motion.div>

              <div className="relative">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-black text-[28px] sm:text-[32px] font-extrabold leading-tight sm:leading-snug font-poppins"
                >
                  The Lendous{" "}
                  <span className="font-comic-neue text-black text-[28px] sm:text-[32px] transform inline-block">
                    Assurance
                  </span>
                  : You Will
                  <span className="relative inline-block mx-2">
                    <span className="font-comic-neue text-[#7030A0] text-[28px] sm:text-[32px] transform inline-block">
                      Never
                    </span>
                    <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#1AF866] z-0"></span>
                  </span>
                  Work Alone!
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-black text-[20px] font-comic-neue tracking-wide mt-6"
              >
                Whenever you have a business problem,{" "}
                <span className="border-b-7 border-b-[#7030A0]">
                  call Lendous
                </span>
              </motion.p>
            </div>
          </div>

          <div className="w-full px-4 sm:px-0 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { value: "40+", sub: "Years", label: "Combined Experience" },
                {
                  value: "$300M+",
                  sub: "Revenue",
                  label: "Delivered To-Date*",
                },
                {
                  value: "3+",
                  sub: "Countries",
                  label: "in Sub-Saharan Africa",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 p-4 rounded-lg shadow-lg border-2 border-transparent transition-all duration-300"
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    borderColor: "#1AF866",
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <h3 className="text-gray-800 text-[28px] sm:text-[32px] font-extrabold font-comic-neue">
                    {stat.value}
                  </h3>
                  <h3 className="text-gray-800 text-[12px] sm:text-[14px] font-bold font-comic-neue">
                    {stat.sub}
                  </h3>
                  <p className="text-gray-600 mt-2 text-[12px] font-comic-neue">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <p className="text-[10px] text-black mt-12 text-left w-full px-4 sm:px-6 lg:px-8">
            * Impact delivered by Lendous leaders in the last 10 years
          </p>
        </SlideInSection>
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
    </main>
  );
};

export default Home;
