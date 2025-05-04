"use client";
import Image from "next/image";
import SlideInSection from "../../../components/SlideInSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

// Define interfaces for better type safety
interface TrainingProgram {
  id: number;
  title: string;
  category: string;
  duration: string;
  format: string;
  level: string;
  image: string;
  description: string;
  benefits: string[];
}

// Training Card Component for reusability
const TrainingCard: React.FC<{ program: TrainingProgram; index: number }> = ({ program, index }) => {
  const fadeInUp = {
    hidden: { opacity: 0.5, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ delay: 0.05 * (index + 1), duration: 0.4 }}
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300"
    >
      {/* Program Image */}
      <div className="h-48 sm:h-56 relative">
        <Image
          src={program.image}
          alt={program.title}
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full aspect-[4/3] hover:scale-[1.02] transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-indigo-600 text-white text-xs sm:text-sm font-medium">
            {program.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 text-center sm:text-center md:text-left">
        <h3 className="font-bold text-lg sm:text-xl text-gray-900 tracking-tight">{program.title}</h3>

        {/* Program Details */}
        <div className="mt-2 flex flex-wrap justify-center sm:justify-center md:justify-start gap-2 sm:gap-3">
          <span className="inline-flex items-center text-xs sm:text-sm text-indigo-600">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {program.duration}
          </span>
          <span className="inline-flex items-center text-xs sm:text-sm text-indigo-600">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {program.format}
          </span>
          <span className="inline-flex items-center text-xs sm:text-sm text-orange-500">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {program.level}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">{program.description}</p>

        {/* Benefits */}
        <div className="mt-4">
          <p className="font-semibold text-gray-800 text-xs sm:text-sm">Key Benefits:</p>
          <ul className="mt-2 space-y-1.5">
            {program.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start justify-center sm:justify-center md:justify-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs sm:text-sm text-gray-600 font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mt-4">
          <button
            className="w-full py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm rounded-lg transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mx-auto sm:mx-auto md:mx-0"
            aria-label={`Register for ${program.title}`}
          >
            Register Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const TrainingProgramsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Programs");
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);
    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  const tabs = ["All Programs", "Leadership", "Sales & Marketing", "Digital Transformation", "Operations"];

  const trainingPrograms: TrainingProgram[] = [
    // Leadership Programs
    {
      id: 1,
      title: "Executive Leadership Masterclass",
      category: "Leadership",
      duration: "3 days",
      format: "In-person",
      level: "Advanced",
      image: "/images/leadership-masterclass.jpg",
      description:
        "An intensive program designed for business leaders to enhance strategic decision-making, team leadership, and organizational management skills.",
      benefits: [
        "Develop a strategic leadership mindset",
        "Enhance decision-making capabilities",
        "Build high-performing teams",
        "Navigate organizational complexity",
      ],
    },
    {
      id: 2,
      title: "Women in Leadership",
      category: "Leadership",
      duration: "2 days",
      format: "Hybrid",
      level: "Intermediate",
      image: "/images/women-leadership.jpg",
      description:
        "Empowering female leaders with strategies to overcome unique challenges and maximize their leadership impact in African organizations.",
      benefits: [
        "Navigate gender-specific leadership challenges",
        "Build effective leadership presence",
        "Develop strategic networking skills",
        "Create sustainable work-life integration",
      ],
    },
    {
      id: 3,
      title: "Emerging Leaders Program",
      category: "Leadership",
      duration: "4 days",
      format: "In-person",
      level: "Beginner",
      image: "/images/emerging-leaders.jpg",
      description:
        "Prepare high-potential individuals for their first leadership positions with foundational skills and confidence-building experiences.",
      benefits: [
        "Transition successfully to leadership roles",
        "Develop essential people management skills",
        "Build self-awareness and emotional intelligence",
        "Create effective leadership communication strategies",
      ],
    },
    // Sales & Marketing Programs
    {
      id: 4,
      title: "Sales Mastery for African Markets",
      category: "Sales & Marketing",
      duration: "2 days",
      format: "In-person",
      level: "All levels",
      image: "/images/sales-mastery.jpg",
      description:
        "A comprehensive program focused on developing effective sales strategies and techniques tailored for success in diverse African markets.",
      benefits: [
        "Build market-specific sales strategies",
        "Enhance negotiation techniques",
        "Develop customer relationship management skills",
        "Optimize sales performance metrics",
      ],
    },
    {
      id: 5,
      title: "Digital Marketing Excellence",
      category: "Sales & Marketing",
      duration: "3 days",
      format: "Virtual",
      level: "Intermediate",
      image: "/images/digital-marketing.jpg",
      description:
        "Master contemporary digital marketing strategies to effectively reach and engage target audiences across African markets.",
      benefits: [
        "Create effective social media campaigns",
        "Develop data-driven marketing strategies",
        "Optimize digital advertising spend",
        "Build engaging content marketing approaches",
      ],
    },
    {
      id: 6,
      title: "Customer Experience Design",
      category: "Sales & Marketing",
      duration: "2 days",
      format: "Hybrid",
      level: "Advanced",
      image: "/images/customer-experience.jpg",
      description:
        "Design exceptional customer experiences that build loyalty and drive business growth in competitive markets.",
      benefits: [
        "Map comprehensive customer journeys",
        "Identify and eliminate pain points",
        "Implement customer feedback systems",
        "Measure and improve customer satisfaction",
      ],
    },
    // Digital Transformation Programs
    {
      id: 7,
      title: "Digital Transformation Strategy",
      category: "Digital Transformation",
      duration: "2 days",
      format: "Hybrid",
      level: "Intermediate",
      image: "/images/digital-transformation.jpg",
      description:
        "Learn how to lead successful digital transformation initiatives in your business, adapting to the unique challenges of African markets.",
      benefits: [
        "Assess digital readiness",
        "Develop transformation roadmaps",
        "Align technology with business objectives",
        "Manage change and adoption challenges",
      ],
    },
    {
      id: 8,
      title: "Data Analytics for Business",
      category: "Digital Transformation",
      duration: "3 days",
      format: "Virtual",
      level: "Intermediate",
      image: "/images/data-analytics.jpg",
      description:
        "Leverage data analytics to drive business decisions and create competitive advantage in rapidly evolving markets.",
      benefits: [
        "Implement data-driven decision frameworks",
        "Develop basic analytics capabilities",
        "Interpret business intelligence effectively",
        "Create actionable insights from data",
      ],
    },
    {
      id: 9,
      title: "E-Commerce Fundamentals",
      category: "Digital Transformation",
      duration: "2 days",
      format: "Hybrid",
      level: "Beginner",
      image: "/images/ecommerce.jpg",
      description:
        "Build effective online selling capabilities for your business, designed specifically for the challenges and opportunities in African markets.",
      benefits: [
        "Set up effective e-commerce platforms",
        "Optimize digital payment solutions",
        "Develop logistics and fulfillment strategies",
        "Create digital customer acquisition tactics",
      ],
    },
    // Operations Programs
    {
      id: 10,
      title: "Operational Excellence",
      category: "Operations",
      duration: "3 days",
      format: "Hybrid",
      level: "Intermediate",
      image: "/images/operational-excellence.jpg",
      description:
        "Master operational best practices to optimize efficiency and productivity in your business operations.",
      benefits: [
        "Streamline business processes",
        "Implement effective systems",
        "Reduce operational costs",
        "Improve quality management",
      ],
    },
    {
      id: 11,
      title: "Supply Chain Management",
      category: "Operations",
      duration: "3 days",
      format: "In-person",
      level: "Advanced",
      image: "/images/supply-chain.jpg",
      description:
        "Optimize your supply chain operations to overcome logistical challenges specific to African business environments.",
      benefits: [
        "Design resilient supply networks",
        "Improve inventory management",
        "Optimize sourcing strategies",
        "Enhance logistics performance",
      ],
    },
    {
      id: 12,
      title: "Project Management Essentials",
      category: "Operations",
      duration: "4 days",
      format: "Hybrid",
      level: "All levels",
      image: "/images/project-management.jpg",
      description:
        "Develop comprehensive project management skills to deliver initiatives on time, within scope and budget.",
      benefits: [
        "Apply project management methodologies",
        "Develop effective project planning skills",
        "Manage stakeholders and resources",
        "Monitor and control project execution",
      ],
    },
  ];

  // Filter programs based on active tab
  const filteredPrograms =
    activeTab === "All Programs"
      ? trainingPrograms
      : trainingPrograms.filter((program) => program.category === activeTab);

  const fadeInUp = {
    hidden: { opacity: 0.5, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle keyboard navigation for tabs
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, tab: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveTab(tab);
      scrollToSection("tabs-section");
    }
  };

  return (
    <div id="training-programs" className="bg-white font-poppins">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative flex flex-col justify-center bg-cover bg-center"
        style={{ 
          minHeight: '700px',
          backgroundImage: "url('/hero-bg3.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
        
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
                Empower Your Future with World-Class Training
              </motion.h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <svg width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5C20 -1.66667 40 -1.66667 60 5C80 11.6667 100 11.6667 120 5" stroke="#1AF866" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-white text-[20px] sm:text-[22px] font-caveat-brush tracking-wide mt-6"
            >
              Discover transformative programs designed to bridge skill gaps and drive success for African SMEs
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
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
                  <span className="font-poppins">Explore Programs</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Section Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 48H1440V0C1200 32 960 48 720 48C480 48 240 32 0 0V48Z" fill="white" fillOpacity="0.1" />
          </svg>
        </div>
      </section>

      {/* Tabs and Training Cards Section */}
      <div
        id="tabs-section"
        className="relative flex flex-col overflow-hidden bg-gray-50 scroll-mt-16"
        style={{ minHeight: "auto" }}
      >
        <SlideInSection
          direction="right"
          className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto"
        >
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0.5, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 max-w-full"
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={tab}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.05 * (index + 1), duration: 0.4 }}
                onClick={() => {
                  setActiveTab(tab);
                  scrollToSection("tabs-section");
                }}
                onKeyDown={(e) => handleKeyDown(e, tab)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
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

          {/* Training Cards or No Results */}
          <div className="min-h-[200px]">
            {filteredPrograms.length > 0 ? (
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              >
                {filteredPrograms.map((program, index) => (
                  <TrainingCard key={program.id} program={program} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8 sm:py-12"
              >
                <svg
                  className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-gray-600">
                  No programs available in this category at the moment.
                </p>
                <button
                  onClick={() => setActiveTab("All Programs")}
                  className="mt-4 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-indigo-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  View All Programs
                </button>
              </motion.div>
            )}
          </div>
        </SlideInSection>
      </div>

      {/* Footer Banner */}
      <SlideInSection className="bg-[#7030A0] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-8 text-center sm:text-left">
          <div className="mt-0">
            <h2 className="text-[32px] sm:text-[36px] font-extrabold font-poppins">Ready to <span className="font-caveat-brush text-[#1AF866] text-[36px] sm:text-[40px]">Grow</span> Your Business?</h2>
            <p className="mt-4 text-[18px] sm:text-[20px] font-caveat-brush tracking-wide">
              Let's help you do the dirty work so you can focus on what you know how to do.
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
              className="px-8 py-3 bg-white text-[#7030A0] rounded-lg font-semibold text-[16px] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <span className="font-caveat-brush text-[18px]">Get in Touch</span>
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
    </div>
  );
};

export default TrainingProgramsSection;