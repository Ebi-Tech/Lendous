import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#27408F] text-[#FFFFFF] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-[24px] font-bold flex items-center">
            <Image src="/footer-logo.png" alt="footer-logo" width={40} height={40} className="mr-2" />
            Lendous
          </h3>
          <p className="text-[16px] mt-4">
            Growing Partner for African SMEs, providing Systems, Tools, Advisory, and Resources to help businesses shine out of Africa.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-[#1AF866] transition duration-300" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-[#1AF866] transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-[#1AF866] transition duration-300" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-[#1AF866] transition duration-300" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[24px] font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-[16px]">
            <li><Link href="/" className="hover:text-[#1AF866] transition duration-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#1AF866] transition duration-300">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#1AF866] transition duration-300">Our Services</Link></li>
            <li><Link href="/training" className="hover:text-[#1AF866] transition duration-300">Training Program</Link></li>
            <li><Link href="/contact" className="hover:text-[#1AF866] transition duration-300">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[24px] font-bold">Contact Us</h3>
          <p className="text-[16px] mt-4">
            <strong>Address:</strong> 25 Business Avenue, Lagos, Nigeria<br />
            <strong>Email:</strong> <a href="mailto:info@lendousresources.com" className="hover:text-[#1AF866] transition duration-300">info@lendousresources.com</a><br />
            <strong>Phone:</strong> <a href="tel:+2341234567890" className="hover:text-[#1AF866] transition duration-300">+234 123 456 7890</a>
          </p>
        </div>
      </div>
      <div className="mt-10 text-center text-[16px] border-t border-[#B598CF] pt-6">
        <p>© 2025 Lendous. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-3">
          <Link href="/terms" className="hover:text-[#1AF866] transition duration-300">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-[#1AF866] transition duration-300">Privacy Policy</Link>
          <Link href="/refund" className="hover:text-[#1AF866] transition duration-300">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;