import React from 'react';
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
        <SlideInSection direction="left" className="relative py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#F5F5FF] to-[#E2D8EC]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-extrabold text-[#27408F] leading-tight">
              Who We Are
            </h2>
            <p className="text-[24px] mt-4 text-gray-700 font-light">
              Lendous Resources is the One-Stop Growth Hub for African SMEs, providing the Systems, Tools, Advisory, and Resources (STARs) they need to Launch, Grow, and Scale in Africa.
            </p>
            <p className="text-[16px] mt-4 text-gray-700">
              We are proud of our combined 30+ years experience from the leadership team spanning various industries including: Retail, Financial Services, Oil & Gas, Renewable Energy, & Hospitality to name a few.
            </p>
            <p className="text-[16px] mt-4 text-gray-700">
              We are committed to solving the problem of launching and growing businesses in Africa with clarity & precision.
            </p>
          </div>
          {/* Decorative Wave SVG */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1440 120" className="w-full h-auto">
              <path
                fill="#FFFFFF"
                fillOpacity="1"
                d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z"
              />
            </svg>
          </div>
        </SlideInSection>
      </section>

      {/* Team Section */}
      <SlideInSection direction="right" className="relative py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#E2D8EC] to-[#F5F5FF]">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 120" className="w-full h-auto transform rotate-180">
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z"
            />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-extrabold text-[#27408F] leading-tight">
            Meet Our Leadership Team
          </h2>
          <p className="text-[24px] mt-4 text-gray-700 font-light">
            Our leaders bring decades of experience to help your business thrive.
          </p>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            <svg className="absolute inset-0 w-full h-full z-0 opacity-30 pointer-events-none hidden sm:block">
              <line x1="33%" y1="50%" x2="66%" y2="50%" stroke="#7030A0" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="33%" y1="50%" x2="33%" y2="60%" stroke="#7030A0" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="66%" y1="50%" x2="66%" y2="60%" stroke="#7030A0" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
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
                className="relative flex flex-col items-center p-6 rounded-2xl bg-[#FFFFFF] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1AF866] z-10"
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-gradient-to-r from-[#7030A0] to-[#27408F]"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#1AF866] opacity-0"
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-[24px] font-semibold text-[#27408F] mt-4">{member.name}</h3>
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
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full">
            <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#7030A0" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>
      </SlideInSection>
    </>
  );
};

// Redirect /about to /#about
export default function AboutPage() {
  redirect('/#about');
}
