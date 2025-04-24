import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#E2D8EC] font-aptos">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#7030A0] to-[#27408F] text-[#FFFFFF] py-20 px-4">
        <div className="absolute inset-0 bg-opacity-10 bg-[#1AF866] opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-[36px] font-bold tracking-tight">
            Ready to Be The Next Big Thing in Africa?
          </h1>
          <p className="text-[24px] mt-4 italic text-[#B598CF]">
            Launch, Grow, Scale Your Business with Lendous
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/solutions">
              <button className="px-8 py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold hover:bg-[#FFFFFF] hover:text-[#7030A0] transition duration-300 shadow-lg">
                Explore Solutions
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 border-2 border-[#FFFFFF] text-[#FFFFFF] rounded-lg font-semibold hover:bg-[#FFFFFF] hover:text-[#7030A0] transition duration-300 shadow-lg">
                Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 px-4 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[32px] font-bold text-[#27408F] leading-tight">
            Starting & Growing a Business is Hard.
            <br />
            We are Here to Make it Easier
          </h2>
          <p className="text-[16px] text-gray-600 mt-6 max-w-2xl mx-auto">
            In a world filled with guesswork managing your business, so many business tools, and endless subscriptions, let’s give you only the Systems, Tools, Advisory, & Resources (STARS) you need at your current business stage.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#E2D8EC] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <span className="text-[24px] font-bold text-[#7030A0] block">1.</span>
              <h3 className="text-[18px] font-semibold text-[#27408F] mt-2">Select Service(s)</h3>
              <p className="text-[16px] text-gray-700 mt-2">
                Explore our range of services & pick the preferred.
              </p>
            </div>
            <div className="bg-[#E2D8EC] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <span className="text-[24px] font-bold text-[#7030A0] block">2.</span>
              <h3 className="text-[18px] font-semibold text-[#27408F] mt-2">Get a Free Consultation</h3>
              <p className="text-[16px] text-gray-700 mt-2">
                We ensure your selection(s) are solving the problems at your current stage.
              </p>
            </div>
            <div className="bg-[#E2D8EC] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <span className="text-[24px] font-bold text-[#7030A0] block">3.</span>
              <h3 className="text-[18px] font-semibold text-[#27408F] mt-2">Receive an Online Quote</h3>
              <p className="text-[16px] text-gray-700 mt-2">
                We share with you the best quote for what you need.
              </p>
            </div>
            <div className="bg-[#E2D8EC] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <span className="text-[24px] font-bold text-[#7030A0] block">4.</span>
              <h3 className="text-[18px] font-semibold text-[#27408F] mt-2">Your Solution Gets Deployed</h3>
              <p className="text-[16px] text-gray-700 mt-2">
                We deliver your solution in record time and stay close to support on your next need.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/solutions">
              <button className="px-8 py-3 bg-[#7030A0] text-[#FFFFFF] rounded-lg font-semibold hover:bg-[#1AF866] hover:text-[#27408F] transition duration-300 shadow-lg">
                Explore Solutions
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Lendous Section */}
      <section className="py-20 px-4 bg-[#E2D8EC] text-[#27408F]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[32px] font-bold tracking-tight">
            The Lendous Assurance: You Will Never Work Alone!
          </h2>
          <p className="text-[16px] mt-4 text-[#7030A0]">
            Whenever your business needs anything, think Lendous first.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-12">
            <div className="text-center">
              <p className="text-[24px] font-bold text-[#7030A0]">$300M+</p>
              <p className="text-[16px] mt-2 text-gray-700">Value Delivered by Lendous Leaders</p>
            </div>
            <div className="text-center">
              <p className="text-[24px] font-bold text-[#7030A0]">4+ Years</p>
              <p className="text-[16px] mt-2 text-gray-700">Supporting African SMEs</p>
            </div>
            <div className="text-center">
              <p className="text-[24px] font-bold text-[#7030A0]">30+ Years</p>
              <p className="text-[16px] mt-2 text-gray-700">Leadership Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#27408F] text-[#FFFFFF] py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[24px] font-bold flex items-center">
              <span className="mr-2 text-[#1AF866]">▶</span> Lendous
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
    </div>
  );
};

export default Home;