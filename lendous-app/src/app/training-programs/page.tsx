import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';

export const TrainingProgramsSection: React.FC = () => {
  const trainingPrograms = [
    {
      title: 'Senior Leaders Training',
      description: 'Advanced leadership skills for executives to drive organizational success.',
    },
    {
      title: 'Middle Managers Training',
      description: 'Practical training to enhance management and team leadership capabilities.',
    },
    {
      title: 'New Managers Training',
      description: 'Foundational skills for new managers to transition into leadership roles.',
    },
    {
      title: 'Operational Teams Training',
      description: 'Specialized training in HR, sales, systems, processes, and customer service.',
    },
  ];

  return (
    <section id="training-programs" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#E2D8EC]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-extrabold text-[#27408F] leading-tight">
          Training Programs
        </h2>

        {/* Subtitle */}
        <p className="mt-8 text-[24px] text-gray-700 font-light">
          Empower your team with our tailored training programs designed for African SMEs.
        </p>

        {/* Training Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(112, 48, 160, 0.4)' }}
              className="p-6 bg-[#FFFFFF] rounded-lg shadow-lg border border-gray-100 hover:border-[#1AF866] transition-all duration-300 text-center"
            >
              <h3 className="text-[20px] font-semibold text-[#27408F]">{program.title}</h3>
              <p className="mt-4 text-[16px] text-gray-700">{program.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 sm:mt-16">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#FFFFFF', color: '#7030A0', boxShadow: '0 0 15px rgba(26, 248, 102, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#1AF866] text-[#27408F] rounded-lg font-semibold transition duration-300 shadow-lg text-[16px]"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

// Redirect /training-programs to /#training-programs
export default function TrainingProgramsPage() {
  redirect('/#training-programs');
}