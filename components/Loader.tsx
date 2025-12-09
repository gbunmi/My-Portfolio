import React from 'react';

interface LoaderProps {
    progress: number;
}

const Loader: React.FC<LoaderProps> = ({ progress }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#F8F5F0] flex flex-col items-center justify-center">
        <div className="w-64 h-2 bg-[#CEC8BD] overflow-hidden relative">
            <div 
                className="absolute top-0 left-0 h-full bg-[#041727] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
        <div className="mt-4 font-mono text-sm font-bold text-[#041727] tracking-[-0.04em]">
            LOADING {Math.floor(progress)}%
        </div>
    </div>
  );
};

export default Loader;