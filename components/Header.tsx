
import React from 'react';

interface HeaderProps {
  onMenuOpen: () => void;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuOpen, showBackButton = false }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#F5F3F1]/80 backdrop-blur-md">
      <div className="mx-fluid flex items-center justify-between h-[80px] md:h-[120px]">
        {showBackButton ? (
          <a 
            href="#/" 
            onClick={(e) => handleNav(e, '/')}
            className="flex items-center group p-2 -ml-2"
            aria-label="Back to Home"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-black text-white flex items-center justify-center rounded-full group-hover:bg-blue-600 group-hover:scale-105 transition-all duration-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"/>
                <path d="M12 19l-7-7 7-7"/>
              </svg>
            </div>
          </a>
        ) : (
          <a 
            href="#/" 
            onClick={(e) => handleNav(e, '/')}
            className="flex items-center space-x-3 group"
          >
            <span className="text-5xl md:text-6xl font-light tracking-tighter flex items-center gap-3 transition-transform duration-500 group-hover:scale-110">
              <span className="text-gray-400">○</span>
              <span className="text-black transform -translate-y-[2px]">▴</span>
              <span className="text-black">●</span>
            </span>
          </a>
        )}
        
        <button 
          onClick={onMenuOpen}
          className="p-2 md:p-3 hover:bg-black/5 rounded-full transition-colors duration-200 focus:outline-none"
          aria-label="Open Menu"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
