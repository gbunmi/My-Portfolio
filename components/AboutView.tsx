import React from 'react';

interface SectionImageProps {
  src: string;
  alt: string;
}

const SectionImage: React.FC<SectionImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full aspect-square max-w-[280px] lg:max-w-[420px] mx-auto flex items-center justify-center select-none">
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        className="w-[95%] h-[95%] object-contain filter drop-shadow-[0_12px_24px_rgba(4,23,39,0.08)]"
      />
    </div>
  );
};

const AboutView: React.FC = () => {
  const manImage = "https://raw.githubusercontent.com/gbunmi/images/main/Compass.png";
  const designerImage = "https://raw.githubusercontent.com/gbunmi/images/main/Cube%20(1).png";
  const builderImage = "https://raw.githubusercontent.com/gbunmi/images/main/Monitor.png";
  const artistImage = "https://raw.githubusercontent.com/gbunmi/images/main/Flower%20(1).png";

  return (
    <div className="h-full w-full bg-[#F8F5F0] overflow-y-auto scroll-smooth">
      <div className="min-h-full lg:grid lg:grid-cols-[240px_1fr_240px] bg-[#DEDBD6] gap-px">
        
        {/* Left spacer column matching existing grid geometry */}
        <div className="hidden lg:block bg-[#F8F5F0]" />

        {/* Center column of the grid: hosts all content */}
        <div className="bg-[#F8F5F0] min-h-full px-4 lg:px-10 py-12 flex flex-col items-center">
          
          <div className="w-full flex flex-col gap-12 lg:gap-14">
          
          {/* Section 1: the man */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-10 lg:pb-12">
            <div className="flex flex-col items-start gap-2 order-2 lg:order-1">
              <span className="inline-block bg-[#041727] text-white px-1 py-0.5 text-sm font-bold tracking-[-0.04em]">
                the man
              </span>
              <div className="text-sm lg:text-base text-[#041727] font-medium leading-relaxed w-full text-justify tracking-[-0.04em] flex flex-col gap-4">
                <p>
                  I spend most of my days designing products, but the things that shape me happen outside design files. I'm curious about almost everything, the kind of person who can disappear down a rabbit hole about ancient civilizations, startup growth loops, or why some songs feel nostalgic on the first listen.
                </p>
                <p>
                  When I'm not working, you'll usually find me exploring digital painting, making music, building side projects I'll swear are "just experiments," or convincing myself that this latest idea definitely won't turn into another full product. It usually does.
                </p>
                <p>
                  At the core, I enjoy making things useful, beautiful, and a little more human than they were yesterday.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center order-1 lg:order-2">
              <SectionImage src={manImage} alt="The Man" />
            </div>
          </div>

          {/* Section 2: the designer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-10 lg:pb-12">
            <div className="flex items-center justify-center order-1 lg:order-1">
              <SectionImage src={designerImage} alt="The Designer" />
            </div>
            <div className="flex flex-col items-start gap-2 order-2 lg:order-2">
              <span className="inline-block bg-[#041727] text-white px-1 py-0.5 text-sm font-bold tracking-[-0.04em]">
                the designer
              </span>
              <div className="text-sm lg:text-base text-[#041727] font-medium leading-relaxed w-full text-justify tracking-[-0.04em] flex flex-col gap-4">
                <p>
                  I've spent years designing products across fintech, healthcare, AI, marketplaces, web3, logistics, and a few categories that didn't have a name when we started building them. What excites me isn't moving buttons around a screen. It's understanding how people think, where they get stuck, and how thoughtful design can quietly solve problems without demanding attention.
                </p>
                <p>
                  I like clean interfaces, clear systems, and products that feel obvious in hindsight. The best compliment for a design isn't "wow." It's "that was easy."
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: the builder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-10 lg:pb-12">
            <div className="flex flex-col items-start gap-2 order-2 lg:order-1">
              <span className="inline-block bg-[#041727] text-white px-1 py-0.5 text-sm font-bold tracking-[-0.04em]">
                the builder
              </span>
              <div className="text-sm lg:text-base text-[#041727] font-medium leading-relaxed w-full text-justify tracking-[-0.04em] flex flex-col gap-4">
                <p>
                  Design is where most of my projects begin, but rarely where they end. Thanks to AI tools and a growing collection of coding skills, I've become the kind of person who designs something in the morning and has a working version by the evening.
                </p>
                <p>
                  I enjoy building web apps, websites, internal tools, and experimental products, often turning rough concepts into functioning experiences without waiting for a full development team. It's one of the most exciting shifts in technology today: the gap between having an idea and bringing it to life has never been smaller.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center order-1 lg:order-2">
              <SectionImage src={builderImage} alt="The Builder" />
            </div>
          </div>

          {/* Section 4: the artist */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-4">
            <div className="flex items-center justify-center order-1 lg:order-1">
              <SectionImage src={artistImage} alt="The Artist" />
            </div>
            <div className="flex flex-col items-start gap-2 order-2 lg:order-2">
              <span className="inline-block bg-[#041727] text-white px-1 py-0.5 text-sm font-bold tracking-[-0.04em]">
                the artist
              </span>
              <div className="text-sm lg:text-base text-[#041727] font-medium leading-relaxed w-full text-justify tracking-[-0.04em] flex flex-col gap-4">
                <p>
                  Outside of product design, I spend time creating digital paintings and producing music. Sometimes it's experimenting with colors and compositions, other times it's layering sounds and endlessly tweaking tracks that were supposedly finished hours ago.
                </p>
                <p>
                  I enjoy both because they give me space to create without constraints. No user stories, no conversion metrics, no roadmap. Just curiosity, experimentation, and the satisfaction of making something from nothing.
                </p>
              </div>
            </div>
          </div>

          </div>

        </div>

      </div>

      {/* Right spacer column matching existing grid geometry */}
      <div className="hidden lg:block bg-[#F8F5F0]" />

    </div>
  );
};

export default AboutView;
