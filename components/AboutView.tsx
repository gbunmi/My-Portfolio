import React from 'react';

interface AboutSection {
  tag: string;
  body: string;
  image: string;
  imageAlt: string;
}

const ABOUT_SECTIONS: AboutSection[] = [
  {
    tag: "the man",
    body: "I spend most of my days designing products, but the things that shape me happen outside design files. I’m curious by nature, always exploring something new, taking things apart, and figuring out how they work.",
    image: "https://raw.githubusercontent.com/gbunmi/images/main/Compass.png",
    imageAlt: "Compass"
  },
  {
    tag: "the designer",
    body: "I’m a Product Designer with 5+ years of experience designing products across fintech, healthcare, AI, marketplaces, web3, logistics, and consumer technology. I led design at Heyfood (YC W21) for 4 years, working across the customer, rider, vendor, and operations experiences as the company grew.",
    image: "https://raw.githubusercontent.com/gbunmi/images/main/Cube%20(1).png",
    imageAlt: "Rubik's Cube"
  },
  {
    tag: "the builder",
    body: "Design is where most of my projects begin, but rarely where they end. With AI tools and a growing collection of coding skills, I’ve become increasingly comfortable taking an idea from Figma to something people can actually use.",
    image: "https://raw.githubusercontent.com/gbunmi/images/main/Monitor.png",
    imageAlt: "Retro Computer Monitor"
  },
  {
    tag: "the artist",
    body: "Outside of product design, I spend time making digital paintings and producing music. Sometimes I’m experimenting with colors and compositions, other times I’m layering sounds and tweaking tracks that were supposed to be finished hours ago.",
    image: "https://raw.githubusercontent.com/gbunmi/images/main/Flower%20(1).png",
    imageAlt: "Origami Sunflower"
  }
];

interface AboutViewProps {
  onNavigate?: (view: 'home' | 'employment' | 'featured' | 'about') => void;
}

const AboutView: React.FC<AboutViewProps> = () => {
  return (
    <div className="relative h-full w-full bg-[#F8F5F0] overflow-hidden select-none">
      
      {/* Desktop Layout: Fits viewport exactly (100% height, 0 scroll) with 1:1 square icon cells */}
      <div className="hidden lg:flex h-full w-full bg-[#F8F5F0]">
        
        {/* Column 1: Left empty spacer with right vertical border */}
        <div className="flex-1 min-w-[40px] bg-[#F8F5F0] border-r border-[#DEDBD6] h-full" />

        {/* Column 2: Text content column - 4 equal compact rows with tight spacing */}
        <div className="flex-[3] max-w-[680px] bg-[#F8F5F0] grid grid-rows-4 h-full">
          {ABOUT_SECTIONS.map((sec, idx) => (
            <div 
              key={idx} 
              className="px-8 xl:px-12 py-1.5 flex flex-col justify-center min-h-0"
            >
              <div className="flex flex-col items-start gap-1 max-w-[560px]">
                <span className="inline-block bg-[#041727] text-white px-1 py-0.5 text-xs font-bold tracking-[-0.04em] select-none shrink-0">
                  {sec.tag}
                </span>
                <p className="text-[12px] xl:text-[13px] 2xl:text-[14px] leading-[18px] xl:leading-[20px] 2xl:leading-[22px] text-[#041727] font-medium tracking-[-0.04em]">
                  {sec.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Column 3: Stacked 1:1 square icon cells with vertical and horizontal borders */}
        <div className="h-full aspect-[1/4] shrink-0 bg-[#F8F5F0] border-l border-r border-[#DEDBD6] grid grid-rows-4">
          {ABOUT_SECTIONS.map((sec, idx) => (
            <div 
              key={idx}
              className={`flex items-center justify-center p-2 min-h-0 h-full w-full aspect-square overflow-hidden ${
                idx !== ABOUT_SECTIONS.length - 1 ? 'border-b border-[#DEDBD6]' : ''
              }`}
            >
              <div className="w-full h-full flex items-center justify-center select-none">
                <img
                  src={sec.image}
                  alt={sec.imageAlt}
                  referrerPolicy="no-referrer"
                  className="max-h-[75%] max-w-[75%] object-contain filter drop-shadow-[0_6px_12px_rgba(4,23,39,0.06)] pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Column 4: Right empty spacer */}
        <div className="flex-1 min-w-[40px] bg-[#F8F5F0] h-full" />

      </div>

      {/* Mobile / Tablet Layout (Scrollable on small vertical screens) */}
      <div className="lg:hidden h-full overflow-y-auto flex flex-col bg-[#F8F5F0] divide-y divide-[#DEDBD6]">
        {ABOUT_SECTIONS.map((sec, idx) => (
          <div key={idx} className="p-5 flex flex-col gap-4">
            <div className="flex flex-col items-start gap-1.5">
              <span className="inline-block bg-[#041727] text-white px-1 py-0.5 text-xs sm:text-sm font-bold tracking-[-0.04em] select-none">
                {sec.tag}
              </span>
              <p className="text-[13px] sm:text-[14px] leading-[20px] text-[#041727] font-medium tracking-[-0.04em]">
                {sec.body}
              </p>
            </div>

            <div className="border border-[#DEDBD6] bg-[#F8F5F0] rounded-none p-3 flex items-center justify-center aspect-square max-w-[160px] mx-auto w-full">
              <img
                src={sec.image}
                alt={sec.imageAlt}
                referrerPolicy="no-referrer"
                className="w-16 h-16 object-contain pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AboutView;

