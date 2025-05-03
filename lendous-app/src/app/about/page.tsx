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
    "Lendous Tech": <FaLaptopCode className="w-8 h-8 sm:w-10 sm:h-10 text-[#1AF866]" />,
    "Lendous People": <FaUsers className="w-8 h-8 sm:w-10 sm:h-10 text-[#1AF866]" />,
    "Lendous Capital": <FaMoneyBillWave className="w-8 h-8 sm:w-10 sm:h-10 text-[#1AF866]" />,
    "Lendous Support": <FaHandshake className="w-8 h-8 sm:w-10 sm:h-10 text-[#1AF866]" />,
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
    <main className="font-poppins">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative flex flex-col justify-center bg-cover bg-center"
        style={{ 
          minHeight: '700px',
          backgroundImage: "url('/hero-bg4.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1AF866] via-[#27408F] to-[#7030A0] z-10"></div>
        <div className="py-12 sm:py-16 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-12 text-center">
          <div className="space-y-6 sm:space-y-10 px-4 sm:px-0">
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: " FLAGS: [easeInOut]" }}
                className="mt-12 text-white text-[36px] sm:text-[40px] font-extrabold font-caveat-brush leading-tight sm:leading-snug"
              >
                Who We Are
              </motion.h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <svg width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5C20 -1.66667 40 -1.66667 60 5C80 11.6667 100 11.6667 120 5" stroke="#1AF866" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="text-white text-[20px] sm:text-[22px] font-caveat-brush tracking-wide mt-6"
            >
              Lendous powers business growth with technology, talent, and finance.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
              <motion.button
                onClick={() => scrollToSection("team-section")}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <span className="font-poppins">Meet the Team</span>
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
                className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-[#1AF866] text-[#27408F] rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <span className="font-poppins">Explore Services</span>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0 48H1440V0C1200 32 960 48 720 48C480 48 240 32 0 0V48Z" fill="white" fillOpacity="0.1" />
          </svg>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team-section"
        className="relative flex flex-col justify-center overflow-hidden"
        style={{ 
          minHeight: '700px',
          backgroundColor: '#E2D8EC'
        }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-transparent z-1 backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-[#1AF866] to-[#7030A0] z-10"></div>
        <SlideInSection
          direction="right"
          className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-[36px] sm:text-[40px] font-extrabold font-caveat-brush text-[#27408F] leading-tight mt-5">
                About
              </h2>
              <p className="text-[16px] sm:text-[18px] mt-2 text-black font-poppins font-medium">
                We are experienced professionals bringing our collective years of expertise to SMEs
              </p>
              <p className="text-[16px] sm:text-[18px] mt-8 text-black font-poppins font-medium">
                Lendous is the Growth Partner for businesses in Africa. We help businesses grow sales, plug revenue leaks, and build structures to support expansion (scale).
              </p>
              <p className="text-[16px] sm:text-[18px] mt-4 text-black font-poppins font-medium">
                We do this by providing them the Systems, Tools, Advisory, and Resources (STARS) they need to Launch, Grow, and Expand in Africa.
              </p>
              <p className="text-[16px] sm:text-[18px] mt-4 text-black font-poppins font-medium">
                With a combined 40+ years of experience from the leadership team spanning various industries in Africa including; Retail, Financial Services, Oil & Gas, Renewable Energy, & Hospitality, we are committed to solving the problem of launching and growing in Africa, with clarity and precision in execution.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  className="flex flex-col items-center p-4 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1AF866]"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full border-4 border-[#7030A0]"
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
                  <h3 className="text-[20px] font-semibold font-caveat-brush text-[#27408F] mt-4">{member.name}</h3>
                  <p className="text-[14px] text-gray-700 mt-1 text-center font-poppins">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-[#27408F] hover:text-[#1AF866] transition-colors duration-300"
                  >
                    <FaLinkedin className="w-5 h-5" />
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
        style={{ minHeight: '700px' }}
      >
        <div className="absolute inset-0 z-0">
          <div className="h-full bg-[#5B2A86]"></div>
          <div className="absolute inset-0 bg-black opacity-70 z-1 backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-2 bg-gradient-to-b from-[#7030A0] to-[#1AF866] z-10"></div>
        <SlideInSection
          direction="up"
          className="py-12 sm:py-16 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-white text-[32px] sm:text-[36px] font-extrabold font-caveat-brush tracking-tight leading-tight sm:leading-snug"
              >
                Our Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                className="mt-6 sm:mt-10 text-white text-[20px] sm:text-[22px] font-caveat-brush tracking-wide italic drop-shadow-md leading-relaxed max-w-3xl mx-auto md:mx-0"
              >
                We blend our expertise across key service areas to deliver tailored solutions for your business.
              </motion.p>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
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
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 0 20px rgba(26, 248, 102, 0.4)",
                }}
                className="p-8 sm:p-10 bg-[#FFFFFF]/10 backdrop-blur-sm rounded-3xl shadow-xl border border-[#FFFFFF]/20 hover:border-[#1AF866]/50 transition-all duration-300 relative z-10"
              >
                <div className="flex items-center mb-4">
                  <motion.span
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {serviceIcons[category.title as keyof typeof serviceIcons]}
                  </motion.span>
                  <h3 className="text-[24px] sm:text-[28px] font-semibold font-caveat-brush text-[#1AF866] ml-3 flex-1">
                    {category.title}
                  </h3>
                </div>
                {category.groups.map((group, groupIdx) => {
                  const sectionKey = `${category.title}-${group.subheading}`;
                  const isOpen = openSections[sectionKey] || false;
                  return (
                    <div key={group.subheading} className="mb-4 last:mb-0">
                      <div 
                        className="flex items-center justify-between cursor-pointer p-2 hover:bg-white/30 rounded-lg transition-colors duration-200"
                        onClick={() => toggleSection(sectionKey)}
                      >
                        <h4 className="text-[16px] font-semibold font-poppins text-white mb-0">
                          {group.subheading}
                        </h4>
                        <button
                          className="text-white hover:text-[#1AF866] transition-colors duration-300"
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
                        className="overflow-hidden ml-2"
                      >
                        <ul className="list-disc pl-5 pt-2">
                          {group.services.map((service, idx) => (
                            <motion.li
                              key={`${group.subheading}-${idx}`}
                              custom={idx}
                              initial="hidden"
                              animate="visible"
                              variants={badgeVariants}
                              className="text-[16px] text-white font-poppins font-medium mt-1"
                            >
                              {service}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
          <div className="mt-12 sm:mt-16 text-center">
            <Link href="/solutions">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-5 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold text-base font-poppins shadow-lg transition-all duration-300 hover:shadow-2xl"
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
      <SlideInSection
        direction="down"
        className="bg-[#7030A0] text-white py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-[36px] sm:text-[40px] font-extrabold font-caveat-brush">Ready to <span className="text-[#1AF866]">Grow</span> Your Business?</h2>
            <p className="mt-2 text-[20px] sm:text-[22px] font-caveat-brush tracking-wide italic">
              Let's discuss how our STARS approach can transform your business.
            </p>
          </div>
          <button
            onClick={() => scrollToSection("consultation")}
            className="px-8 py-3 bg-white text-[#7030A0] rounded-lg font-semibold text-[18px] font-caveat-brush shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
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
      </SlideInSection>
    </main>
  );
};

export default AboutSection;
