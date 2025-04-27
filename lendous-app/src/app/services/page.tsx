"use client";
import Link from "next/link";
import SlideInSection from "../../../components/SlideInSection";
import { motion } from "framer-motion";
import { FaHandshake, FaLaptopCode, FaMoneyBillWave, FaUsers } from "react-icons/fa";

const ServicesSection: React.FC = () => {
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
            "Custom Software Development",
            "Web Development & Design",
            "Business App Development",
            "Dashboard Development",
            "Custom Mobile & Web Apps",
          ],
        },
        {
          subheading: "Automation",
          services: [
            "Workflow Automation",
            "Robotic Process Automation",
            "Tech Tools Curation",
            "AI-Powered Agents",
          ],
        },
        {
          subheading: "Analytics & Systems",
          services: [
            "Data Analysis & Reporting",
            "Business Systems Setup",
            "Digital Transformation",
            "CRM & ERP Solutions",
            "HRIS & Workforce Management",
            "Business Intelligence & Analytics",
          ],
        },
      ],
    },
    {
      title: "Lendous People",
      groups: [
        {
          subheading: "Talent Management",
          services: [
            "People Operations Strategy",
            "Talent Acquisition",
            "Outsourced Hiring",
            "Employee-as-a-Service (EaaS)",
          ],
        },
        {
          subheading: "Training Programs",
          services: [
            "Learning & Development",
            "Senior Leaders Training",
            "Middle Managers Training",
            "New Managers Training",
            "HR & Sales Training",
            "Systems & Process Training",
            "Customer Service Training",
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
            "Funding Readiness Support",
            "Pitch Deck Development",
            "Investor/Lender Introduction",
            "Grant & Loan Applications",
          ],
        },
        {
          subheading: "Financial Advisory",
          services: [
            "Credit & Financial Health Advisory",
            "SME Credit Risk Analysis",
            "Financial Health Improvement Plans",
            "Debt/Equity Growth Financing",
          ],
        },
      ],
    },
    {
      title: "Lendous Support",
      groups: [
        {
          subheading: "Advisory & Expansion",
          services: [
            "Strategic Advisory",
            "Sales Strategy & Expansion",
            "In-Country Expansion",
            "Africa Expansion (East & West)",
            "Market Research & Analysis",
          ],
        },
        {
          subheading: "Management & Compliance",
          services: [
            "Solution Delivery",
            "Project Management",
            "Process Management",
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

  return (
    <section
      id="services"
      className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#E2D8EC] to-[#D9C8E6] font-aptos"
    >
      <style jsx>{`
        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #d9c8e6;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(26, 248, 102, 0.7);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(26, 248, 102, 0.9);
        }
      `}</style>
      <SlideInSection direction="left" className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[26px] sm:text-[36px] md:text-[40px] font-extrabold text-[#27408F] leading-tight tracking-tight"
          >
            Our Services
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 text-[16px] sm:text-[22px] text-gray-700 font-light leading-relaxed max-w-3xl mx-auto"
          >
            We blend our expertise across key service areas to deliver tailored solutions for your business.
          </motion.p>

          {/* Service Cards */}
          <div className="mt-12 sm:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-10">
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
                  {/* Mobile: Badge List */}
                  <div className="sm:hidden flex flex-col gap-1.5 max-h-[250px] overflow-y-auto custom-scrollbar">
                    {category.groups.flatMap((group) =>
                      group.services.map((service, idx) => (
                        <motion.div
                          key={`${group.subheading}-${idx}`}
                          custom={idx}
                          initial="hidden"
                          animate="visible"
                          variants={badgeVariants}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            borderColor: "rgba(26, 248, 102, 0.5)",
                            boxShadow: "0 0 10px rgba(26, 248, 102, 0.3)",
                          }}
                          className="p-1.5 rounded-lg bg-[#FFFFFF]/20 border border-[#FFFFFF]/20 text-[13px] text-gray-700 font-medium text-center transition-all duration-300"
                        >
                          {service}
                        </motion.div>
                      ))
                    )}
                  </div>
                  {/* Desktop: Grouped Badges with Subheadings */}
                  <div className="hidden sm:block max-h-[400px] overflow-y-auto custom-scrollbar">
                    {category.groups.map((group, groupIdx) => (
                      <div key={group.subheading} className="mb-4 last:mb-0">
                        <h4 className="text-[16px] font-semibold text-[#27408F] mb-2">
                          {group.subheading}
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {group.services.map((service, idx) => (
                            <motion.div
                              key={`${group.subheading}-${idx}`}
                              custom={idx}
                              initial="hidden"
                              animate="visible"
                              variants={badgeVariants}
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.3)",
                                borderColor: "rgba(26, 248, 102, 0.5)",
                                boxShadow: "0 0 10px rgba(26, 248, 102, 0.3)",
                              }}
                              className="p-2.5 rounded-lg bg-[#FFFFFF]/20 border border-[#FFFFFF]/20 text-[16px] text-gray-700 font-medium text-left transition-all duration-300"
                            >
                              {service}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className="mt-12 sm:mt-16">
            <Link href="/solutions">
              <motion.button
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 25px rgba(26, 248, 102, 0.7)",
                }}
                whileTap={{ scale: 0.9 }}
                className="w-full sm:w-auto px-12 py-5 bg-[#1AF866] text-[#27408F] rounded-lg font-aptos font-semibold text-[17px] shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                Explore Solutions
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </SlideInSection>
    </section>
  );
};

export default ServicesSection;
