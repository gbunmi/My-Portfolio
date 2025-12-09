import React from 'react';

// Interface for a single role's details
interface JobRoleProps {
  location?: string;
  dates: string;
  description: string;
}

// Component for a single role entry
const JobRole: React.FC<JobRoleProps> = ({ location, dates, description }) => (
  <div className="mb-6 last:mb-0">
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

// Unified Component for Job Blocks (supports both single props or roles array)
interface JobBlockProps {
  title: string;
  location?: string;
  dates?: string;
  description?: string;
  roles?: JobRoleProps[];
}

const JobBlock: React.FC<JobBlockProps> = ({ title, location, dates, description, roles }) => (
  <div>
    <h3 className="font-bold text-lg md:text-xl mb-3 tracking-[-0.04em] text-[#041727]">{title}</h3>
    {roles && roles.length > 0 ? (
      roles.map((role, index) => (
        <JobRole key={index} {...role} />
      ))
    ) : (
      // Fallback to single props if roles array isn't provided
      <JobRole location={location} dates={dates || ''} description={description || ''} />
    )}
  </div>
);

const EmploymentView: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#F8F5F0] overflow-y-auto">
      {/* Inner wrapper must be relative and min-h-full to capture full scroll height */}
      <div className="min-h-full relative md:grid md:grid-cols-2">
        
         {/* Left Column (Sticky Image) */}
         <div className="hidden md:flex border-r border-[#CEC8BD] sticky top-0 h-[calc(100vh-3.5rem)] items-center justify-center bg-[#F8F5F0]">
            <img 
              src="https://i.ibb.co/7tvgYrB4/Generated-Image-November-24-2025-11-12-AM-1.png" 
              alt="Cat" 
              className="w-[70%] h-[70%] object-cover"
            />
         </div>
         
         {/* Right Column (Content) */}
         <div className="flex flex-col z-10">
            
            {/* Heyfood (YC W21) */}
            <div className="border-b border-[#CEC8BD] p-6 md:px-5 md:py-12">
              <JobBlock 
                title="Heyfood (YC W21)"
                location="Ibadan, Nigeria"
                dates="Nov 2021 - Present"
                description="I led design across all customer, vendor, rider, and internal tools, improving overall consistency and reducing design-related rework. I shipped features that made ordering faster and improved store discovery, and I designed referral and shareable-order flows that strengthened organic growth. I also built B2B onboarding tools that made setup smoother for restaurant partners. Through ongoing research and rapid prototyping, I helped the team uncover pain points, refine key flows, and speed up iteration. I redesigned internal dashboards to help the operations team work far more efficiently, built a new brand design system, managed the design team, and led the consumer app redesign that helped scale daily order volume significantly."
              />
            </div>

            {/* Proficio Technologies */}
            <div className="border-b border-[#CEC8BD] p-6 md:px-5 md:py-12">
              <JobBlock 
                title="Proficio Technologies"
                location="Lagos, Nigeria"
                dates="Jul 2025 – Sep 2025"
                description="I designed the entire client-side experience from the ground up, covering how clients search for freelancers, review service offerings, and hire talent. I shaped the full journey end to end, including service discovery, project brief creation, communication flows, and payments. Working closely with product and engineering, I mapped requirements, clarified edge cases, and ensured each step felt intuitive for first-time users."
              />
            </div>

            {/* Infiuss Health (YC S21) */}
            <div className="border-b border-[#CEC8BD] p-6 md:px-5 md:py-12">
              <JobBlock 
                title="Infiuss Health (YC S21)"
                roles={[
                  {
                    location: "New York, USA",
                    dates: "Feb 2025 - Apr 2025",
                    description: "I led a full redesign of the medical research platform, making researcher workflows more intuitive and faster to complete. By speaking with dozens of patients and physicians, I surfaced workflow challenges that guided product decisions. I ran iterative usability tests that sharply improved the platform’s overall ease of use. Working closely with engineers and stakeholders helped speed up feature delivery and reduce handoff friction."
                  },
                  {
                    dates: "May 2024 - Jun 2024",
                    description: "I designed a mobile app that supported patient-to-patient interaction and strengthened early community engagement. I created detailed prototypes for investor pitches, improving how the team communicated the product vision. I also produced onboarding walkthrough videos that reduced user confusion. Beyond that, I refined the design language and UX of the flagship product, making the interface more consistent and lowering navigation issues. I improved onboarding for both patients and researchers, making registration and setup clearer and quicker."
                  }
                ]}
              />
            </div>

            {/* Blusalt Financial Services */}
            <div className="border-b border-[#CEC8BD] p-6 md:px-5 md:py-12">
              <JobBlock 
                title="Blusalt Financial Services"
                roles={[
                  {
                    location: "Lagos, Nigeria",
                    dates: "Jul 2022 - Mar 2023",
                    description: "I designed the Terminal Management System for Blusalt’s POS payment devices, making it easier for agents and internal teams to set up, configure, and manage terminals. I mapped the workflows end to end and delivered high-fidelity interfaces that helped the support team resolve issues more quickly. Close collaboration with engineers and product managers kept requirements tight and helped shorten design cycles."
                  },
                  {
                    dates: "Oct 2021 - Jan 2022",
                    description: "I worked across several B2B and B2C fintech products, contributing to features that made user tasks easier to complete. By collaborating closely with the design team, I helped improve consistency and shorten review cycles. I ran user tests and iterated on multiple product lines, significantly improving overall usability. I also led research efforts for new products, gathering insights that shaped key features and strengthened early adoption."
                  }
                ]}
              />
            </div>

         </div>
      </div>
    </div>
  );
};

export default EmploymentView;