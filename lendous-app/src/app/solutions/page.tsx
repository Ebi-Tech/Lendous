"use client"

import { redirect } from 'next/navigation';

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[32px] font-extrabold text-[#27408F] leading-tight break-words">
          Solutions
        </h2>
        <p className="text-[24px] mt-4 text-[#27408F] font-light break-words">
          Select service(s) to explore our range and pick the preferred. Get a free consultation to ensure your selection solves current challenges. Receive an online quote tailored to your needs. Your solution gets deployed on record time with ongoing support for the next steps.
        </p>
      </div>
    </section>
  );
};

// Redirect /solutions to /#solutions
export default function SolutionsPage() {
  redirect('/#solutions');
}