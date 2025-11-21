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
    className={`group flex items-center justify-center h-14 hover:bg-[#ecece8] transition-colors text-[10px] sm:text-xs md:text-sm font-bold bg-[#f4f4f0] md:bg-transparent md:border-b-0 tracking-[-0.04em] flex-1 min-w-0 px-1 md:px-0 md:w-auto ${className}`}
  >
    <span className="truncate transform transition-transform duration-300 group-hover:scale-110">{label}</span>
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="shrink-0 flex flex-row overflow-hidden w-full md:w-auto md:grid md:grid-cols-[240px_repeat(5,1fr)_240px] gap-[1px] md:gap-0 md:divide-x md:divide-gray-300 border-t border-gray-300 bg-gray-300 md:bg-[#f4f4f0]">
      {/* Left Spacer - aligns with Featured/History/Resume column */}
      <div className="hidden md:block bg-[#f4f4f0]" />

      <FooterLink label="Linkedin" href="https://www.linkedin.com/in/bunmi-gbadamosi-0128701aa" />
      <FooterLink label="Layers" href="https://layers.to/gbunmi" />
      <FooterLink label="Behance" href="https://www.behance.net/gbadamooluwabu" />
      <FooterLink label="Artstation" href="https://www.artstation.com/g-bunmi" />
      <FooterLink 
        label="Spotify" 
        href="https://open.spotify.com/artist/1qktTPa4kJCpNl2hIr8mTP"
        className="flex" // Remove hidden md:flex to make it visible on mobile again
      />

      {/* Right Spacer - aligns with Contact/Art/Music column */}
      <div className="hidden md:block bg-[#f4f4f0]" />
    </footer>
  );
};

export default Footer;