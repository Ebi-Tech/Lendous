import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20">
      {/* Background Layer with Opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7030A0] to-[#27408F] opacity-45 z-0"></div>
      {/* Content Layer - Fully Opaque */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center">
          <Image
            src="/footer-logo.png"
            alt="Lendous Logo"
            width={40}
            height={40}
            className="mr-2 sm:mr-4"
          />
          <span className="text-[#1AF866] text-[36px] font-bold">Lendous</span>
        </div>
        {/* Menu Icon for Mobile */}
        <button
          className="md:hidden text-[#FFFFFF] hover:text-[#1AF866] transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto ${
            isMenuOpen ? 'bg-gradient-to-r from-[#7030A0] to-[#27408F]' : ''
          } md:bg-transparent opacity-90 md:opacity-100 z-10 md:space-x-4 sm:space-x-6 px-4 py-4 md:p-0`}
        >
          {[
            { label: 'Home', section: 'hero-section' },
            { label: 'Services', section: 'services' },
            { label: 'Solutions', section: 'solutions' },
            { label: 'About', section: 'about' },
            { label: 'Training Programs', section: 'training-programs' },
            { label: 'FAQ', section: 'faq' },
            { label: 'Contact', section: 'contact' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                scrollToSection(item.section);
                setIsMenuOpen(false); // Close the menu on link click
              }}
              className="text-[#FFFFFF] hover:text-[#1AF866] text-[16px] sm:text-[18px] font-medium transition-colors duration-300 py-2 md:py-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;