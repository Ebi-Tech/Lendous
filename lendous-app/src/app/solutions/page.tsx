"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SlideInSection from "../../../components/SlideInSection";
import { motion } from "framer-motion";

// Define the shape of each tab's content
interface TabContent {
  stage: string;
  sections: { title: string; subtitle?: string; description: string; image: string; imagePosition: "left" | "right" }[];
}

// Define the shape of the tabContent object
interface TabContentMap {
  "Small Business": TabContent;
  "Mid-Large Business": TabContent;
}

// Define the allowed tab names
type TabName = keyof TabContentMap;

const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>("Small Business");
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);
    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabs: TabName[] = ["Small Business", "Mid-Large Business"];

  const tabContent: TabContentMap = {
    "Small Business": {
      stage: "Solutions for Small Business",
      sections: [
        {
          title: "Launch Your Business",
          description:
            "Grab a drink and relax, let's handle your business registration and compliance. Our team will engage the necessary agencies, handle the necessary paperwork, and deliver your company legal docs to your doorstep.",
          image: "/images/customer-experience.jpg",
          imagePosition: "left",
        },
        {
          title: "Grow Sales & Run Operations",
          subtitle: "with Lendous Opper8",
          description:
            "Grow sales with our e-commerce store or website, marketing kit, and digital presence service. Run operations with our simple Android app for Retailers, Coffee Shops, Restaurants, and Bars to manage your inventory, record sales & issue receipts/invoices, track your income & expenses, and make key decisions from your dashboard showing your business performance.",
          image: "/images/ecommerce.jpg",
          imagePosition: "right",
        },
        {
          title: "Reduce Operating Cost",
          subtitle: "with Lendous Pipu",
          description:
            "Save up to 70% in hiring costs by lending human resources you need but cannot afford full-time right now. E.g., Social Media Manager, Accountant, IT Support, HR/Admin Associate, and Strategy Lead/Business Advisor.",
          image: "/images/sales-mastery.jpg",
          imagePosition: "left",
        },
      ],
    },
    "Mid-Large Business": {
      stage: "Solutions for Mid-Large Business",
      sections: [
        {
          title: "Grow Sales",
          subtitle: "with our BD-as-a-Service (BDAaS)",
          description:
            "We'll generate digital and physical leads for you to close deals and grow your sales. You start paying when we deliver an agreed number of leads. For B2B leads, if you don't feel confident or unable to close deals, we could help you with both lead generation and deal closure.",
          image: "/images/supply-chain.jpg",
          imagePosition: "left",
        },
        {
          title: "Expand Operations Profitably",
          subtitle: "with Lendous Xpansion Blueprint",
          description:
            "We either deploy a standard expansion blueprint or co-design a tailor-made expansion blueprint strategy based on the peculiarities of your business and support you throughout the execution.",
          image: "/images/data-analytics.jpg",
          imagePosition: "right",
        },
        {
          title: "Avoid Costly Mistakes",
          subtitle: "with Lendous Analytics",
          description:
            "Make sound decisions with our Advanced Insights on your business operations, financial performance, or industry trends. We'll show you what is going well and what isn't, so you can take prompt clear actions and avoid making wrong decisions that will cost you dearly.",
          image: "/images/project-management.jpg",
          imagePosition: "left",
        },
      ],
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Handle keyboard navigation for tabs
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, tab: TabName) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveTab(tab);
      scrollToSection(tab.toLowerCase().replace(" ", "-"));
    }
  };

  return (
    <main className="bg-white font-poppins">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative flex flex-col justify-center bg-cover bg-center"
        style={{
          minHeight: "700px",
          backgroundImage: "url('/hero-bg2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="absolute inset-0 bg-[#27408F] opacity-60 z-1 backdrop-blur-sm"></div>

        {/* Accent Top Border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1AF866] via-[#27408F] to-[#7030A0] z-10"></div>

        <div className="py-12 sm:py-16 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-12 text-center">
          <div className="space-y-6 sm:space-y-10 px-4 sm:px-0">
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white text-[32px] sm:text-[36px] font-extrabold leading-tight sm:leading-snug [text-shadow:_0_2px_6px_rgba(0,0,0,0.4)]"
              >
                Solutions for Every Business Stage
              </motion.h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <svg width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 5C20 -1.66667 40 -1.66667 60 5C80 11.6667 100 11.6667 120 5"
                    stroke="#1AF866"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-white text-[16px] sm:text-[18px] font-comic-neue tracking-wide mt-6"
            >
              From launching your business to scaling across markets, we've got you covered.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
              <motion.button
                onClick={() => scrollToSection("tabs-section")}
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
            </div>
          </div>
        </div>

        {/* Section Divider */}
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

      {/* Tabs Section */}
      <div
        id="tabs-section"
        className="relative flex flex-col justify-center overflow-hidden bg-white"
        style={{ minHeight: "700px" }}
      >
        <SlideInSection
          direction="right"
          className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto"
        >
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  scrollToSection(tab.toLowerCase().replace(" ", "-"));
                }}
                onKeyDown={(e) => handleKeyDown(e, tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${activeTab === tab ? "bg-indigo-600 text-white" : "bg-white/80 text-gray-700 hover:bg-white"
                  }`}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`tabpanel-${tab.toLowerCase().replace(" ", "-")}`}
                tabIndex={0}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
            {tabs.map((tab) => (
              activeTab === tab && (
                <div key={tab}>
                  <div className="mt-8 sm:mt-10">
                    {tabContent[tab].sections.map((section, index) => (
                      <motion.div
                        key={index}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.1 * (index + 1) }}
                      >
                        <SlideInSection
                          direction={section.imagePosition}
                          className={`flex flex-col ${section.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 sm:gap-12 mb-12`}
                        >
                          {/* Image - always comes first on mobile */}
                          <div className="w-full md:w-1/2 order-1">
                            <Image
                              src={section.image}
                              alt={section.title}
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="object-cover rounded-xl shadow-md w-full h-auto sm:max-h-[400px] sm:aspect-[5/3] md:aspect-[5/3] hover:scale-[1.02] transition-transform duration-300"
                            />
                          </div>
                          {/* Text content */}
                          <div className="w-full md:w-1/2 text-center md:text-left order-2">
                            <h4 className="text-2xl sm:text-3xl font-semibold text-[#7030A0] font-comic-neu mb-1 tracking-tight">
                              {section.title}
                            </h4>
                            {section.subtitle && (
                              <p className="text-lg sm:text-xl font-medium text-indigo-600 mb-3">{section.subtitle}</p>
                            )}
                            <p className="text-[12px] sm:text-[14px] text-gray-600 leading-relaxed">{section.description}</p>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold text-sm shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg mx-auto md:mx-0"
                            >
                              Learn More
                            </motion.button>
                          </div>
                        </SlideInSection>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </SlideInSection>
      </div>

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

export default SolutionsSection;
