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
    <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-[#FFFFFF] to-[#E6D8F0] shadow-lg" style={{ boxShadow: "0 4px 15px rgba(112, 48, 160, 0.2)" }}>
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo and Brand Name */}
        <div className="text-[36px] font-bold  flex items-center">
          <Image
            src="/footer-logo.png"
            alt="Lendous Logo"
            width={48}
            height={48}
            className="mr-3"
          />
          <span className="text-transparent opacity bg-clip-text bg-gradient-to-r from-[#8563ad] to-[#758cbd]">
            Lendous
          </span>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-[#333333] hover:text-[#1AF866] transition-transform duration-300 ease-in-out"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={28} className="transform rotate-90 transition-transform duration-300" />
          ) : (
            <Menu size={28} className="transition-transform duration-300" />
          )}
        </button>
        {/* Navigation Links */}
        <div
          className={`${isMenuOpen ? "flex" : "hidden"}
            md:flex flex-col md:flex-row fixed md:static inset-0 md:inset-auto w-full md:w-auto h-screen md:h-auto bg-white md:bg-transparent transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            md:space-x-8 px-6 py-6 md:p-0 md:shadow-none shadow-lg`}
        >
          <div className="flex flex-col h-full">
            {/* Logo for Mobile Menu */}
            <div className="md:hidden flex items-center mb-6">
              <Image
                src="/footer-logo.png"
                alt="Lendous Logo"
                width={48}
                height={48}
                className="mr-3"
              />
              <span className="text-transparent opacity bg-clip-text bg-gradient-to-r from-[#8563ad] to-[#758cbd] font-bold text-[36px]">
                Lendous
              </span>
            </div>
            {/* Close Button for Mobile Menu */}
            <div className="flex justify-end md:hidden mb-6">
              <button
                onClick={toggleMenu}
                className="text-[#333333] hover:text-[#1AF866]"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            {/* Menu Items */}
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
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
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#333333] text-[18px] font-semibold transition-all duration-300 text-left md:text-center relative group hover:text-[#1AF866] bg-transparent"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#1AF866] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            {/* Footer Content for Mobile Menu */}
            <div className="mt-auto pt-8 text-[#333333]/50 text-[14px] md:hidden">
              <p>© 2025 Lendous</p>
              <p>Lendous Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
