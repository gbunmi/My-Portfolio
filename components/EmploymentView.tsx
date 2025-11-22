import React from 'react';

const JobBlock: React.FC<{
  title: string;
  location?: string;
  dates: string;
  description: string;
}> = ({ title, location, dates, description }) => (
  <div>
    <h3 className="font-bold text-lg md:text-xl mb-3 tracking-[-0.04em] text-[#041727]">{title}</h3>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {location && (
        <span className="bg-[#041727] text-white text-xs md:text-sm font-bold px-1 py-0.5 tracking-[-0.04em]">
          {location}
        </span>
      )}
      <span className="bg-[#041727] text-white text-xs md:text-sm font-bold px-1 py-0.5 tracking-[-0.04em]">
        {dates}
      </span>
    </div>

    <p className="text-sm md:text-base leading-relaxed font-medium text-[#041727] tracking-[-0.04em]">
      {description}
    </p>
  </div>
);

const EmploymentView: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#f4f4f0] overflow-y-auto">
      {/* Inner wrapper must be relative and min-h-full to capture full scroll height */}
      <div className="min-h-full relative md:grid md:grid-cols-2">
        
         {/* Left Column (Empty) - Uses border-r to match site border weight perfectly */}
         <div className="hidden md:block border-r border-gray-300" />
         
         {/* Right Column (Content) */}
         <div className="flex flex-col z-10">
            
            {/* Heyfood */}
            <div className="border-b border-gray-300 p-6 md:p-12">
              <JobBlock 
                title="Heyfood"
                location="Ibadan, Nigeria"
                dates="Nov 2021 - Present"
                description="I led design across all customer, vendor, rider, and internal tools, improving overall consistency and reducing design-related rework. I shipped features that made ordering faster and improved store discovery, and I designed referral and shareable-order flows that strengthened organic growth. I also built B2B onboarding tools that made setup smoother for restaurant partners. Through ongoing research and rapid prototyping, I helped the team uncover pain points, refine key flows, and speed up iteration. I redesigned internal dashboards to help the operations team work far more efficiently, built a new brand design system, managed the design team, and led the consumer app redesign that helped scale daily order volume significantly.."
              />
            </div>

            {/* Infiuss Health */}
            <div className="border-b border-gray-300 p-6 md:p-12">
              <h3 className="font-bold text-lg md:text-xl mb-3 tracking-[-0.04em] text-[#041727]">Infiuss Health</h3>
              
              {/* Role 1 */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#041727] text-white text-xs md:text-sm font-bold px-1 py-0.5 tracking-[-0.04em]">
                    New York, USA
                  </span>
                  <span className="bg-[#041727] text-white text-xs md:text-sm font-bold px-1 py-0.5 tracking-[-0.04em]">
                    Feb 2025 - Apr 2025
                  </span>
                </div>
                <p className="text-sm md:text-base leading-relaxed font-medium text-[#041727] tracking-[-0.04em]">
                  I led a full redesign of the medical research platform, making researcher workflows more intuitive and faster to complete. By speaking with dozens of patients and physicians, I surfaced workflow challenges that guided product decisions. I ran iterative usability tests that sharply improved the platform’s overall ease of use. Working closely with engineers and stakeholders helped speed up feature delivery and reduce handoff friction.
                </p>
              </div>

              {/* Role 2 */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#041727] text-white text-xs md:text-sm font-bold px-1 py-0.5 tracking-[-0.04em]">
                    May 2024 - Jun 2024
                  </span>
                </div>
                <p className="text-sm md:text-base leading-relaxed font-medium text-[#041727] tracking-[-0.04em]">
                  I designed a mobile app that supported patient-to-patient interaction and strengthened early community engagement. I created detailed prototypes for investor pitches, improving how the team communicated the product vision. I also produced onboarding walkthrough videos that reduced user confusion. Beyond that, I refined the design language and UX of the flagship product, making the interface more consistent and lowering navigation issues. I improved onboarding for both patients and researchers, making registration and setup clearer and quicker.
                </p>
              </div>
            </div>

            {/* Blusalt Financial Services */}
            <div className="border-b border-gray-300 p-6 md:p-12">
              <h3 className="font-bold text-lg md:text-xl mb-3 tracking-[-0.04em] text-[#041727]">Blusalt Financial Services</h3>
              
              {/* Role 1 */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#041727] text-white text-xs md:text-sm font-bold px-1 py-0.5 tracking-[-0.04em]">
                    Jul 2022 - Mar 2023
                  </span>
                </div>
                <p className="text-sm md:text-base leading-relaxed font-medium text-[#041727] tracking-[-0.04em]">
                  I designed the Terminal Management System for Blusalt’s POS payment devices, making it easier for agents and internal teams to set up, configure, and manage terminals. I mapped the workflows end to end and delivered high-fidelity interfaces that helped the support team resolve issues more quickly. Close collaboration with engineers and product managers kept requirements tight and helped shorten design cycles.
                </p>
              </div>

              {/* Role 2 */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#041727] text-white text-xs md:text-sm font-bold px-1 py-0.5 tracking-[-0.04em]">
                    Oct 2021 - Jan 2022
                  </span>
                </div>
                <p className="text-sm md:text-base leading-relaxed font-medium text-[#041727] tracking-[-0.04em]">
                  I worked across several B2B and B2C fintech products, contributing to features that made user tasks easier to complete. By collaborating closely with the design team, I helped improve consistency and shorten review cycles. I ran user tests and iterated on multiple product lines, significantly improving overall usability. I also led research efforts for new products, gathering insights that shaped key features and strengthened early adoption.
                </p>
              </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default EmploymentView;