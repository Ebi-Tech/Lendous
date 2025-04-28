"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#FFFFFF] to-[#E6D8F0] shadow-lg" style={{ boxShadow: "0 4px 15px rgba(112, 48, 160, 0.2)" }}>
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 max-w-7xl mx-auto">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center">
          <Image
            src="/footer-logo.png"
            alt="Lendous Logo"
            width={40}
            height={40}
            className="mr-2 h-10 w-10"
          />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8563ad] to-[#758cbd] font-bold text-2xl sm:text-3xl">
            Lendous
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Solutions", href: "/solutions" },
            { label: "Training", href: "/training-programs" },
            { label: "FAQ", href: "/faq" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-800 hover:text-[#1AF866] text-sm lg:text-base font-medium transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#1AF866] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-800 hover:text-[#1AF866] focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} className="h-6 w-6" />
          ) : (
            <Menu size={24} className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={toggleMenu}
            ></div>
            
            {/* Menu Content */}
            <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl">
              <div className="flex flex-col h-full p-4">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center" onClick={toggleMenu}>
                    <Image
                      src="/footer-logo.png"
                      alt="Lendous Logo"
                      width={40}
                      height={40}
                      className="mr-2"
                    />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8563ad] to-[#758cbd] font-bold text-2xl">
                      Lendous
                    </span>
                  </Link>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md text-gray-800 hover:text-[#1AF866]"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <nav className="flex-1 flex flex-col space-y-4">
                  {[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Solutions", href: "/solutions" },
                    { label: "Training Programs", href: "/training-programs" },
                    { label: "FAQ", href: "/faq" },
                    { label: "Contact", href: "/contact" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={toggleMenu}
                      className="px-4 py-3 text-gray-800 hover:text-[#1AF866] text-lg font-medium border-b border-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Footer */}
                <div className="mt-auto pt-4 text-gray-500 text-sm">
                  <p>© 2025 Lendous</p>
                  <p>Lendous Inc.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
