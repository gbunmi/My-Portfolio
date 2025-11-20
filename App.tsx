import React from 'react';
import Clock from './components/Clock';
import GridItem from './components/GridItem';
import Footer from './components/Footer';

// PASTE YOUR IMAGE LINKS HERE
const ASSETS = {
  featuredWork: "https://i.ibb.co/whCkWQLR/34da72d8-4bcd-41b5-b1fa-4cc8a3a682a5-1.png",
  employment: "https://i.ibb.co/5XmF30xW/Chat-GPT-Image-Jun-14-2025-09-39-45-PM-2.png",
  resume: "https://i.ibb.co/Z1XXJsD0/0673400d-8c0f-4cb8-8eb7-78cdb94d73b5-1.png",
  contact: "https://i.ibb.co/Wp7Q3Bn7/Chat-GPT-Image-Jun-14-2025-09-43-52-PM-2.png",
  art: "https://i.ibb.co/67knWy9j/Chat-GPT-Image-Jun-14-2025-09-31-17-PM-1.png",
  music: "https://i.ibb.co/5hmYxq4V/Chat-GPT-Image-Jun-14-2025-09-17-57-PM-1.png",
  // This is the center main image
  heroImage: "https://i.ibb.co/hJqmKYFm/feea1261-6730-424b-aa60-41864f0a32a8-1.png" 
};

const App: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full flex flex-col bg-[#f4f4f0] text-gray-900 font-mono selection:bg-yellow-200">
      {/* Header */}
      <header className="h-14 shrink-0 border-b border-gray-300 flex justify-between items-center px-4 md:px-8 z-50 bg-[#f4f4f0]">
        <h1 className="text-xs md:text-sm font-bold uppercase tracking-wider">Bunmi Gbadamosi</h1>
        <div className="text-xs md:text-sm font-bold uppercase tracking-wider">
          <Clock />
        </div>
      </header>

      {/* Main Grid - Responsive Layout
          Mobile: Scrollable, 2 columns (Hero spans 2, Items 1x1)
          Desktop: Fixed (No Scroll), 3 specific columns (240px - 1fr - 240px)
      */}
      <main className="flex-1 min-h-0 overflow-y-auto md:overflow-hidden grid grid-cols-2 md:grid-cols-[240px_1fr_240px] md:grid-rows-3 gap-[1px] bg-gray-300 border-t border-gray-300">
        
        {/* --- Hero Section --- 
            Mobile: Order 1, Spans 2 columns (Full Width)
            Desktop: Column 2, Spans 3 rows (Full Height)
        */}
        <div className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-1 md:row-span-3 order-1 md:order-none relative h-full min-h-[55vh] flex flex-col items-center justify-start pt-0 overflow-hidden bg-[#f4f4f0] pb-12 md:pb-4">
          {/* Image */}
          <img 
            src={ASSETS.heroImage}
            alt="Hero Composition" 
            className="w-[80%] md:w-[40%] max-h-[60%] object-contain object-top opacity-100 mt-0"
          />

          {/* Tag - Straightened with zero padding */}
          <div className="z-10 bg-[#1a1a1a] text-white my-4">
            <span className="text-sm md:text-base font-bold tracking-tight font-mono">product designer.</span>
          </div>

          {/* Description Text */}
          <div className="z-10 text-center px-6 pb-4">
            <p className="text-sm md:text-lg font-medium leading-[20px] tracking-[-0.04em] text-gray-900">
              Hi, I’m Bunmi, a designer with a rich
              <br className="hidden md:block" />
              experience designing functional products
              <br className="hidden md:block" />
              across platforms and industries.
            </p>
          </div>
        </div>

        {/* --- Grid Items --- 
            Mobile: Order 2, Flow naturally in 2 columns (1 card each)
            Desktop: Explicit positioning in Column 1 or Column 3
        */}

        {/* Left Column Items (Desktop) */}
        <div className="order-2 md:order-none col-span-1 md:col-start-1 md:row-start-1 bg-[#f4f4f0]">
           <GridItem 
            imageSrc={ASSETS.featuredWork}
            label="featured" 
            subLabel="work"
          />
        </div>
        <div className="order-2 md:order-none col-span-1 md:col-start-1 md:row-start-2 bg-[#f4f4f0]">
          <GridItem 
            imageSrc={ASSETS.employment}
            label="employment" 
            subLabel="history"
          />
        </div>
        <div className="order-2 md:order-none col-span-1 md:col-start-1 md:row-start-3 bg-[#f4f4f0]">
          <GridItem 
            imageSrc={ASSETS.resume}
            label="my resume.pdf" 
            external
          />
        </div>

        {/* Right Column Items (Desktop) */}
        <div className="order-2 md:order-none col-span-1 md:col-start-3 md:row-start-1 bg-[#f4f4f0]">
          <GridItem 
            imageSrc={ASSETS.contact}
            label="contact" 
            link="mailto:g.bunmi1@gmail.com"
            external
          />
        </div>
        <div className="order-2 md:order-none col-span-1 md:col-start-3 md:row-start-2 bg-[#f4f4f0]">
          <GridItem 
            imageSrc={ASSETS.art}
            label="art" 
          />
        </div>
        <div className="order-2 md:order-none col-span-1 md:col-start-3 md:row-start-3 bg-[#f4f4f0]">
           <GridItem 
            imageSrc={ASSETS.music}
            label="music" 
          />
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;