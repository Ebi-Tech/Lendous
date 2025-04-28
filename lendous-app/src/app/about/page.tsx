"use client";

import Image from 'next/image';
import Link from "next/link";
import { motion } from 'framer-motion';
import { FaLinkedin, FaHandshake, FaLaptopCode, FaMoneyBillWave, FaUsers } from 'react-icons/fa';
import { Plus, Minus } from 'lucide-react';
import SlideInSection from '../../../components/SlideInSection';
import { useState } from 'react';

const AboutSection: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const serviceIcons = {
    "Lendous Tech": <FaLaptopCode className="w-8 h-8 sm:w-10 sm:h-10 text-[#27408F]" />,
    "Lendous People": <FaUsers className="w-8 h-8 sm:w-10 sm:h-10 text-[#27408F]" />,
    "Lendous Capital": <FaMoneyBillWave className="w-8 h-8 sm:w-10 sm:h-10 text-[#27408F]" />,
    "Lendous Support": <FaHandshake className="w-8 h-8 sm:w-10 sm:h-10 text-[#27408F]" />,
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
            "Operational Teams’ Training (HR, Sales, Systems & Process, Customer Service etc.)",
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
    <>
      {/* Hero Section */}
      <div
        id="hero-section"
        className="relative h-screen flex items-center text-[#FFFFFF] overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="h-full bg-[#F5F5F5]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0] opacity-85 z-1 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-10 pt-20 sm:pt-24 pb-10 sm:pb-16 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-[#333333] text-[30px] sm:text-[38px] md:text-[44px] font-extrabold tracking-tight drop-shadow-lg leading-tight sm:leading-snug"
            >
              Who We Are
            </motion.h1>
            <div className="mt-10 sm:mt-14 flex justify-center md:justify-start gap-4">
              <motion.button
                onClick={() => scrollToSection("team-section")}
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 25px rgba(26, 248, 102, 0.7)",
                }}
                whileTap={{ scale: 0.9 }}
                className="px-10 sm:px-12 py-4 sm:py-5 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold text-[18px] sm:text-[20px] shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                Meet the Team
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("services-section")}
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 25px rgba(26, 248, 102, 0.7)",
                }}
                whileTap={{ scale: 0.9 }}
                className="px-10 sm:px-12 py-4 sm:py-5 bg-transparent border-2 border-[#1AF866] text-[#1AF866] rounded-lg font-semibold text-[18px] sm:text-[20px] shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                Explore Services
              </motion.button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            >
              <Image
                src="/hero-bg4.jpg"
                alt="Hero Image"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section id="team-section">
        <SlideInSection direction="right" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-extrabold text-[#27408F] leading-tight">
              Meet Our Leadership Team
            </h2>
            <p className="text-[24px] mt-8 text-gray-700 font-light">
              Our leaders bring decades of experience to help your business thrive.
            </p>
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Charles Charles',
                  role: 'Co-Founder & Lead, Lendous Tech & Support',
                  image: '/team-charles.jpg',
                  linkedin: 'https://linkedin.com/in/charlescharles',
                },
                {
                  name: 'Patience Anoh',
                  role: 'Co-Founder & Lead, Lendous People',
                  image: '/team-patience.jpg',
                  linkedin: 'https://linkedin.com/in/patienceanoh',
                },
                {
                  name: 'Peter Abasiano',
                  role: 'Business Lead, Lendous Capital',
                  image: '/team-peter.jpg',
                  linkedin: 'https://linkedin.com/in/peterabasiano',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex flex-col items-center p-6 rounded-2xl bg-[#E2D8EC] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1AF866]"
                >
                  <div className="relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={150}
                      height={150}
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
                  <h3 className="text-[24px] font-semibold text-[#27408F] mt-6">{member.name}</h3>
                  <p className="text-[16px] text-gray-700 mt-2 text-center">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-[#27408F] hover:text-[#1AF866] transition-colors duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </SlideInSection>
      </section>

      {/* Services Section */}
      <div
        id="services-section"
        className="relative py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#E2D8EC] to-[#D9C8E6] overflow-hidden snap-start"
      >
        <div className="absolute inset-0 z-0">
          <div className="h-full bg-[#E2D8EC]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#E2D8EC] to-[#D9C8E6] opacity-85 z-1 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              >
                <Image
                  src="/hero-bg3.jpg"
                  alt="Services Image"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-[#333333] text-[30px] sm:text-[38px] md:text-[44px] font-extrabold tracking-tight drop-shadow-lg leading-tight sm:leading-snug"
              >
                Our Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                className="mt-6 sm:mt-10 text-[#666666] text-[18px] sm:text-[20px] md:text-[22px] font-light italic drop-shadow-md leading-relaxed max-w-3xl mx-auto md:mx-0"
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
                animate="visible"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  translateY: -8,
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
                  <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#27408F] ml-3">
                    {category.title}
                  </h3>
                </div>
                {category.groups.map((group, groupIdx) => {
                  const sectionKey = `${category.title}-${group.subheading}`;
                  const isOpen = openSections[sectionKey] || false;
                  return (
                    <div key={group.subheading} className="mb-4 last:mb-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-[16px] font-semibold text-[#27408F] mb-2">
                          {group.subheading}
                        </h4>
                        <button
                          onClick={() => toggleSection(sectionKey)}
                          className="text-[#27408F] hover:text-[#1AF866] transition-colors duration-300"
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
                        <ul className="list-disc pl-5">
                          {group.services.map((service, idx) => (
                            <motion.li
                              key={`${group.subheading}-${idx}`}
                              custom={idx}
                              initial="hidden"
                              animate="visible"
                              variants={badgeVariants}
                              className="text-[16px] text-gray-700 font-medium mt-1"
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
                  scale: 1.15,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 25px rgba(26, 248, 102, 0.7)",
                }}
                whileTap={{ scale: 0.9 }}
                className="w-full sm:w-auto px-12 py-5 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold text-[17px] shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                Explore Solutions
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;