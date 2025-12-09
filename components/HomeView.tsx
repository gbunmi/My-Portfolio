import React from 'react';
import GridItem from './GridItem';

const ASSETS = {
  featuredWork: "https://i.ibb.co/whCkWQLR/34da72d8-4bcd-41b5-b1fa-4cc8a3a682a5-1.png",
  employment: "https://i.ibb.co/5XmF30xW/Chat-GPT-Image-Jun-14-2025-09-39-45-PM-2.png",
  resume: "https://i.ibb.co/Z1XXJsD0/0673400d-8c0f-4cb8-8eb7-78cdb94d73b5-1.png",
  contact: "https://i.ibb.co/Wp7Q3Bn7/Chat-GPT-Image-Jun-14-2025-09-43-52-PM-2.png",
  art: "https://i.ibb.co/67knWy9j/Chat-GPT-Image-Jun-14-2025-09-31-17-PM-1.png",
  music: "https://i.ibb.co/5hmYxq4V/Chat-GPT-Image-Jun-14-2025-09-17-57-PM-1.png",
  topHero: "https://raw.githubusercontent.com/gbunmi/images/main/Feet.png",
  bottomHero: "https://raw.githubusercontent.com/gbunmi/images/main/Body.png"
};

interface HomeViewProps {
  onNavigate: (view: 'home' | 'employment' | 'featured') => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full md:h-full md:overflow-hidden flex flex-col md:grid md:grid-cols-[240px_1fr_240px] md:grid-rows-3 gap-px bg-gray-300">
        
      {/* --- Center Column (Unified Wrapper to remove borders) --- */}
      <div className="w-full md:w-auto md:col-span-1 md:col-start-2 md:row-start-1 md:row-span-3 bg-[#F8F5F0] flex flex-col md:h-full">
        
        {/* Top Hero Section */}
        <div className="hidden md:flex w-full md:flex-1 items-start justify-center overflow-hidden">
          <img 
            src={ASSETS.topHero} 
            alt="Top Hero" 
            className="w-[30%] max-h-full object-contain object-top select-none pointer-events-none" 
          />
        </div>

        {/* Hero Content Section */}
        <div className="w-full shrink-0 relative min-h-[55vh] md:min-h-0 md:flex-1 flex flex-col items-center justify-center overflow-hidden">
          {/* Center Content Group */}
          <div className="flex flex-col items-center justify-center w-full z-10 px-6">
              {/* Tag */}
              <div className="bg-[#041727] text-white mb-3 md:mb-4">
                <span className="text-sm md:text-base font-bold tracking-tight font-mono">product designer.</span>
              </div>

              {/* Description Text */}
              <div className="text-center">
                <p className="text-sm md:text-lg font-medium leading-[20px] tracking-[-0.04em] text-[#041727]">
                  Hi, I’m Bunmi, a designer with a rich
                  <br className="hidden md:block" />
                  experience designing functional products
                  <br className="hidden md:block" />
                  across platforms and industries.
                </p>
              </div>
          </div>
        </div>

        {/* Bottom Hero Section */}
        <div className="hidden md:flex w-full md:flex-1 items-end justify-center overflow-hidden">
          <img 
            src={ASSETS.bottomHero} 
            alt="Bottom Hero" 
            className="w-[30%] max-h-full object-contain object-bottom select-none pointer-events-none" 
          />
        </div>
      </div>

      {/* --- Grid Items Wrapper --- */}
      <div className="grid grid-cols-2 w-full md:contents shrink-0 gap-px bg-gray-300">
        
        {/* Left Column Items */}
        <div className="aspect-square md:aspect-auto md:h-full w-full md:w-auto md:col-span-1 md:col-start-1 md:row-start-1 bg-[#F8F5F0]">
            <GridItem 
            imageSrc={ASSETS.featuredWork}
            label="featured" 
            subLabel="work"
            link="/featuredwork"
            onClick={(e) => { e?.preventDefault(); onNavigate('featured'); }}
          />
        </div>
        <div className="aspect-square md:aspect-auto md:h-full w-full md:w-auto md:col-span-1 md:col-start-1 md:row-start-2 bg-[#F8F5F0]">
          <GridItem 
            imageSrc={ASSETS.employment}
            label="employment" 
            subLabel="history"
            link="/employment-history"
            onClick={(e) => { e?.preventDefault(); onNavigate('employment'); }}
          />
        </div>
        <div className="aspect-square md:aspect-auto md:h-full w-full md:w-auto md:col-span-1 md:col-start-1 md:row-start-3 bg-[#F8F5F0]">
          <GridItem 
            imageSrc={ASSETS.resume}
            label="my resume.pdf" 
            link="https://drive.google.com/file/d/1AvDQEq6bhB2J_rt_u32-i-Q_jvwsTZoL/view?usp=sharing"
            external
          />
        </div>

        {/* Right Column Items */}
        <div className="aspect-square md:aspect-auto md:h-full w-full md:w-auto md:col-span-1 md:col-start-3 md:row-start-1 bg-[#F8F5F0]">
          <GridItem 
            imageSrc={ASSETS.contact}
            label="contact" 
            link="mailto:g.bunmi1@gmail.com"
            external
          />
        </div>
        <div className="aspect-square md:aspect-auto md:h-full w-full md:w-auto md:col-span-1 md:col-start-3 md:row-start-2 bg-[#F8F5F0]">
          <GridItem 
            imageSrc={ASSETS.art}
            label="art" 
            link="https://www.artstation.com/g-bunmi"
            external
          />
        </div>
        <div className="aspect-square md:aspect-auto md:h-full w-full md:w-auto md:col-span-1 md:col-start-3 md:row-start-3 bg-[#F8F5F0]">
            <GridItem 
            imageSrc={ASSETS.music}
            label="music" 
            link="https://open.spotify.com/artist/1qktTPa4kJCpNl2hIr8mTP"
            external
          />
        </div>

      </div>
    </div>
  );
};

export default HomeView;