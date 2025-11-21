import React, { useState } from 'react';

const PROJECTS = [
  "Medik",
  "Talestream",
  "Euterpe",
  "MagicCap",
  "Penuel Samuel",
  "Chinwe Ekeke",
  "Medsaber",
  "The Connected Awards"
];

const FeaturedWorkView: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState("Medik");

  return (
    <div className="h-full w-full bg-[#f4f4f0] flex flex-col md:flex-row overflow-hidden">
      
      {/* Left Sidebar - Project List */}
      <div 
        className="w-full md:w-[300px] shrink-0 md:h-full overflow-y-auto border-b md:border-b-0 md:border-r border-gray-300 bg-[#f4f4f0] [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {PROJECTS.map((project) => {
          const isSelected = selectedProject === project;
          return (
            <button
              key={project}
              onClick={() => setSelectedProject(project)}
              className={`
                w-full text-left px-6 py-6 md:px-8 md:py-6 border-b border-gray-300 
                font-bold text-sm md:text-base tracking-[-0.04em] transition-colors
                ${isSelected 
                  ? 'bg-[#041727] text-white' 
                  : 'bg-[#f4f4f0] text-[#041727] hover:bg-[#ecece8]'}
              `}
            >
              {project}
            </button>
          );
        })}
        {/* Fill remaining height on desktop to avoid empty space looking weird */}
        <div className="hidden md:block h-full bg-[#f4f4f0]" />
      </div>

      {/* Right Content - Project Details */}
      <div className="flex-1 h-full overflow-y-auto bg-[#f4f4f0] relative">
        
        {/* Content Container - Centered and Full Width with MASSIVE padding */}
        <div className="px-6 py-8 md:px-48 xl:px-80 md:py-16 w-full mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 md:mb-12 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-[#041727] tracking-[-0.04em]">
              {selectedProject}
            </h1>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a href="#" className="bg-[#041727] text-white px-3 py-1 text-xs md:text-sm font-bold tracking-[-0.04em] hover:opacity-80 transition-opacity">
                Visit Site ↗
              </a>
              <a href="#" className="bg-[#041727] text-white px-3 py-1 text-xs md:text-sm font-bold tracking-[-0.04em] hover:opacity-80 transition-opacity">
                Download app ↗
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-[#041727] font-medium leading-relaxed tracking-[-0.04em] mb-12 w-full text-justify">
            Medik is a healthtech platform designed to make healthcare more accessible 
            in Nigeria. Through a mobile app, users can book consultations, purchase 
            medication, order medical tests, and access urgent or mental health services
            —all in one place. I led the product design from research through execution.
          </p>

          {/* Image Placeholder */}
          <div className="w-full aspect-video bg-[#ecece8] mb-12"></div>

          {/* Overview Section */}
          <div className="mb-12 w-full">
            <span className="inline-block bg-[#041727] text-white px-1 py-0.5 text-sm font-bold tracking-[-0.04em] mb-4">
              Overview
            </span>
            <p className="text-sm md:text-base text-[#041727] font-medium leading-relaxed tracking-[-0.04em] w-full text-justify">
              Medik is a healthtech platform designed to make healthcare more accessible 
              in Nigeria. Through a mobile app, users can book consultations, purchase 
              medication, order medical tests, and access urgent or mental health services
              —all in one place. I led the product design from research through execution.
            </p>
          </div>

           {/* Secondary Overview Section (matching reference repeating content) */}
           <div className="mb-12 w-full">
            <span className="inline-block bg-[#041727] text-white px-1 py-0.5 text-sm font-bold tracking-[-0.04em] mb-4">
              Overview
            </span>
            <p className="text-sm md:text-base text-[#041727] font-medium leading-relaxed tracking-[-0.04em] w-full text-justify">
              Medik is a healthtech platform designed to make healthcare more accessible 
              in Nigeria. Through a mobile app, users can book consultations, purchase 
              medication, order medical tests, and access urgent or mental health services
              —all in one place. I led the product design from research through execution.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkView;