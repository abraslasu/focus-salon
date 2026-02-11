
import React from 'react';

interface FooterProps {
  currentHash: string;
}

const FOOTER_IMAGES: Record<string, string> = {
  '#/': 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&w=2000&auto=format&fit=crop',
  '#/de-ce-focus': 'https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?q=80&w=2342&auto=format&fit=crop', 
  '#/cum-se-desfasoara': 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop', 
  '#/articole': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000&auto=format&fit=crop',
  '#/cum-poti-participa': 'https://images.unsplash.com/photo-1679175865437-fd4f1744ebd9?q=80&w=2000&auto=format&fit=crop',
};

const Footer: React.FC<FooterProps> = ({ currentHash }) => {
  const backgroundImage = FOOTER_IMAGES[currentHash] || FOOTER_IMAGES['#/'];

  const getNextLink = () => {
    switch (currentHash) {
      case '#/':
        return { label: 'De ce FOCUS?', href: '#/de-ce-focus' };
      case '#/de-ce-focus':
        return { label: 'Cum se desfășoară?', href: '#/cum-se-desfasoara' };
      case '#/cum-se-desfasoara':
        return { label: 'Cum poți participa?', href: '#/cum-poti-participa' };
      case '#/cum-poti-participa':
        return { label: 'Vreau să mă alătur', href: '#/join-form' };
      default:
        return null;
    }
  };

  const nextLink = getNextLink();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full z-0 h-[60vh] md:h-[80vh] flex flex-col pointer-events-none">
      <div className="relative flex-grow overflow-hidden flex items-center justify-center bg-black">
        <div 
          key={backgroundImage}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 animate-in fade-in zoom-in-95 opacity-50"
          style={{ 
            backgroundImage: `url('${backgroundImage}')`,
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Next Link Content overlayed on the image */}
        {nextLink && (
          <div className="relative z-10 w-full max-w-full md:max-w-6xl px-fluid text-center pointer-events-auto">
            <a 
              href={nextLink.href}
              onClick={(e) => handleNav(e, nextLink.href.replace('#', ''))}
              className="group flex flex-col items-center justify-center w-full"
            >
              {/* Inner container optimized for mobile fit */}
              <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
                {/* Horizontal line stretching to width of container */}
                <div className="w-full h-px bg-white/40 transition-all duration-700 group-hover:bg-white mb-6 md:mb-12" />
                
                <div className="flex items-center justify-center space-x-4 md:space-x-12 w-full">
                  <h2 className="text-white fluid-h2 font-serif leading-tight transition-all duration-500 group-hover:italic group-hover:translate-x-[-5px] md:group-hover:translate-x-[-10px] text-center">
                    {nextLink.label}
                  </h2>
                  
                  {/* Right arrow icon - Resized for mobile to ensure viewport fit */}
                  <svg 
                    className="w-8 h-8 md:w-20 md:h-20 text-white/70 transition-all duration-500 transform group-hover:translate-x-2 md:group-hover:translate-x-4 group-hover:text-white shrink-0" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.75" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        )}

        {/* Branding indicator */}
        <div className="absolute bottom-12 md:bottom-20 left-0 w-full text-center">
          <div className="text-white/20 text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold select-none">
            FOCUS • Saloane Socratice
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
