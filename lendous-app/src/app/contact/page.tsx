"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Initialize EmailJS with Public Key
  useEffect(() => {
    emailjs.init({
      publicKey: "PfJaE_q0VQU_oGv_J", // Replace with your EmailJS Public Key
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus("idle");

    try {
      // Send form data using EmailJS
      await emailjs.sendForm(
        "service_7lu5yle", // Replace with your Service ID (e.g., service_f0n72lt)
        "template_kcl1pye", // Replace with your Template ID (e.g., template_4cs1frb)
        e.target as HTMLFormElement,
        {
          publicKey: "PfJaE_q0VQU_oGv_J", // Replace with your Public Key
        }
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative flex flex-col justify-center bg-cover bg-center"
        style={{
          minHeight: "700px",
          backgroundImage: "url('/hero-bg5.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-300/50 to-teal-100/10 z-1"></div>

        {/* Accent Top Border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1AF866] via-[#27408F] to-[#7030A0] z-10"></div>

        <div className="py-12 sm:py-16 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-12 text-center">
          <div className="space-y-6 sm:space-y-10 px-4 sm:px-0">
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white text-[20px] sm:text-[36px] font-extrabold leading-tight max-w-[90%] mx-auto [text-shadow:_0_2px_6px_rgba(0,0,0,0.4)]"
              >
                Contact Us Today
              </motion.h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <svg width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 5C20 -1.66667 40 -1.66667 60 5C80 11.6667 100 11.6667 120 5"
                    stroke="#1AF866"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-white text-[16px] sm:text-[18px] font-comic-neue tracking-wide mt-6"
            >
              Let’s discuss how we can help your business thrive with tailored solutions and ongoing support.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8">
              <motion.button
                role="button"
                tabIndex={0}
                onClick={() => scrollToSection("contact-form-section")}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: "#7030A0",
                  boxShadow: "0 0 15px rgba(26, 248, 102, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 hover:shadow-xl"
                aria-label="Get in touch with us"
              >
                <span className="font-poppins">Get in Touch</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 48"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-12"
          >
            <path
              d="M0 48H1440V0C1200 32 960 48 720 48C480 48 240 32 0 0V48Z"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>
      </section>

      {/* Contact Form Section */}
      <div id="contact-form-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Side: Header, Description, Benefits, and Hours */}
            <div className="md:w-1/2 bg-[#7030A0] p-6 sm:p-8 rounded-t-lg md:rounded-t-none md:rounded-l-lg text-left">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-[16px] font-bold text-white"
              >
                Let’s Discuss Your Business Needs
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                className="mt-6 text-[14px] font-normal text-gray-100"
              >
                Whether you’re looking to streamline operations, boost sales, or implement new technologies, our team is here to help you achieve your business goals.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 space-y-4"
              >
                <div className="flex items-start justify-start">
                  <svg className="w-5 h-5 text-[#1AF866] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[14px] font-normal text-gray-100">Comprehensive business assessment</span>
                </div>
                <div className="flex items-start justify-start">
                  <svg className="w-5 h-5 text-[#1AF866] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[14px] font-normal text-gray-100">Tailored solutions for African SMEs</span>
                </div>
                <div className="flex items-start justify-start">
                  <svg className="w-5 h-5 text-[#1AF866] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[14px] font-normal text-gray-100">Ongoing support and guidance</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8"
              >
                <h3 className="text-[16px] font-bold text-white uppercase">Our Business Hours:</h3>
                <p className="mt-3 text-[14px] font-normal text-gray-100">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </motion.div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-1/2 p-6 sm:p-8 bg-white rounded-b-lg md:rounded-b-none md:rounded-r-lg">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              >
                <h3 className="text-[16px] font-bold text-[#27408F] mb-6">Send Us a Message</h3>
                {submitStatus === "success" && (
                  <p className="text-green-600 mb-4">Message sent successfully! ✅</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 mb-4">Failed to send message. Please try again. ❌</p>
                )}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-[14px] font-normal placeholder-gray-500 transition-all duration-300"
                        required
                        aria-label="Your Name"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-[14px] font-normal placeholder-gray-500 transition-all duration-300"
                        required
                        aria-label="Your Email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-[14px] font-normal placeholder-gray-500 transition-all duration-300"
                        aria-label="Company Name"
                      />
                    </div>
                    <div className="flex-1">
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-[14px] font-normal transition-all duration-300"
                        aria-label="I'm interested in"
                      >
                        <option value="" disabled hidden>
                          I’m interested in
                        </option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="training-programs">Training Programs</option>
                        <option value="business-solutions">Business Solutions</option>
                        <option value="partnership">Partnership Opportunities</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message *"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#7030A0] focus:ring-2 focus:ring-[#7030A0] outline-none text-gray-700 text-[14px] font-normal resize-none placeholder-gray-500 transition-all duration-300"
                      required
                      aria-label="Your Message"
                    />
                    <input
                      type="hidden"
                      name="submitted_on"
                      value={new Date().toLocaleString()}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={{ scale: isSending ? 1 : 1.05, boxShadow: isSending ? "none" : "0 0 15px rgba(26, 248, 102, 0.5)" }}
                    whileTap={{ scale: isSending ? 1 : 0.95 }}
                    className={`w-full px-8 py-3 rounded-lg font-bold text-[14px] transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#7030A0] focus:ring-offset-2 ${
                      isSending
                        ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                        : "bg-[#7030A0] text-white hover:text-[#1AF866] hover:bg-[#5a2480]"
                    }`}
                    aria-label="Send Message"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;