"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-[1000] font-poppins transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Pseudo-element for navbar background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#7030A0] to-[#27408F] opacity-20 z-[-1]"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo Placeholder */}
          <div className="flex-shrink-0">
            {/* Placeholder for the logo - replace with your logo image */}
            <div className="w-32 h-10 bg-gray-300 flex items-center justify-center text-gray-500">
              [Logo Placeholder]
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {['Home', 'Services', 'Solutions', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-[#FFFFFF] hover:text-[#1AF866] text-[16px] font-bold transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#FFFFFF] hover:text-[#1AF866] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="sm:hidden relative"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            {/* Pseudo-element for mobile menu background */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#7030A0] to-[#27408F] opacity-75 z-[-1]"
            ></div>
            <div className="flex flex-col space-y-4 py-4 px-4">
              {['Home', 'Services', 'Solutions', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-[#FFFFFF] hover:text-[#1AF866] text-[16px] font-bold transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;