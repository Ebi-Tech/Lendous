"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SlideInSection from "../../../components/SlideInSection";

const TrainingProgramsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Programs");
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  const tabs = ["All Programs", "Leadership", "Sales & Marketing", "Digital Transformation", "Operations"];

  const trainingPrograms = [
    // Leadership Programs
    {
      id: 1,
      title: 'Executive Leadership Masterclass',
      category: 'Leadership',
      duration: '3 days',
      format: 'In-person',
      level: 'Advanced',
      image: '/images/leadership-masterclass.jpg',
      description: 'An intensive program designed for business leaders to enhance strategic decision-making, team leadership, and organizational management skills.',
      benefits: [
        'Develop a strategic leadership mindset',
        'Enhance decision-making capabilities',
        'Build high-performing teams',
        'Navigate organizational complexity'
      ]
    },
    {
      id: 2,
      title: 'Women in Leadership',
      category: 'Leadership',
      duration: '2 days',
      format: 'Hybrid',
      level: 'Intermediate',
      image: '/images/women-leadership.jpg',
      description: 'Empowering female leaders with strategies to overcome unique challenges and maximize their leadership impact in African organizations.',
      benefits: [
        'Navigate gender-specific leadership challenges',
        'Build effective leadership presence',
        'Develop strategic networking skills',
        'Create sustainable work-life integration'
      ]
    },
    {
      id: 3,
      title: 'Emerging Leaders Program',
      category: 'Leadership',
      duration: '4 days',
      format: 'In-person',
      level: 'Beginner',
      image: '/images/emerging-leaders.jpg',
      description: 'Prepare high-potential individuals for their first leadership positions with foundational skills and confidence-building experiences.',
      benefits: [
        'Transition successfully to leadership roles',
        'Develop essential people management skills',
        'Build self-awareness and emotional intelligence',
        'Create effective leadership communication strategies'
      ]
    },

    // Sales & Marketing Programs
    {
      id: 4,
      title: 'Sales Mastery for African Markets',
      category: 'Sales & Marketing',
      duration: '2 days',
      format: 'In-person',
      level: 'All levels',
      image: '/images/sales-mastery.jpg',
      description: 'A comprehensive program focused on developing effective sales strategies and techniques tailored for success in diverse African markets.',
      benefits: [
        'Build market-specific sales strategies',
        'Enhance negotiation techniques',
        'Develop customer relationship management skills',
        'Optimize sales performance metrics'
      ]
    },
    {
      id: 5,
      title: 'Digital Marketing Excellence',
      category: 'Sales & Marketing',
      duration: '3 days',
      format: 'Virtual',
      level: 'Intermediate',
      image: '/images/digital-marketing.jpg',
      description: 'Master contemporary digital marketing strategies to effectively reach and engage target audiences across African markets.',
      benefits: [
        'Create effective social media campaigns',
        'Develop data-driven marketing strategies',
        'Optimize digital advertising spend',
        'Build engaging content marketing approaches'
      ]
    },
    {
      id: 6,
      title: 'Customer Experience Design',
      category: 'Sales & Marketing',
      duration: '2 days',
      format: 'Hybrid',
      level: 'Advanced',
      image: '/images/customer-experience.jpg',
      description: 'Design exceptional customer experiences that build loyalty and drive business growth in competitive markets.',
      benefits: [
        'Map comprehensive customer journeys',
        'Identify and eliminate pain points',
        'Implement customer feedback systems',
        'Measure and improve customer satisfaction'
      ]
    },

    // Digital Transformation Programs
    {
      id: 7,
      title: 'Digital Transformation Strategy',
      category: 'Digital Transformation',
      duration: '2 days',
      format: 'Hybrid',
      level: 'Intermediate',
      image: '/images/digital-transformation.jpg',
      description: 'Learn how to lead successful digital transformation initiatives in your business, adapting to the unique challenges of African markets.',
      benefits: [
        'Assess digital readiness',
        'Develop transformation roadmaps',
        'Align technology with business objectives',
        'Manage change and adoption challenges'
      ]
    },
    {
      id: 8,
      title: 'Data Analytics for Business',
      category: 'Digital Transformation',
      duration: '3 days',
      format: 'Virtual',
      level: 'Intermediate',
      image: '/images/data-analytics.jpg',
      description: 'Leverage data analytics to drive business decisions and create competitive advantage in rapidly evolving markets.',
      benefits: [
        'Implement data-driven decision frameworks',
        'Develop basic analytics capabilities',
        'Interpret business intelligence effectively',
        'Create actionable insights from data'
      ]
    },
    {
      id: 9,
      title: 'E-Commerce Fundamentals',
      category: 'Digital Transformation',
      duration: '2 days',
      format: 'Hybrid',
      level: 'Beginner',
      image: '/images/ecommerce.jpg',
      description: 'Build effective online selling capabilities for your business, designed specifically for the challenges and opportunities in African markets.',
      benefits: [
        'Set up effective e-commerce platforms',
        'Optimize digital payment solutions',
        'Develop logistics and fulfillment strategies',
        'Create digital customer acquisition tactics'
      ]
    },

    // Operations Programs
    {
      id: 10,
      title: 'Operational Excellence',
      category: 'Operations',
      duration: '3 days',
      format: 'Hybrid',
      level: 'Intermediate',
      image: '/images/operational-excellence.jpg',
      description: 'Master operational best practices to optimize efficiency and productivity in your business operations.',
      benefits: [
        'Streamline business processes',
        'Implement effective systems',
        'Reduce operational costs',
        'Improve quality management'
      ]
    },
    {
      id: 11,
      title: 'Supply Chain Management',
      category: 'Operations',
      duration: '3 days',
      format: 'In-person',
      level: 'Advanced',
      image: '/images/supply-chain.jpg',
      description: 'Optimize your supply chain operations to overcome logistical challenges specific to African business environments.',
      benefits: [
        'Design resilient supply networks',
        'Improve inventory management',
        'Optimize sourcing strategies',
        'Enhance logistics performance'
      ]
    },
    {
      id: 12,
      title: 'Project Management Essentials',
      category: 'Operations',
      duration: '4 days',
      format: 'Hybrid',
      level: 'All levels',
      image: '/images/project-management.jpg',
      description: 'Develop comprehensive project management skills to deliver initiatives on time, within scope and budget.',
      benefits: [
        'Apply project management methodologies',
        'Develop effective project planning skills',
        'Manage stakeholders and resources',
        'Monitor and control project execution'
      ]
    }
  ];

  // Filter programs based on active tab
  const filteredPrograms = activeTab === "All Programs"
    ? trainingPrograms
    : trainingPrograms.filter(program => program.category === activeTab);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  function scrollToSection(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div id="training-programs" className="bg-gray-100 font-poppins">
      {/* Wrapper for sections with scroll snapping */}
      <div className="snap-y snap-mandatory">
        {/* Hero Section */}
        <div
          id="hero-section"
          className="relative flex flex-col justify-center overflow-hidden  "
          style={{ minHeight: '100vh' }}
        >
          <div className="absolute inset-0 z-0">
            <div className="h-full bg-gray-100"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-85 z-1 backdrop-blur-sm"></div>
          </div>
          <div className="mt-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-10 sm:mb-12">
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-[36px] sm:text-[40px] font-extrabold text-black">
                  Trainings
                </h2>
                <p className="mt-4 text-[16px] sm:text-[18px] font-medium italic text-gray-800 max-w-4xl mx-auto md:mx-0">
                  From Leadership Development to Operational Excellence, our programs address the most
                  critical skill gaps in African SMEs, including those yet to be identified.
                </p>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <div>
                  <Image
                    src="/hero-bg3.jpg"
                    alt="Training Programs Image"
                    width={600}
                    height={400}
                    className="object-cover rounded-lg shadow-2xl w-full h-auto max-h-[250px] sm:max-h-[1000px] md:max-h-[350px] lg:max-h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Tabs and Training Cards Section */}
        <div
          id="tabs-section"
          className="relative flex flex-col overflow-hidden  "
          style={{ minHeight: '700px' }}
        >
          <div className="absolute inset-0 z-0">
            <div className="h-full bg-gray-100"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 opacity-85 z-1 backdrop-blur-sm"></div>
          </div>
          <SlideInSection
            direction="right"
            className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto"
          >
            {/* Tabs */}
            <div className="mt-10 flex flex-wrap justify-center gap-2 mb-12">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ delay: 0.1 * (index + 1) }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md font-semibold text-[16px] ${
                    activeTab === tab
                      ? "bg-purple-700 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            {/* Training Cards or No Results */}
            {filteredPrograms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.1 * (index + 1) }}
                    whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                    className="bg-white rounded-lg overflow-hidden shadow-md"
                  >
                    {/* Program Image */}
                    <div className="h-56 relative">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        style={{ objectFit: "cover" }}
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white text-gray-700 text-[14px] font-medium">
                          {program.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-[24px] text-gray-800">{program.title}</h3>

                      {/* Program Details */}
                      <div className="mt-3 flex flex-wrap gap-3">
                        <span className="inline-flex items-center text-[14px] text-purple-600">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {program.duration}
                        </span>
                        <span className="inline-flex items-center text-[14px] text-purple-600">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {program.format}
                        </span>
                        <span className="inline-flex items-center text-[14px] text-orange-500">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {program.level}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-[16px] text-gray-600">
                        {program.description}
                      </p>

                      {/* Benefits */}
                      <div className="mt-6">
                        <p className="font-semibold text-gray-700 text-[16px]">Key Benefits:</p>
                        <ul className="mt-2 space-y-2">
                          {program.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-[16px] text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-6">
                        <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-[16px] rounded transition duration-300">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <p className="text-[16px] sm:text-[18px] font-medium italic text-gray-600">No programs available in this category at the moment.</p>
                <button
                  onClick={() => setActiveTab("All Programs")}
                  className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 font-semibold text-[16px]"
                >
                  View All Programs
                </button>
              </div>
            )}
          </SlideInSection>
        </div>
      </div>
      {/* Footer Banner */}
      <SlideInSection
        direction="down"
        className="bg-[#7030A0] text-white py-12 sm:py-16  "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h2 className="mt-10 text-[36px] sm:text-[40px] font-extrabold">Ready to Grow Your Business?</h2>
            <p className="mt-2 text-[16px] sm:text-[18px] font-medium italic">
              Let's discuss how our STARS approach can transform your business.
            </p>
          </div>
          <button
            onClick={() => scrollToSection("consultation")}
            className="px-8 py-3 bg-white text-[#7030A0] rounded-lg font-semibold text-[16px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Get in Touch
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </SlideInSection>
    </div>
  );
};

export default TrainingProgramsSection;
