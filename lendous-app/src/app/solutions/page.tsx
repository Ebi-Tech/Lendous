"use client";

import React, { useState } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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

  const toggleSection = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
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
              title: "Teams & Reporting Lines",
              items: [
                "Outsourced Hiring or Rent a Resource",
                "Expand profit-centre teams and only slightly expand the Systems & Process Team",
                "Champion functional reporting structure (to preserve domain expertise over hierarchical)"
              ]
            }
          ]
        }
      ]
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: i * 0.05 },
    }),
  };

  return (
    <section id="solutions" className="pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#E2D8EC] to-[#D9C8E6] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="h-full bg-[#E2D8EC]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#E2D8EC] to-[#D9C8E6] opacity-85 z-1 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-10 sm:mb-12">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-[#333333] text-[30px] sm:text-[38px] md:text-[44px] font-extrabold tracking-tight drop-shadow-lg leading-tight sm:leading-snug"
            >
              Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              className="mt-6 sm:mt-10 text-[#666666] text-[18px] sm:text-[20px] md:text-[22px] font-light italic drop-shadow-md leading-relaxed max-w-3xl mx-auto md:mx-0"
            >
              We have tailored solutions to fit your business need. Find your current business stage, and select your solution (one service, multiple, or the entire bundle).
            </motion.p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
            >
              <Image
                src="/hero-bg3.jpg"
                alt="Solutions Image"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 sm:px-8 py-2 sm:py-3 text-[14px] sm:text-[16px] font-semibold rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#7030A0] to-[#27408F] text-[#FFFFFF] shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105 hover:underline underline-offset-4'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-700 text-[14px] sm:text-[16px] font-normal mb-2">
              <span className="font-semibold">STAGE:</span> {tabContent[activeTab].stage}
            </p>
            <p className="text-gray-700 text-[14px] sm:text-[16px] font-normal mb-2">
              <span className="font-semibold">GOAL:</span> {tabContent[activeTab].goal}
            </p>
            <p className="text-gray-700 text-[14px] sm:text-[16px] font-normal">
              <span className="font-semibold">VALUE OFFERED:</span> {tabContent[activeTab].value}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {tabContent[activeTab].content.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-md">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#27408F] mb-2">
                  {category.category}
                </h3>
                <h4 className="text-[16px] sm:text-[18px] font-medium text-gray-700 mb-4">
                  {category.title}
                </h4>
                <div className="space-y-4 sm:space-y-6">
                  {category.services.map((service, serviceIndex) => {
                    const sectionKey = `${activeTab}-${category.category}-${service.title}`;
                    const isOpen = openSections[sectionKey] || false;
                    return (
                      <div key={serviceIndex}>
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-gray-800 text-[14px] sm:text-[16px] mb-2">
                            {serviceIndex + 1}. {service.title}
                          </p>
                          {service.items && service.items.length > 0 && (
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
                        {service.items && service.items.length > 0 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: isOpen ? "auto" : 0,
                              opacity: isOpen ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="list-disc pl-6 space-y-1">
                              {service.items.map((item, itemIndex) => (
                                <motion.li
                                  key={itemIndex}
                                  custom={itemIndex}
                                  initial="hidden"
                                  animate="visible"
                                  variants={badgeVariants}
                                  className="text-gray-600 text-[14px] sm:text-[16px] font-normal"
                                >
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            {activeTab === 'Scale' ? (
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#7030A0] to-[#27408F] text-[#FFFFFF] rounded-lg font-semibold transition-all duration-200 shadow-lg text-[14px] sm:text-[16px] hover:scale-105 hover:underline underline-offset-4">
                  Request Solution
                </button>
                <button className="px-6 sm:px-8 py-2 sm:py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold transition-all duration-200 shadow-lg text-[14px] sm:text-[16px] hover:scale-105 hover:underline underline-offset-4">
                  Not Sure What You Need?<br className="sm:hidden" />Get a Free Consultation
                </button>
              </div>
            ) : (
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#7030A0] to-[#27408F] text-[#FFFFFF] rounded-lg font-semibold transition-all duration-200 shadow-lg text-[14px] sm:text-[16px] hover:scale-105 hover:underline underline-offset-4">
                Request Solution
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;