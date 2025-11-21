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

    <p className="text-sm md:text-base leading-relaxed font-medium text-[#041727] max-w-prose tracking-[-0.04em]">
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
                description="Medik is a healthtech platform designed to make healthcare more accessible in Nigeria. Through a mobile app, users can book consultations, purchase medication, order medical tests, and access urgent or mental health services—all in one place. I led the product design from research through execution."
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
                    Nov 2021 - Present
                  </span>
                </div>
                <p className="text-sm md:text-base leading-relaxed font-medium text-[#041727] max-w-prose tracking-[-0.04em]">
                  Medik is a healthtech platform designed to make healthcare more accessible in Nigeria. Through a mobile app, users can book consultations, purchase medication, order medical tests, and access urgent or mental health services—all in one place. I led the product design from research through execution.
                </p>
              </div>

              {/* Role 2 */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#041727] text-white text-xs md:text-sm font-bold px-1 py-0.5 tracking-[-0.04em]">
                    Oct 2021 - Jan 2022
                  </span>
                </div>
                <p className="text-sm md:text-base leading-relaxed font-medium text-[#041727] max-w-prose tracking-[-0.04em]">
                  Medik is a healthtech platform designed to make healthcare more accessible in Nigeria. Through a mobile app, users can book consultations, purchase medication, order medical tests, and access urgent or mental health services—all in one place. I led the product design from research through execution.
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
                    Oct 2021 - Jan 2022
                  </span>
                </div>
                <p className="text-sm md:text-base leading-relaxed font-medium text-[#041727] max-w-prose tracking-[-0.04em]">
                  Medik is a healthtech platform designed to make healthcare more accessible in Nigeria. Through a mobile app, users can book consultations, purchase medication, order medical tests, and access urgent or mental health services—all in one place. I led the product design from research through execution.
                </p>
              </div>

              {/* Role 2 */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#041727] text-white text-xs md:text-sm font-bold px-1 py-0.5 tracking-[-0.04em]">
                    July 2022 - Feb 2023
                  </span>
                </div>
                <p className="text-sm md:text-base leading-relaxed font-medium text-[#041727] max-w-prose tracking-[-0.04em]">
                  Medik is a healthtech platform designed to make healthcare more accessible in Nigeria. Through a mobile app, users can book consultations, purchase medication, order medical tests, and access urgent or mental health services—all in one place. I led the product design from research through execution.
                </p>
              </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default EmploymentView;