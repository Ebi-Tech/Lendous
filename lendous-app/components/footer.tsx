import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A2535] text-[#FFFFFF] py-10 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {/* Lendous Section */}
        <div>
          <h3 className="text-[20px] sm:text-[24px] font-bold flex items-center">
            <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Lendous
          </h3>
          <p className="text-[14px] sm:text-[16px] mt-4">
            Growth Partner for African SMEs, providing Systems, Tools, Advisory, and Resources to help businesses shine out of Africa.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#1AF866] transition duration-300" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#1AF866] transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#1AF866] transition duration-300" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 hover:text-[#1AF866] transition duration-300" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-[20px] sm:text-[24px] font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2 sm:space-y-3 text-[14px] sm:text-[16px]">
            <li><Link href="/" className="hover:text-[#1AF866] transition duration-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#1AF866] transition duration-300">About Us</Link></li>
            <li><Link href="/training" className="hover:text-[#1AF866] transition duration-300">Training Programs</Link></li>
            <li><Link href="/contact" className="hover:text-[#1AF866] transition duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-[20px] sm:text-[24px] font-bold">Contact Us</h3>
          <p className="text-[14px] sm:text-[16px] mt-4 space-y-2">
            <span className="block"><strong>Address:</strong> 25 Business Avenue, Lagos, Nigeria</span>
            <span className="block"><strong>Email:</strong> <a href="mailto:info@lendous.com" className="hover:text-[#1AF866] transition duration-300">info@lendous.com</a></span>
            <span className="block"><strong>Phone:</strong> <a href="tel:+2341234567890" className="hover:text-[#1AF866] transition duration-300">+234 123 456 7890</a></span>
          </p>
        </div>
      </div>
      <div className="mt-8 sm:mt-10 text-center text-[14px] sm:text-[16px] border-t border-[#FFFFFF]/20 pt-6">
        <p>© 2025 Lendous. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;