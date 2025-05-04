"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// SlideInSection component for animations
const SlideInSection: React.FC<{
  direction: "left" | "right" | "down";
  children: React.ReactNode;
  className?: string;
}> = ({ direction, children, className }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "down" ? 50 : 0,
    },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
};

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
            "Grab a drink and relax, let’s handle your business registration and compliance. Our team will engage the necessary agencies, handle the necessary paperwork, and deliver your company legal docs to your doorstep.",
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
            "We’ll generate digital and physical leads for you to close deals and grow your sales. You start paying when we deliver an agreed number of leads. For B2B leads, if you don’t feel confident or unable to close deals, we could help you with both lead generation and deal closure.",
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
            "Make sound decisions with our Advanced Insights on your business operations, financial performance, or industry trends. We’ll show you what is going well and what isn’t, so you can take prompt clear actions and avoid making wrong decisions that will cost you dearly.",
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
      {/* Hero Section */}
      <div
        id="hero-section"
        className="relative flex flex-col justify-center items-center overflow-hidden bg-gray-900 pt-16 sm:pt-20 lg:pt-24"
        style={{ minHeight: "80vh", maxHeight: "800px" }}
      >
        {/* Background Image with Gradient Overlay */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
        >
          <Image
            src="/hero-bg2.jpg"
            alt="Hero Background - Business Solutions"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
            className="transition-transform duration-500"
            quality={85}
          />
          {/* Gradient Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/30 z-1"></div>
        </motion.div>

        {/* Hero Content */}
        <SlideInSection
          direction="left"
          className="py-16 sm:py-20 lg:py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 sm:gap-6"
        >
          <div className="text-center max-w-3xl">
            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight [text-shadow:_0_2px_6px_rgba(0,0,0,0.4)]"
            >
              Solutions for Every Business Stage
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg font-medium text-gray-100 leading-relaxed max-w-2xl mx-auto"
            >
              From launching your business to scaling across markets, we’ve got you covered.
            </motion.p>
          </div>
        </SlideInSection>
      </div>

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
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center md:text-left"
                  >
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">{tabContent[tab].stage}</h3>
                  </motion.div>
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
                          className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 mb-12"
                        >
                          {section.imagePosition === "left" && (
                            <div className="md:w-1/2">
                              <Image
                                src={section.image}
                                alt={section.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-cover rounded-xl shadow-md w-full h-auto sm:max-h-[400px] sm:aspect-[5/3] md:aspect-[5/3] hover:scale-[1.02] transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="md:w-1/2 text-center sm:text-center md:text-left">
                            <h4 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1 tracking-tight">{section.title}</h4>
                            {section.subtitle && (
                              <p className="text-lg sm:text-xl font-medium text-indigo-600 mb-3">{section.subtitle}</p>
                            )}
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{section.description}</p>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold text-sm shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg mx-auto sm:mx-auto md:mx-0"
                            >
                              Learn More
                            </motion.button>
                          </div>
                          {section.imagePosition === "right" && (
                            <div className="md:w-1/2">
                              <Image
                                src={section.image}
                                alt={section.title}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="object-cover rounded-xl shadow-md w-full h-auto sm:max-h-[400px] sm:aspect-[5/3] md:aspect-[5/3] hover:scale-[1.02] transition-transform duration-300"
                              />
                            </div>
                          )}
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

      {/* CTA Section */}
      <SlideInSection direction="down" className="bg-white text-gray-900 py-12 sm:py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Ready to Grow Your Business?</h2>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Let's discuss how our solutions can transform your business.
            </p>
          </div>
          <motion.button
            onClick={() => scrollToSection("consultation")}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#4F46E5",
              color: "#FFFFFF",
              boxShadow: "0 0 15px rgba(79, 70, 229, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold text-base shadow-md border border-indigo-200 transition-all duration-300 hover:shadow-lg flex items-center gap-2"
          >
            Get a Free Consultation
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </SlideInSection>
    </main>
  );
};

export default SolutionsSection;