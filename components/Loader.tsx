import React from 'react';
import { motion } from 'motion/react';

interface LoaderProps {
    progress: number;
}

const Loader: React.FC<LoaderProps> = ({ progress }) => {
  const loaderImages = [
    { src: "https://raw.githubusercontent.com/gbunmi/images/main/Compass.png", alt: "Compass" },
    { src: "https://raw.githubusercontent.com/gbunmi/images/main/Cube%20(1).png", alt: "Cube" },
    { src: "https://raw.githubusercontent.com/gbunmi/images/main/Monitor.png", alt: "Monitor" },
    { src: "https://raw.githubusercontent.com/gbunmi/images/main/Flower%20(1).png", alt: "Flower" }
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[#F8F5F0] flex flex-col items-center justify-center gap-4">
      {/* Horizontal row of 4 images acting like loader dots */}
      <div className="flex items-center gap-2 justify-center h-20 select-none">
        {loaderImages.map((img, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, -18, 0]
            }}
            transition={{
              duration: 1.0,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.15
            }}
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(4,23,39,0.06)]"
            />
          </motion.div>
        ))}
      </div>

      {/* Styled to match about page section headers */}
      <div className="inline-block bg-[#041727] text-white px-1 py-0.5 text-sm font-bold tracking-[-0.04em] select-none">
        loading...{Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loader;