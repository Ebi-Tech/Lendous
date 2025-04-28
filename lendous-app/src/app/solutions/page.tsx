"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

// Mock SlideInSection component (as used in Home/About)
const SlideInSection: React.FC<{
  direction: "left" | "right";
  children: React.ReactNode;
  className?: string;
}> = ({ direction, children, className }) => {
  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
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

// Define the shape of a service item
interface Service {
  title: string;
  items: string[];
}

// Define the shape of a category
interface Category {
  category: string;
  title: string;
  services: Service[];
}

// Define the shape of each tab's content
interface TabContent {
  stage: string;
  goal: string;
  value: string;
  content: Category[];
}

// Define the shape of the tabContent object with specific keys
interface TabContentMap {
  Launch: TabContent;
  Build: TabContent;
  Grow: TabContent;
  Scale: TabContent;
}

// Define the allowed tab names as a union type
type TabName = keyof TabContentMap;

const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>('Launch');
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabs: TabName[] = ['Launch', 'Build', 'Grow', 'Scale'];

  const tabContent: TabContentMap = {
    Launch: {
      stage: "I have an idea; I want to start a business.",
      goal: "Make business official & professional, showcase your products/services to make first sales, set up a channel to receive payments",
      value: "CLARITY & CONVENIENCE! We do the heavy-lifting and lay the foundation for you to build.",
      content: [
        {
          category: "LEGAL & COMPLIANCE",
          title: "Start compliant",
          services: [
            {
              title: "Basic Business Formalization",
              items: [
                "Business Name Reservation",
                "One-man Business OR Limited Liability Company Registration",
                "Trademark Registration (Optional)",
                "Bank Account Setup"
              ]
            },
            {
              title: "Digital Handbook – Local Business Laws (Summary)",
              items: [
                "Labour Laws",
                "Tax Laws"
              ]
            }
          ]
        },
        {
          category: "SALES & MARKETING",
          title: "Look Professional",
          services: [
            {
              title: "Brand Identity Design",
              items: [
                "Logo",
                "Mini Brand Guide"
              ]
            },
            {
              title: "Business Email",
              items: [
                "1 User & 1 Group (1 Year)",
                "Additional Users (Extra Cost)"
              ]
            },
            {
              title: "Simple Finance Trackers",
              items: [
                "(Automated Excel)"
              ]
            }
          ]
        },
        {
          category: "TECHNOLOGY & OPERATIONS",
          title: "Make customers easily find & trust you",
          services: [
            {
              title: "2 Business Pages",
              items: [
                "Google Business Page",
                "LinkedIn Business Page"
              ]
            },
            {
              title: "1 Simple Website",
              items: [
                "Secure Business Website or eCommerce Store",
                "Custom Domain (1 Year)",
                "Web Hosting (1 Year)",
                "Search Engine Optimization",
                "Payment Integration (eCommerce)"
              ]
            }
          ]
        }
      ]
    },
    Build: {
      stage: "Still early stage but I have made a few sales. Little to no formal operational structure.",
      goal: "Early Phase: Prove the idea can bring in cash. Traction Phase: Show growing demand & begin creating sustainable operations foundation",
      value: "COST CONTROL & FOUNDATIONAL STRUCTURES fit for your business.",
      content: [
        {
          category: "LEGAL & COMPLIANCE",
          title: "Stay compliant",
          services: [
            {
              title: "Basic Agreements",
              items: [
                "Staff Contract",
                "Service Agreement",
                "Non-Disclosure Agreement",
                "Memorandum of Understanding"
              ]
            },
            {
              title: "Data Privacy & Protection Basics",
              items: []
            },
            {
              title: "Tax Support (Traction)",
              items: [
                "Tax Filing"
              ]
            }
          ]
        },
        {
          category: "SALES & MARKETING",
          title: "Drive Sales",
          services: [
            {
              title: "B2B: Lead Generation",
              items: [
                "Get you in contact with your first prospective clients, on a fixed commission for each lead."
              ]
            },
            {
              title: "Deal Closure",
              items: [
                "Close deals as your BD Executive & take a slightly higher commission (instead of salary)"
              ]
            },
            {
              title: "B2C: Sales Funnel",
              items: [
                "Online automated sales workflow from lead generation to deal closure."
              ]
            }
          ]
        },
        {
          category: "TECHNOLOGY & OPERATIONS",
          title: "The Tech You Need to Run and Make Decisions",
          services: [
            {
              title: "Systems & Tools",
              items: [
                "Customer Database (Early Phase)",
                "CRM & ERP Lite (Traction Phase)",
                "Revenue & Expense Tracker",
                "Cash Flow Tracker",
                "Workplace Productivity Suite",
                "Communication: Call & Chat",
                "Office: PPT, Excel for Workplace suite"
              ]
            },
            {
              title: "Data: Make the Right Decisions",
              items: [
                "KPIs to Monitor Performance",
                "Dashboards (Sales, Customer, & Finance)"
              ]
            },
            {
              title: "Process: 5 Core Process Areas",
              items: [
                "Standard Operating Procedure (SOP) & Work Instructions",
                "Automate Workflows"
              ]
            }
          ]
        },
        {
          category: "RESOURCES",
          title: "Support for Growth",
          services: [
            {
              title: "Founding Team Training or Access to Training Library",
              items: [
                "Bookkeeping & Accounting",
                "Inventory Management",
                "Sales & Order Fulfillment",
                "Customer Support",
                "HR Lite"
              ]
            },
            {
              title: "Hiring for Key Positions",
              items: [
                "Early Phase: 30 AI Bots (No subscription) – Customer Service, HR, Digital Marketing",
                "Traction Phase: Outsource Roles or Outsource the hiring",
                "Outsource Systems & Process Lead to keep costs low"
              ]
            }
          ]
        }
      ]
    },
    Grow: {
      stage: "We have proven the product works, and there’s a market willing to pay for it.",
      goal: "Grow revenue & unit profitability, build operational team, and implement end-to-end finance, systems, & process automation",
      value: "ROBUST SYSTEMS & STRUCTURES fit for a growing business. Evolving your foundation from bungalow to multi-storey",
      content: [
        {
          category: "LEGAL & COMPLIANCE",
          title: "Stay compliant",
          services: [
            {
              title: "Licensing/permits/Regulatory Obligations Audit",
              items: []
            },
            {
              title: "Tax Filing Support",
              items: []
            },
            {
              title: "Corporate Policy Documents",
              items: []
            },
            {
              title: "Fully setup Finance & Control function",
              items: []
            }
          ]
        },
        {
          category: "SALES & MARKETING",
          title: "Sell, Retain, & Upsell Customers",
          services: [
            {
              title: "Sales Team Enablement Coaching",
              items: [
                "Prospect/Needs Assessment",
                "Pitching to Close Sales 2x Faster",
                "Objection Handling",
                "After-Sales Best Practices",
                "Customer Retention & Repeat Business"
              ]
            },
            {
              title: "Pilot new sales offers, bundles, pricing, marketing initiatives (A/B Testing)",
              items: []
            }
          ]
        },
        {
          category: "TECHNOLOGY & OPERATIONS",
          title: "Evaluate and Improve Your Data & Tech Stack",
          services: [
            {
              title: "Systems",
              items: [
                "Select & Implement new ERP/CRM/HRIS/Data Architecture",
                "Upgrade & Support existing ERP/CRM/HRIS/Data Architecture",
                "Finance: Implement Simple Planning & Budgeting Tool",
                "Integration: All tools that can talk to each other should.",
                "AI Adoption & App Development"
              ]
            },
            {
              title: "Data: Make Better Decisions",
              items: [
                "Expand Dashboards/Reports",
                "Advanced & Adhoc Analytics (use your data to answer questions you couldn’t previously)"
              ]
            }
          ]
        },
        {
          category: "RESOURCES",
          title: "Support for Growth",
          services: [
            {
              title: "Learning & Development",
              items: [
                "Middle Managers Training",
                "New Managers Training (First-Time People Managers)"
              ]
            },
            {
              title: "Hiring for Key Positions",
              items: [
                "Outsourced Hiring (Talent Acquisition)",
                "Employment as a Service (Rent a Resource)",
                "Set Up a Systems & Process Team (Start with 1-2 people)"
              ]
            }
          ]
        }
      ]
    },
    Scale: {
      stage: "We have grown the business significantly; it’s time to expand and assert market dominance.",
      goal: "Build replicable structures for rapid scale and take new territories or markets.",
      value: "REDUCED RISK ON EXPANSIONS & SCALE. We’ll provide the S.T.A.Rs., project mgt. & change mgt. expertise to guide you. You’re the pilot, we are the compass.",
      content: [
        {
          category: "LEGAL & COMPLIANCE",
          title: "Stay compliant",
          services: [
            {
              title: "Corporate Risk Mapping & Management Strategy",
              items: []
            },
            {
              title: "New Market Research, Evaluation, & Compliance Checklist",
              items: []
            }
          ]
        },
        {
          category: "SALES & MARKETING",
          title: "Seek bigger fish and deeper waters",
          services: [
            {
              title: "In-Country Expansion",
              items: []
            },
            {
              title: "Regional Expansion (East & West Africa)",
              items: []
            },
            {
              title: "Product Expansion",
              items: []
            },
            {
              title: "Positioning for pan-African government/NGO tenders & contracts",
              items: []
            },
            {
              title: "Deepening B2B or B2C (and exploring B2B2C)",
              items: []
            }
          ]
        },
        {
          category: "TECHNOLOGY & OPERATIONS",
          title: "Optimize Your People, Data, & Tech Stack for Scale",
          services: [
            {
              title: "Systems & Process",
              items: [
                "Predictive Analytics & Embedded AI",
                "Post-Merger/Acquisition Integration (System, Data, Process, People, Identity & Culture)",
                "System Security Audit",
                "Move from SOPs to Playbooks"
              ]
            },
            {
              title: "Finance",
              items: [
                "Financial Health Assessment"
              ]
            },
            {
              title: "Human Resources",
              items: [
                "Coach HR Managers to become HRBPs (be more strategic, building the people to support the business goals)",
                "Succession Planning (Diagonal) Leadership Intent, Individual’s Aspirations, Readiness Validation"
              ]
            }
          ]
        },
        {
          category: "RESOURCES",
          title: "Support for Expansion",
          services: [
            {
              title: "Learning & Development Academy",
              items: [
                "Set up in-house Academy",
                "Co-design Learning Programs",
                "Train the Trainer(s) to empower for internal delivery"
              ]
            },
            {
              title: "Hiring for Key Positions",
              items: [
                "Scale Up Systems & Process Team (to match expansion)",
                "Outsource Senior-Level Recruitment",
                "Employment as a Service (Rent a Resource for Specialized Roles)"
              ]
            },
            {
              title: "Funding Support",
              items: [
                "Pitch Deck Development for Investors",
                "Investor/Lender Introductions",
                "Guidance on Equity vs. Debt Financing"
              ]
            }
          ]
        }
      ]
    }
  };

  return (
    <main className="bg-[#E2D8EC] font-poppins">
      {/* Hero Section */}
      <div
        id="hero-section"
        className="relative flex flex-col justify-center overflow-hidden   "
        style={{ minHeight: '700px' }}
      >
        <div className="absolute inset-0 z-0">
          <div className="h-full bg-[#F5F5F5]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0] opacity-85 z-1 backdrop-blur-sm"></div>
        </div>
        <SlideInSection
          direction="left"
          className="py-12 sm:py-16 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 sm:gap-12"
        >
          <div className="md:w-2/5 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-4xl font-extrabold text-[#27408F] leading-tight"
            >
              Solutions for Every Stage
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base font-medium italic text-black drop-shadow-md leading-relaxed"
            >
              From launching your business to scaling across markets, we’ve got you covered.
            </motion.p>
          </div>
          <div className="md:w-3/5 mt-8 sm:mt-6 md:mt-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              className="w-full max-w-md lg:max-w-2xl"
            >
              <Image
                src="/hero-bg3.jpg"
                alt="Solutions Image"
                width={1200}
                height={800}
                className="object-cover rounded-lg shadow-2xl w-full h-auto max-h-[250px] sm:max-h-[1000px] md:max-h-[350px] lg:max-h-[500px]"
              />
            </motion.div>
          </div>
        </SlideInSection>
      </div>

      {/* Tabs Section */}
      <div
        id="tabs-section"
        className="relative flex flex-col justify-center overflow-hidden   "
        style={{ minHeight: '700px' }}
      >
        <div className="absolute inset-0 z-0">
          <div className="h-full bg-[#E2D8EC]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#E2D8EC] to-[#D9C8E6] opacity-85 z-1 backdrop-blur-sm"></div>
        </div>
        <SlideInSection
          direction="right"
          className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto"
        >
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[#1AF866] text-[#27408F] shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h3 className="text-[32px] font-semibold text-[#27408F]">
                Stage: {tabContent[activeTab].stage}
              </h3>
              <p className="mt-4 text-base font-medium italic text-gray-700">
                <span className="font-semibold">Goal:</span> {tabContent[activeTab].goal}
              </p>
              <p className="mt-2 text-base font-medium italic text-gray-700">
                <span className="font-semibold">Value:</span> {tabContent[activeTab].value}
              </p>
            </motion.div>

            <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {tabContent[activeTab].content.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:border-[#1AF866] transition-all duration-300"
                >
                  <h4 className="text-base font-semibold text-[#27408F] uppercase">
                    {category.category}
                  </h4>
                  <h5 className="text-2xl font-semibold text-[#27408F] mt-2">
                    {category.title}
                  </h5>
                  {category.services.map((service, serviceIdx) => {
                    const sectionKey = `${activeTab}-${category.category}-${service.title}`;
                    const isOpen = openSections[sectionKey] || false;
                    return (
                      <div key={service.title} className="mt-4">
                        <div className="flex items-center justify-between">
                          <h6 className="text-2xl font-medium text-[#27408F]">
                            {service.title}
                          </h6>
                          {service.items.length > 0 && (
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
                          )}
                        </div>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-2 list-disc pl-5">
                            {service.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-base text-gray-700">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              ))}
            </div>
          </div>
        </SlideInSection>
      </div>

      {/* CTA Section */}
      <SlideInSection
        direction="left"
        className="bg-[#7030A0] text-white py-12 sm:py-16   "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-[32px] font-extrabold">Ready to Grow Your Business?</h2>
            <p className="mt-2 text-base font-medium italic">
              Let's discuss how our STARS approach can transform your business.
            </p>
          </div>
          <motion.button
            onClick={() => scrollToSection("consultation")}
            whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#7030A0', boxShadow: '0 0 15px rgba(26, 248, 102, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-[#7030A0] rounded-lg font-semibold text-base shadow-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2"
          >
            Get a Free Consultation
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
      </SlideInSection>
    </main>
  );
};

export default SolutionsSection;
