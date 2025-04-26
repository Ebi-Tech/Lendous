"use client"

import { redirect } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUsers, FaMoneyBillWave, FaHandshake } from 'react-icons/fa';
import SlideInSection from '../../../components/SlideInSection';

export const ServicesSection: React.FC = () => {
  const serviceIcons = {
    'Lendous Tech': <FaLaptopCode className="w-6 h-6 text-[#27408F]" />,
    'Lendous People': <FaUsers className="w-6 h-6 text-[#27408F]" />,
    'Lendous Capital': <FaMoneyBillWave className="w-6 h-6 text-[#27408F]" />,
    'Lendous Support': <FaHandshake className="w-6 h-6 text-[#27408F]" />,
  };

  const cardGradients = [
    'bg-gradient-to-br from-[#E2D8EC] to-[#F5F5FF]',
    'bg-gradient-to-br from-[#F0E8FF] to-[#FAFAFF]',
    'bg-gradient-to-br from-[#F5F5FF] to-[#E2D8EC]',
    'bg-gradient-to-br from-[#FAFAFF] to-[#F0E8FF]',
  ];

  const serviceData = [
    {
      title: 'Lendous Tech',
      services: [
        'Development',
        'Web',
        'Business App Development',
        'Dashboard Development',
        'Data Analysis & Reporting',
        'Business Systems Setup',
        'Digital Transformation',
        'Workflow Automation',
        'Robotic Process Automation',
        'Tech Tools Curation',
        'Agents',
        'CRM, ERPs, HRIS, BFMS, Apps, BI/Analytics Tools etc.',
      ],
    },
    {
      title: 'Lendous People',
      services: [
        'People Operations',
        'Talent Acquisition',
        'Outsourced Hiring',
        'Rent a Resource (EaaS)',
        'Learning & Development',
        'Senior Leaders Training',
        'Middle Managers Training',
        'New Managers Training',
        'Operational Teams’ Training (HR, Sales, Systems & Process, Customer Service etc.)',
      ],
    },
    {
      title: 'Lendous Capital',
      services: [
        'Funding Readiness Support',
        'Pitch deck development',
        'Investor/Lender Introduction',
        'Grant & Loan application',
        'Credit & Financial Health Advisory',
        'SME credit risk analysis',
        'Financial health improvement plans',
        'Debt/Equity guidance for growth financing',
      ],
    },
    {
      title: 'Lendous Support',
      services: [
        'Advisory',
        'Across all Areas of Expertise',
        'Sales & Expansion',
        'In-Country Expansion',
        'Africa Expansion (East & West Africa)',
        'Market Research & Analysis',
        'Solution Delivery',
        'Project Management',
        'Process Management',
        'Change Management',
        'Continuous Improvement',
        'Business Compliance',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#E2D8EC]">
      <SlideInSection direction="left" className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-extrabold text-[#27408F] leading-tight">
          Services
        </h2>

        {/* Subtitle */}
        <p className="mt-8 text-[24px] text-gray-700 font-light">
          We blend our combined expertise across the following service areas to give you Solutions
        </p>

        {/* Service Cards */}
        <div className="mt-12 sm:mt-16 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {serviceData.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(112, 48, 160, 0.4)' }}
                className={`p-6 rounded-2xl shadow-lg transition-transform duration-300 ${cardGradients[index]} border border-gray-100 relative z-10 hover:border-[#1AF866]`}
              >
                <div className="flex items-center mb-4">
                  {serviceIcons[category.title as keyof typeof serviceIcons]}
                  <h3 className="text-[32px] font-semibold text-[#27408F] ml-3">{category.title}</h3>
                </div>
                <ol className="sm:hidden list-disc list-inside text-[16px] text-gray-700 font-medium space-y-6">
                  {category.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ol>
                <div className="hidden sm:flex sm:flex-wrap sm:gap-4 text-[16px] text-gray-700 font-medium">
                  {category.services.map((service, idx) => (
                    <span key={idx} className="flex items-center">
                      <span className="text-[#7030A0] text-[14px] mr-2 font-bold">•</span>
                      {service}
                      {idx < category.services.length - 1 && ' '}
                    </span>
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
              whileHover={{ scale: 1.1, backgroundColor: '#FFFFFF', color: '#7030A0', boxShadow: '0 0 15px rgba(26, 248, 102, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold transition duration-300 shadow-lg text-[16px]"
            >
              Explore Solutions
            </motion.button>
          </Link>
        </div>
      </SlideInSection>
    </section>
  );
};

// Redirect /services to /#services
export default function ServicesPage() {
  redirect('/#services');
}