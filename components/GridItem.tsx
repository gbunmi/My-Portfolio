import React from 'react';

interface GridItemProps {
  icon?: string;
  imageSrc?: string;
  label: string;
  subLabel?: string;
  link?: string;
  external?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const GridItem: React.FC<GridItemProps> = ({ icon, imageSrc, label, subLabel, link, external, className = '', onClick }) => {
  const isLink = !!link;
  
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  const content = (
      <>
      {(imageSrc || icon) && (
        <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300 drop-shadow-lg filter">
          {imageSrc ? (
            <img src={imageSrc} alt={label} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          ) : (
            <span className="text-6xl">{icon}</span>
          )}
        </div>
      )}
      <div className="text-center tracking-[-0.04em]">
        <p className="font-bold text-sm md:text-base lowercase leading-tight">
          {label}
          {external && <span className="ml-1 inline-block transform -translate-y-[1px]">↗</span>}
        </p>
        {subLabel && <p className="font-bold text-sm md:text-base lowercase leading-tight">{subLabel}</p>}
      </div>
      </>
  );

  const baseClasses = `flex flex-col items-center justify-center p-4 bg-[#F8F5F0] hover:bg-[#ecece8] transition-colors cursor-pointer group h-full w-full ${className}`;

  if (isLink) {
      return (
          <a 
            href={link} 
            onClick={handleClick}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={baseClasses}
          >
              {content}
          </a>
      );
  }

  return (
    <div onClick={handleClick} className={baseClasses}>
      {content}
    </div>
  );
};

export default GridItem;