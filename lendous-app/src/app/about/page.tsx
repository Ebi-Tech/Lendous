"use client"

import { redirect } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import SlideInSection from '../../../components/SlideInSection';

export const AboutSection: React.FC = () => {
  return (
    <>
      {/* Intro Section */}
      <section id="about">
        <SlideInSection direction="left" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#E2D8EC]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-extrabold text-[#27408F] leading-tight">
              Who We Are
            </h2>
            <p className="text-[24px] mt-8 text-gray-700 font-light">
              Lendous Resources is the One-Stop Growth Hub for African SMEs, providing the Systems, Tools, Advisory, and Resources (STARs) they need to Launch, Grow, and Scale in Africa.
            </p>
            <p className="text-[16px] mt-6 text-gray-700">
              We are proud of our combined 30+ years experience from the leadership team spanning various industries including: Retail, Financial Services, Oil & Gas, Renewable Energy, & Hospitality to name a few.
            </p>
            <p className="text-[16px] mt-6 text-gray-700">
              We are committed to solving the problem of launching and growing businesses in Africa with clarity & precision.
            </p>
          </div>
        </SlideInSection>
      </section>

      {/* Team Section */}
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
                      e.currentTarget.src = '/placeholder-team-member.jpg'; // Fallback image
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
    </>
  );
};

// Redirect /about to /#about
export default function AboutPage() {
  redirect('/#about');
}
