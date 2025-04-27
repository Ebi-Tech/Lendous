import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-[#7030A0]/80 to-[#27408F]/80 shadow-md backdrop-blur-sm">
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <Image
            src="/footer-logo.png"
            alt="Lendous Logo"
            width={48}
            height={48}
            className="mr-3"
          />
          <span className="text-[#1AF866] text-[36px] font-bold font-aptos">
            Lendous
          </span>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-[#FFFFFF] hover:text-[#1AF866] transition-transform duration-300 ease-in-out"
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
          className={`${isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row fixed md:static inset-0 md:inset-auto w-full md:w-auto h-screen md:h-auto bg-gradient-to-r from-[#7030A0]/95 to-[#27408F]/95 md:bg-transparent transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            } md:space-x-8 px-6 py-6 md:p-0 md:shadow-none md:items-center shadow-lg`}
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
              <span className="text-[#1AF866] text-[36px] font-bold font-aptos">
                Lendous
              </span>
            </div>
            {/* Close Button for Mobile Menu */}
            <div className="flex justify-end md:hidden mb-6">
              <button
                onClick={toggleMenu}
                className="text-[#FFFFFF] hover:text-[#1AF866]"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            {/* Menu Items */}
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
              {[
                { label: "Home", section: "hero-section" },
                { label: "Services", section: "services" },
                { label: "Solutions", section: "solutions" },
                { label: "About", section: "about" },
                { label: "Training Programs", section: "training-programs" },
                { label: "FAQ", section: "faq" },
                { label: "Contact", section: "contact" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.section);
                    setIsMenuOpen(false);
                  }}
                  className="text-[#FFFFFF] text-[18px] font-semibold font-aptos transition-all duration-300 text-left md:text-center relative group hover:text-[#1AF866]"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#1AF866] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            {/* Footer Content for Mobile Menu */}
            <div className="mt-auto pt-8 text-[#FFFFFF]/50 text-[14px] font-aptos md:hidden">
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