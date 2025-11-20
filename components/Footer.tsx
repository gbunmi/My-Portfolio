import React from 'react';

interface FooterLinkProps {
  label: string;
  href: string;
  className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, href, className = '' }) => (
  <a 
    href={href} 
    className={`flex items-center justify-center h-14 hover:bg-[#ecece8] transition-colors text-xs md:text-sm font-bold border-b md:border-b-0 border-gray-300 tracking-[-0.04em] ${className}`}
  >
    {label}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-[240px_repeat(5,1fr)_240px] divide-y md:divide-y-0 md:divide-x divide-gray-300 border-t border-gray-300 bg-[#f4f4f0]">
      {/* Left Spacer - aligns with Featured/History/Resume column */}
      <div className="hidden md:block bg-[#f4f4f0]" />

      <FooterLink label="Linkedin" href="#" />
      <FooterLink label="Layers" href="#" />
      <FooterLink label="Behance" href="#" />
      <FooterLink label="Artstation" href="#" />
      <FooterLink label="Spotify" href="#" />

      {/* Right Spacer - aligns with Contact/Art/Music column */}
      <div className="hidden md:block bg-[#f4f4f0]" />
    </footer>
  );
};

export default Footer;