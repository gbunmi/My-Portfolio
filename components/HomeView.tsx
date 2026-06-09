import React, { useState, useEffect } from 'react';
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
  const words = ["product designer.", "design engineer.", "brand designer."];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Interactive 3D tilt and glossy shine states for top hero
  const [topTilt, setTopTilt] = useState({ rx: 0, ry: 0, s: 1, translateX: 0, translateY: 0 });
  const [topShine, setTopShine] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHoveredTop, setIsHoveredTop] = useState(false);

  // Interactive 3D tilt and glossy shine states for bottom hero
  const [bottomTilt, setBottomTilt] = useState({ rx: 0, ry: 0, s: 1, translateX: 0, translateY: 0 });
  const [bottomShine, setBottomShine] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHoveredBottom, setIsHoveredBottom] = useState(false);

  const handleMouseMoveTop = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHoveredTop(true);
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates from -1 to 1
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Subtle natural 3D rotate - max 12 degrees
    const rx = -normY * 12;
    const ry = normX * 12;

    // Magnetic parallax shift (max 8px translation)
    const tx = normX * 8;
    const ty = normY * 8 - 12; // Accentuated negative vertical shift for top hero

    // Shine coordinates in percentages
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setTopTilt({ rx, ry, s: 1.04, translateX: tx, translateY: ty });
    setTopShine({ x: shineX, y: shineY, opacity: 0.18 });
  };

  const handleMouseLeaveTop = () => {
    setIsHoveredTop(false);
    setTopTilt({ rx: 0, ry: 0, s: 1, translateX: 0, translateY: 0 });
    setTopShine({ x: 50, y: 50, opacity: 0 });
  };

  const handleMouseMoveBottom = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHoveredBottom(true);
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    const rx = -normY * 12;
    const ry = normX * 12;

    const tx = normX * 8;
    const ty = normY * 8 + 12; // Accentuated positive vertical shift for bottom hero

    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;

    setBottomTilt({ rx, ry, s: 1.04, translateX: tx, translateY: ty });
    setBottomShine({ x: shineX, y: shineY, opacity: 0.18 });
  };

  const handleMouseLeaveBottom = () => {
    setIsHoveredBottom(false);
    setBottomTilt({ rx: 0, ry: 0, s: 1, translateX: 0, translateY: 0 });
    setBottomShine({ x: 50, y: 50, opacity: 0 });
  };

  useEffect(() => {
    let timer: any;
    const fullWord = words[currentWordIdx];
    
    // Typing speed
    let speed = isDeleting ? 50 : 80;

    if (!isDeleting && currentText === fullWord) {
      // Pause at full word
      speed = 1500;
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, speed);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIdx((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting 
          ? fullWord.substring(0, currentText.length - 1)
          : fullWord.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  return (
    <div className="w-full md:h-full md:overflow-hidden flex flex-col md:grid md:grid-cols-[240px_1fr_240px] md:grid-rows-3 gap-px bg-[#DEDBD6] scroll-smooth">
      {/* SVG Liquid Filters */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <filter id="liquid-warp-top" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.04" numOctaves="2" result="noise">
              <animate attributeName="baseFrequency" dur="10s" values="0.012 0.04;0.012 0.07;0.012 0.04" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="liquid-warp-bottom" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.04" numOctaves="2" result="noise">
              <animate attributeName="baseFrequency" dur="10s" values="0.012 0.04;0.012 0.07;0.012 0.04" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <style>{`
        @keyframes liquidFloatTop {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-1deg) scale(1.015);
          }
        }
        @keyframes liquidFloatBottom {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(8px) rotate(1deg) scale(1.015);
          }
        }
      `}</style>
        
      {/* --- Center Column (Unified Wrapper to remove borders) --- */}
      <div className="w-full h-[calc(100vh-3.5rem)] h-[calc(100dvh-3.5rem)] md:h-full md:w-auto md:col-span-1 md:col-start-2 md:row-start-1 md:row-span-3 bg-[#F8F5F0] flex flex-col">
        
        {/* Top Hero Section */}
        <div 
          className="flex w-full flex-1 items-start justify-center overflow-hidden pb-1 md:pb-0"
          style={{ perspective: '1000px' }}
        >
          <div
            className="relative w-[80%] md:w-[30%] h-full flex items-start justify-center cursor-crosshair"
            onMouseMove={handleMouseMoveTop}
            onMouseLeave={handleMouseLeaveTop}
            style={{
              transform: `perspective(1000px) rotateX(${topTilt.rx}deg) rotateY(${topTilt.ry}deg) scale(${topTilt.s}) translate3d(${topTilt.translateX}px, ${topTilt.translateY}px, 0px)`,
              transition: isHoveredTop ? 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              transformStyle: 'preserve-3d',
            }}
          >
            <img 
              src={ASSETS.topHero} 
              alt="Top Hero" 
              className="max-h-full object-contain object-top select-none pointer-events-none" 
              style={{
                animation: isHoveredTop ? 'liquidFloatTop 8s ease-in-out infinite' : 'none',
                filter: isHoveredTop 
                  ? 'url(#liquid-warp-top) drop-shadow(0 15px 30px rgba(4, 23, 39, 0.12))' 
                  : 'drop-shadow(0 10px 20px rgba(0,0,0,0.06))',
                transition: 'filter 0.6s ease-out',
              }}
            />
            {/* Glossy Reflection Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-overlay rounded-2xl"
              style={{
                opacity: topShine.opacity,
                background: `radial-gradient(circle at ${topShine.x}% ${topShine.y}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 60%)`,
                transition: 'opacity 0.3s ease',
              }}
            />
          </div>
        </div>

        {/* Hero Content Section */}
        <div className="w-full shrink-0 relative flex flex-col items-center justify-center overflow-hidden py-4 md:py-0 md:flex-1">
          {/* Center Content Group */}
          <div className="flex flex-col items-center justify-center w-full z-10 px-6">
              {/* Tag */}
              <div className="bg-[#041727] text-white mb-3 md:mb-4 pl-[2px] pr-0 pt-0.5 pb-0 min-h-[28px] md:min-h-[32px] flex items-center justify-center gap-[1px]">
                <span className="text-[15px] md:text-base font-bold tracking-[-0.04em] leading-[16px]">{currentText}</span>
                <span className="w-[1.5px] h-[1.125em] bg-white animate-pulse shrink-0" />
              </div>

              {/* Description Text */}
              <div className="text-center max-w-[320px] sm:max-w-[500px] md:max-w-[580px]">
                <p className="text-[15px] md:text-lg font-medium leading-[20px] md:leading-[26px] text-[#041727] tracking-[-0.04em]">
                  Hi, I’m Bunmi, a multi-disciplinary designer with{" "}
                  <br className="hidden md:block" />
                  a rich experience designing functional products{" "}
                  <br className="hidden md:block" />
                  and visuals across platforms and industries.
                </p>
              </div>
          </div>
        </div>

        {/* Bottom Hero Section */}
        <div 
          className="flex w-full flex-1 items-end justify-center overflow-hidden pt-1 md:pt-0"
          style={{ perspective: '1000px' }}
        >
          <div
            className="relative w-[80%] md:w-[30%] h-full flex items-end justify-center cursor-crosshair"
            onMouseMove={handleMouseMoveBottom}
            onMouseLeave={handleMouseLeaveBottom}
            style={{
              transform: `perspective(1000px) rotateX(${bottomTilt.rx}deg) rotateY(${bottomTilt.ry}deg) scale(${bottomTilt.s}) translate3d(${bottomTilt.translateX}px, ${bottomTilt.translateY}px, 0px)`,
              transition: isHoveredBottom ? 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              transformStyle: 'preserve-3d',
            }}
          >
            <img 
              src={ASSETS.bottomHero} 
              alt="Bottom Hero" 
              className="max-h-full object-contain object-bottom select-none pointer-events-none" 
              style={{
                animation: isHoveredBottom ? 'liquidFloatBottom 8s ease-in-out infinite' : 'none',
                filter: isHoveredBottom 
                  ? 'url(#liquid-warp-bottom) drop-shadow(0 -15px 30px rgba(4, 23, 39, 0.12))' 
                  : 'drop-shadow(0 -10px 20px rgba(0,0,0,0.06))',
                transition: 'filter 0.6s ease-out',
              }}
            />
            {/* Glossy Reflection Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-overlay rounded-2xl"
              style={{
                opacity: bottomShine.opacity,
                background: `radial-gradient(circle at ${bottomShine.x}% ${bottomShine.y}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 60%)`,
                transition: 'opacity 0.3s ease',
              }}
            />
          </div>
        </div>
      </div>

      {/* --- Grid Items Wrapper --- */}
      <div className="grid grid-cols-2 w-full md:contents shrink-0 gap-px bg-[#DEDBD6]">
        
        {/* Left Column Items */}
        <div className="aspect-square md:aspect-auto md:h-full w-full md:w-auto md:col-span-1 md:col-start-1 md:row-start-1 bg-[#F8F5F0]">
            <GridItem 
            imageSrc={ASSETS.featuredWork}
            label="work" 
            link="/featuredwork"
            onClick={(e) => { e?.preventDefault(); onNavigate('featured'); }}
          />
        </div>
        <div className="aspect-square md:aspect-auto md:h-full w-full md:w-auto md:col-span-1 md:col-start-1 md:row-start-2 bg-[#F8F5F0]">
          <GridItem 
            imageSrc={ASSETS.employment}
            label="job history" 
            link="/employment-history"
            onClick={(e) => { e?.preventDefault(); onNavigate('employment'); }}
          />
        </div>
        <div className="aspect-square md:aspect-auto md:h-full w-full md:w-auto md:col-span-1 md:col-start-1 md:row-start-3 bg-[#F8F5F0]">
          <GridItem 
            imageSrc={ASSETS.resume}
            label="resume" 
            link="https://docs.google.com/document/d/184oLOD6dQO0yy9_3L5E6Ohgm5yzAmvTjfak6sxNiMok/edit?usp=sharing"
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