"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SlideInSection from '../../components/SlideInSection';

const Home: React.FC = () => {
  return (
    <div className="bg-[#E2D8EC] font-aptos">
      {/* Hero Section */}
      <SlideInSection direction="down" className="relative h-screen flex items-center justify-center text-[#FFFFFF] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7030A0] to-[#27408F] animate-gradientShift"></div>
        <div className="absolute inset-0 bg-[#1AF866] opacity-10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <h1 className="text-[36px] md:text-[48px] font-bold tracking-tight">
            Ready to Be The Next Big Thing in Africa?
          </h1>
          <p className="text-[24px] md:text-[28px] mt-4 italic text-[#B598CF]">
            Launch, Grow, Scale Your Business with Lendous
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/solutions">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#7030A0' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold transition duration-300 shadow-lg"
              >
                Explore Solutions
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#7030A0' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-[#FFFFFF] text-[#FFFFFF] rounded-lg font-semibold transition duration-300 shadow-lg"
              >
                Free Consultation
              </motion.button>
            </Link>
          </div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-8 h-8 text-[#1AF866]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </SlideInSection>

      {/* Problems We Solve Section */}
      <SlideInSection direction="left" className="py-20 px-4 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#27408F] leading-tight">
            Starting & Growing a Business is Hard.
            <br />
            We are Here to Make it Easier
          </h2>
          <p className="text-[16px] text-gray-600 mt-6 max-w-2xl mx-auto">
            In a world filled with guesswork managing your business, so many business tools, and endless subscriptions, let’s give you only the Systems, Tools, Advisory, & Resources (STARS) you need at your current business stage.
          </p>
          <SlideInSection direction="down" className="py-20 px-4 bg-[#FFFFFF]">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Select Service(s)', desc: 'Explore our range of services & pick the preferred.' },
              { step: 2, title: 'Get a Free Consultation', desc: 'We ensure your selection(s) are solving the problems at your current stage.' },
              { step: 3, title: 'Receive an Online Quote', desc: 'We share with you the best quote for what you need.' },
              { step: 4, title: 'Your Solution Gets Deployed', desc: 'We deliver your solution in record time and stay close to support on your next need.' },
            ].map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative bg-[#E2D8EC] p-6 rounded-lg shadow-lg transition-transform duration-300 group"
              >
                <span className="text-[24px] font-bold text-[#7030A0] block">{item.step}.</span>
                <h3 className="text-[18px] font-semibold text-[#27408F] mt-2">{item.title}</h3>
                <p className="text-[16px] text-gray-700 mt-2">{item.desc}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#1AF866] rounded-lg transition duration-300"></div>
              </motion.div>
            ))}
          </div>
          </SlideInSection>
          <div className="mt-10">
            <Link href="/solutions">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#1AF866', color: '#27408F' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#7030A0] text-[#FFFFFF] rounded-lg font-semibold transition duration-300 shadow-lg"
              >
                Explore Solutions
              </motion.button>
            </Link>
          </div>
        </div>
      </SlideInSection>

      {/* Why Lendous Section */}
      <SlideInSection direction="right" className="py-20 px-4 bg-[#E2D8EC] text-[#27408F]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight">
            The Lendous Assurance: You Will Never Work Alone!
          </h2>
          <p className="text-[16px] mt-4 text-[#7030A0]">
            Whenever your business needs anything, think Lendous first.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-12">
            {[
              { value: '$300M+', label: 'Value Delivered by Lendous Leaders' },
              { value: '4+ Years', label: 'Supporting African SMEs' },
              { value: '30+ Years', label: 'Leadership Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-[24px] font-bold text-[#7030A0]">{stat.value}</p>
                <p className="text-[16px] mt-2 text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideInSection>
    </div>
  );
};

export default Home;