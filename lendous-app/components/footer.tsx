import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`bg-[#1A2535] text-[#FFFFFF] py-10 sm:py-12 px-4 sm:px-6 ${className}`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Lendous Section */}
        <div className="w-full">
          <Image
            src="/footer-logo.png"
            alt="Lendous Logo"
            width={500}
            height={500}
            className="w-45 h-auto mr-2"
          />
          <p className="text-[12px] lg:text-[14px] mt-4 lg:mr-30 text-left leading-loose">
            Growth Partner for African SMEs, providing Systems, Tools, Advisory,
            and Resources to help businesses shine out of Africa.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-6">
            {[
              { icon: Linkedin, url: "https://linkedin.com" },
              { icon: Facebook, url: "https://facebook.com" },
              { icon: Instagram, url: "https://instagram.com" },
              { icon: Twitter, url: "https://x.com" },
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
        <div className="w-full mt-2 lg:ml-15 leading-7">
          <h3 className="text-[16px] sm:text-[20px] font-semibold mb-4">
            <span>
              {" "}
              <span className="border-b-[2px] border-b-[#7030A0]">
                Quick
              </span>{" "}
              Links
            </span>
          </h3>
          <ul className="list-disc space-y-3 pl-5 text-[12px] lg:text-[14px]">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Solutions", path: "/solutions" },
              { name: "Training Programs", path: "/training" },
              { name: "Contact Us", path: "/contact" },
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

        {/* Contact Us Section */}
        <div className="w-full mt-2">
          <h3 className="text-[16px] sm:text-[20px] font-semibold mb-4 flex">
            <span>
              {" "}
              <span className="border-b-[2px] border-b-[#7030A0]">Conta</span>ct
              Us
            </span>
          </h3>
          <address className="not-italic text-[12px] space-y-3">
            <div>
              <strong className="block">Email:</strong>
              <a
                href="mailto:info@lendous.com"
                className="hover:text-[#1AF866] transition duration-300"
              >
                info@lendousresources.com
              </a>
            </div>
            <div>
              <strong className="block">West Africa:</strong>
              <span>
                Address: Zimar House, 13 Adegbenro Street, Gbagada, Lagos,
                Nigeria
              </span>
              <br />
              <span>
                <a
                  href="tel:+2348132108408"
                  className="hover:text-[#1AF866] transition duration-300"
                >
                  WhatsApp: +234 813 210 8408
                </a>
              </span>
            </div>
            <div>
              <strong className="block">East Africa:</strong>
              <span>
                Address: 11 KG 203 Street, Gasabo District, Kigali, Rwanda
              </span>
              <br />
              <span>
                <a
                  href="tel:+2348132108408"
                  className="hover:text-[#1AF866] transition duration-300"
                >
                  WhatsApp: +250 798 335 965
                </a>
              </span>
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
