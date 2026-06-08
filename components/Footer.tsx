import React from 'react';

interface FooterLinkProps {
  label: string;
  href: string;
  className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, href, className = '' }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center justify-center h-14 hover:bg-[#ecece8] transition-colors text-[10px] sm:text-xs md:text-sm font-bold bg-[#F8F5F0] flex-1 min-w-0 px-1 md:px-0 md:w-auto ${className}`}
  >
    <span className="relative block h-[1.2em] overflow-hidden tracking-[-0.04em] select-none">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1/2">
        <span className="flex h-[1.2em] items-center justify-center truncate px-2">{label}</span>
        <span className="flex h-[1.2em] items-center justify-center truncate px-2 text-[#041727]">{label}</span>
      </span>
    </span>
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="shrink-0 flex flex-row overflow-hidden w-full md:w-auto md:grid md:grid-cols-[240px_repeat(5,1fr)_240px] gap-px border-t border-[#DEDBD6] bg-[#DEDBD6]">
      {/* Left Spacer - aligns with Left Column grid line */}
      <div className="hidden md:block bg-[#F8F5F0]" />

      <FooterLink label="Linkedin" href="https://www.linkedin.com/in/bunmi-gbadamosi-0128701aa" />
      <FooterLink label="Layers" href="https://layers.to/gbunmi" />
      <FooterLink label="Behance" href="https://www.behance.net/gbadamooluwabu" />
      <FooterLink label="Artstation" href="https://www.artstation.com/g-bunmi" />
      <FooterLink 
        label="Github" 
        href="https://github.com/gbunmi"
        className="flex"
      />

      {/* Right Spacer - aligns with Right Column grid line */}
      <div className="hidden md:block bg-[#F8F5F0]" />
    </footer>
  );
};

export default Footer;