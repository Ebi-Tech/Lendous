import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`bg-[#1A2535] text-[#FFFFFF] py-10 sm:py-12 px-4 sm:px-6 ${className}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* Lendous Section */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="text-[36px] font-bold flex items-center">
            <Image
              src="/favicon.ico"
              alt="Lendous Logo"
              width={32}
              height={32}
              className="w-8 h-8 mr-2"
            />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#C4A7E7] to-[#A3BFFA]'>
              Lendous
            </span>
          </h3>
          <p className="text-[16px] mt-4">
            Growth Partner for African SMEs, providing Systems, Tools, Advisory, and Resources to help businesses shine out of Africa.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-6">
            {[
              { icon: Linkedin, url: "https://linkedin.com" },
              { icon: Facebook, url: "https://facebook.com" },
              { icon: Instagram, url: "https://instagram.com" },
              { icon: Twitter, url: "https://x.com" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1AF866] transition duration-300"
                aria-label={`Follow us on ${social.icon.name}`}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-[24px] sm:text-[28px] font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-[16px]">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Solutions", path: "/solutions" },
              { name: "Training Programs", path: "/training" },
              { name: "Contact Us", path: "/contact" }
            ].map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.path}
                  className="hover:text-[#1AF866] transition duration-300 block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-[24px] sm:text-[28px] font-bold mb-4">Services</h3>
          <ul className="space-y-3 text-[16px]">
            {[
              "Business Advisory",
              "Funding Solutions",
              "Digital Transformation",
              "Market Expansion",
              "Talent Development"
            ].map((service, index) => (
              <li key={index} className="hover:text-[#1AF866] transition duration-300">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-[24px] sm:text-[28px] font-bold mb-4">Contact Us</h3>
          <address className="not-italic text-[16px] space-y-3">
            <div>
              <strong className="block">Address</strong>
              <span>25 Business Avenue, Lagos, Nigeria</span>
            </div>
            <div>
              <strong className="block">Email</strong>
              <a 
                href="mailto:info@lendous.com" 
                className="hover:text-[#1AF866] transition duration-300"
              >
              info@lendousresources.com
              </a>
            </div>
            <div>
              <strong className="block">Phone</strong>
              <a 
                href="tel:+2341234567890" 
                className="hover:text-[#1AF866] transition duration-300"
              >
                +234 123 456 7890
              </a>
            </div>
          </address>
        </div>
      </div>
      
      <div className="mt-12 pt-6 border-t border-[#FFFFFF]/20 text-center text-[14px] sm:text-[16px]">
        <p>© {new Date().getFullYear()} Lendous. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
          <Link href="/privacy" className="hover:text-[#1AF866] transition duration-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#1AF866] transition duration-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;