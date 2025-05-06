"use client";

import Link from "next/link";
import { motion } from 'framer-motion';
import { FaLinkedin, FaHandshake, FaLaptopCode, FaMoneyBillWave, FaUsers } from 'react-icons/fa';
import { Plus, Minus } from 'lucide-react';
import SlideInSection from '../../../components/SlideInSection';
import { useState, useEffect } from 'react';

const AboutSection: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  const toggleSection = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const serviceIcons = {
    "Lendous Tech": <FaLaptopCode className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#1AF866]" />,
    "Lendous People": <FaUsers className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#1AF866]" />,
    "Lendous Capital": <FaMoneyBillWave className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#1AF866]" />,
    "Lendous Support": <FaHandshake className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#1AF866]" />,
  };

  const serviceData = [
    {
      title: "Lendous Tech",
      groups: [
        {
          subheading: "Development",
          services: [
            "Web Development",
            "Business App Development",
            "Dashboard Development",
            "Data Analysis & Reporting",
          ],
        },
        {
          subheading: "Business Systems Setup",
          services: [
            "Digital Transformation",
            "Workflow Automation",
            "Robotic Process Automation",
          ],
        },
        {
          subheading: "Tech Tools Curation",
          services: [
            "AI Agents",
            "CRMs, ERPs, HRIS, BPMS, BI/Analytics Tools etc.",
          ],
        },
      ],
    },
    {
      title: "Lendous People",
      groups: [
        {
          subheading: "People Operations",
          services: [
            "Talent Acquisition",
            "Outsourced Hiring",
            "Rent a Resource (EaaS)",
          ],
        },
        {
          subheading: "Learning & Development",
          services: [
            "Senior Leaders Training",
            "Middle Managers Training",
            "New Managers Training",
            "Operational Teams' Training (HR, Sales, Systems & Process, Customer Service etc.)",
          ],
        },
      ],
    },
    {
      title: "Lendous Capital",
      groups: [
        {
          subheading: "Funding Support",
          services: [
            "Pitch deck development",
            "Investor/lender introduction",
            "Grant and loan application",
          ],
        },
        {
          subheading: "Credit & Financial Health Advisory",
          services: [
            "SME credit risk analysis",
            "Financial health improvement plans",
            "Debt vs Equity guidance for growth",
          ],
        },
      ],
    },
    {
      title: "Lendous Support",
      groups: [
        {
          subheading: "Advisory",
          services: [
            "Across all Areas of Expertise",
          ],
        },
        {
          subheading: "Sales & Expansion",
          services: [
            "In-Country Expansion",
            "Africa Expansion (East & West Africa)",
            "Market Research & Analysis",
          ],
        },
        {
          subheading: "Solution Delivery",
          services: [
            "Project Management",
            "Change Management",
            "Continuous Improvement",
            "Business Compliance",
          ],
        },
      ],
    },
  ];

  const badgeVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: i * 0.05 },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="font-poppins overflow-hidden">
      {/* Hero Section */}
      <div
        id="hero-section"
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ 
          minHeight: '700px',
          backgroundImage: "url('/hero-bg4.jpg')"
        }}
      >
        <div className="absolute bg-black opacity-85 inset-0 z-0">
          <div className="absolute inset-0 bg-[#7030A0] opacity-60 z-1 backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1AF866] via-[#27408F] to-[#7030A0] z-10"></div>
        <div className="py-12 sm:py-16 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-12">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-white text-[32px] sm:text-[36px] font-extrabold tracking-tight leading-tight sm:leading-snug font-poppins"
            >
              Who We Are
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="text-white text-[16px] sm:text-[18px] font-comic-neue tracking-wide mt-6"
            >
              We are experienced professionals bringing our collective years of expertise to SMEs
            </motion.p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <motion.button
                onClick={() => scrollToSection("team-section")}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-xl font-poppins"
              >
                Meet the Team
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("services-section")}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)",
                  borderColor: "#7030A0",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-[#1AF866] text-[#FFFFFF] rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-xl font-poppins"
              >
                Explore Services
              </motion.button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 48H1440V0C1200 32 960 48 720 48C480 48 240 32 0 0V48Z" fill="white" fillOpacity="0.1" />
          </svg>
        </div>
      </div>

      {/* Team Section */}
      <section
        id="team-section"
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ 
          minHeight: `${Math.max(500, viewportHeight * 0.8)}px`,
          backgroundColor: '#E2D8EC'
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-transparent z-1 backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-[#1AF866] to-[#7030A0] z-10"></div>
        <SlideInSection
          direction="right"
          className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto w-full"
        >
          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-center lg:text-left text-[28px] sm:text-[32px] font-extrabold font-poppins text-[#27408F] leading-tight mt-5">
                About
              </h2>
              
              <p className="text-justify text-[12px] lg:text-[14px] mt-4 md:mt-6 text-black font-medium leading-relaxed md:leading-loose lg:leading-[40px] font-poppins">
                Lendous is the Growth Partner for businesses in Africa. 
                We help businesses grow sales, plug revenue leaks, and build structures to support expansion (scale). 
                We do this by providing them the Systems, Tools, Advisory, and Resources (STARS) they need to Launch, Grow, and Expand in Africa.  
                With a combined 40+ years of experience from the leadership team spanning various 
                industries in Africa including; Retail, Financial Services, Oil & Gas, Renewable Energy, & Hospitality, we are committed to solving 
                the problem of launching and growing in Africa, with clarity and precision in execution.
              </p>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 lg:mt-0">
              {[
                { name: "Charles Charles", role: "CEO", image: "/team-charles.jpg", linkedin: "https://linkedin.com/in/charlescharles" },
                { name: "Ossai Anoh", role: "COO", image: "/team-patience.jpg", linkedin: "https://linkedin.com/in/ossaianoh" },
                { name: "Peter Abasiano", role: "Strategic Partnerships", image: "/team-peter.jpg", linkedin: "https://linkedin.com/in/peterabasiano" },
                { name: "Fidel Castro", role: "CTO", image: "/team-fidel.jpg", linkedin: "https://linkedin.com/in/fidelcastro" },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1AF866]"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full border-4 border-[#7030A0]"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder-team-member.jpg';
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#1AF866] opacity-0"
                      whileHover={{ opacity: 1, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <h3 className="text-[12px] sm:text-[14px] font-semibold font-comic-neue text-[#27408F] mt-3 md:mt-4">{member.name}</h3>
                  <p className="text-[10px] sm:text-[12px] text-gray-700 mt-1 text-center font-poppins">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 md:mt-3 text-[#27408F] hover:text-[#1AF866] transition-colors duration-300"
                  >
                    <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </SlideInSection>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 0C240 48 480 48 720 48C960 48 1200 32 1440 0V48H0V0Z" fill="white" fillOpacity="0.1" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <div
        id="services-section"
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ 
          minHeight: `${Math.max(500, viewportHeight * 0.8)}px`,
          backgroundColor: '#5B2A86'
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-70 z-1 backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-2 bg-gradient-to-b from-[#7030A0] to-[#1AF866] z-10"></div>
        <SlideInSection
          direction="up"
          className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto w-full"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="pt-5 text-white text-[28px] sm:text-[32px] font-extrabold font-poppins tracking-tight leading-tight sm:leading-snug"
              >
                Our Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                className="mt-6 sm:mt-10 text-white text-[20px] sm:text-[22px] font-comic-neue tracking-wide max-w-3xl mx-auto md:mx-0"
              >
                We blend our expertise across key service areas to deliver tailored solutions for your business.
              </motion.p>
            </div>
          </div>
          <div className="mt-6 lg:mt-12 w-full grid grid-cols-2 gap-3 sm:gap-4">
            {serviceData.map((category, index) => (
              <motion.div
                key={category.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  translateY: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.25)",
                  boxShadow: "0 0 20px rgba(26, 248, 102, 0.4)",
                }}
                className="w-full p-3 sm:p-4 bg-[#FFFFFF]/20 backdrop-blur-sm rounded-2xl shadow-xl border border-[#FFFFFF]/10 transition-all duration-300 relative z-10 flex flex-col min-h-[200px]"
              >
                <div className="flex items-center mb-4">
                  <motion.span
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center"
                  >
                    {serviceIcons[category.title as keyof typeof serviceIcons]}
                  </motion.span>
                  <h3 className="text-[18px] sm:text-[22px] font-semibold font-comic-neue text-[#1AF866] ml-3 flex-1">
                    {category.title}
                  </h3>
                </div>
                <div className="flex-1">
                  {category.groups.map((group, groupIdx) => {
                    const sectionKey = `${category.title}-${group.subheading}`;
                    const isOpen = openSections[sectionKey] || false;
                    return (
                      <div key={group.subheading} className="mb-1 last:mb-0">
                        <div 
                          className="flex items-center justify-between cursor-pointer p-2 hover:bg-white/30 rounded-lg transition-colors duration-200"
                          onClick={() => toggleSection(sectionKey)}
                        >
                          <h4 className="text-[12px] sm:text-[14px] font-semibold text-white mb-0 font-poppins">
                            {group.subheading}
                          </h4>
                          <button
                            className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center justify-center"
                            aria-label={isOpen ? "Collapse section" : "Expand section"}
                          >
                            {isOpen ? (
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="list-disc pl-4 pt-2">
                            {group.services.map((service, idx) => (
                              <motion.li
                                key={`${group.subheading}-${idx}`}
                                custom={idx}
                                initial="hidden"
                                animate="visible"
                                variants={badgeVariants}
                                className="text-[12px] sm:text-[14px] text-white mt-1 font-poppins"
                              >
                                {service}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 md:mt-12 lg:mt-16 text-center">
            <Link href="/solutions">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-2xl font-poppins"
              >
                Explore Solutions
              </motion.button>
            </Link>
          </div>
        </SlideInSection>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 0C240 48 480 48 720 48C960 48 1200 32 1440 0V48H0V0Z" fill="white" fillOpacity="0.1" />
          </svg>
        </div>
      </div>

      {/* Footer Banner */}
      <SlideInSection className="bg-[#7030A0] text-white py-5 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-8 text-center sm:text-left">
          <div className="mt-0">
            <h2 className="text-[14px] sm:text-[18px] font-extrabold font-poppins">Ready to <span className="font-comic-neue text-[#1AF866] text-[14px] sm:text-[18px]">Grow</span> Your Business?</h2>
            <p className="mt-4 text-[12px] sm:text-[14px] font-comic-neue tracking-wide">
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

export default AboutSection;