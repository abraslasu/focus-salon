
import React from 'react';
import { NAV_LINKS } from '../constants';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center animate-in fade-in duration-300">
      <button 
        onClick={onClose}
        className="absolute top-5 md:top-10 right-fluid p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
      >
        <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <nav className="text-center space-y-4 md:space-y-8 px-fluid">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNav(e, link.href.replace('#', ''))}
            className="block fluid-nav font-serif hover:italic transition-all duration-300 transform hover:translate-x-0 md:hover:translate-x-4"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="absolute bottom-10 text-gray-500 uppercase tracking-widest text-[10px] md:text-sm text-center px-fluid w-full">
        Saloane Socratice &bull; București
      </div>
    </div>
  );
};

export default MenuOverlay;
