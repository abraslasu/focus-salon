
import React, { useEffect, useRef, useState } from 'react';
import EmailForm from '../components/EmailForm';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoActive, setIsVideoActive] = useState(false);

  const detailLinks = [
    { label: 'De ce FOCUS?', href: '#/de-ce-focus' },
    { label: 'Cum se desfășoară?', href: '#/cum-se-desfasoara' },
    { label: 'Articole', href: '#/articole' },
    { label: 'Cum poți participa', href: '#/cum-poti-participa' },
  ];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty('--x', `${x}px`);
        containerRef.current.style.setProperty('--y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="pt-[160px] md:pt-[240px] pb-4 md:pb-[104px]">
        <div className="mx-fluid">
          <h3 className="fluid-h3 text-black mb-2 md:mb-4 animate-in slide-in-from-bottom-4 duration-500 delay-100 tracking-tight">
            Invitație la saloanele socratice
          </h3>
          
          <div 
            ref={containerRef}
            className="relative inline-block w-full group"
            style={{ '--x': '-1000px', '--y': '-1000px' } as React.CSSProperties}
          >
            <h1 className="fluid-h1 font-semibold leading-[0.8] tracking-[-0.01em] mb-[42px] md:mb-[188px] animate-in slide-in-from-bottom-8 duration-700 uppercase select-none">
              FOCUS
            </h1>
            
            <div 
              className="absolute inset-0 pointer-events-none z-10 hidden md:block"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                maskImage: 'radial-gradient(circle 320px at var(--x) var(--y), transparent 0%, black 100%), linear-gradient(to right, transparent, black 1%, black 99%, transparent), linear-gradient(to bottom, transparent, black 2%, black 98%, transparent)',
                WebkitMaskImage: 'radial-gradient(circle 320px at var(--x) var(--y), transparent 0%, black 100%), linear-gradient(to right, transparent, black 1%, black 99%, transparent), linear-gradient(to bottom, transparent, black 2%, black 98%, transparent)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in, source-in',
              }}
            />
          </div>

          <p className="max-w-full md:max-w-[1330px] fluid-h3 font-serif text-black leading-[1.15] animate-in slide-in-from-bottom-12 duration-1000 tracking-tight">
            Un spațiu dedicat dialogului autentic, unde curiozitatea înlocuiește certitudinea. Ne adunăm pentru a explora idei complexe prin prisma filosofiei aplicate, într-o atmosferă de respect reciproc și rigoare intelectuală.
          </p>
        </div>
      </section>

      {/* Video Section with Scroll Protection */}
      <section className="pt-7 pb-12 md:py-20">
        <div className="mx-fluid">
          <div className="relative aspect-video w-full max-w-6xl mx-auto shadow-xl overflow-hidden rounded-lg group bg-black">
            {!isVideoActive && (
              <div 
                onClick={() => setIsVideoActive(true)}
                className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center bg-black/5 hover:bg-black/0 transition-all duration-700"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                   <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            )}
            <iframe 
              className={`w-full h-full transition-all duration-700 ${isVideoActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-60'}`}
              src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=${isVideoActive ? 1 : 0}`} 
              title="Focus Introduction"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ pointerEvents: isVideoActive ? 'auto' : 'none' }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Detail Pages Links */}
      <section className="bg-white pt-[40px] pb-[80px] px-fluid md:px-[40px] mx-0 my-12 md:m-[60px] shadow-sm">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[38.4px] md:gap-x-[76.8px] gap-y-16 md:gap-y-32">
            {detailLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.href}
                onClick={(e) => handleNav(e, link.href.replace('#', ''))}
                className="group block border-t border-gray-100 hover:border-gray-600 pt-6 md:pt-10 transition-all duration-500"
              >
                <div className="text-[10px] md:text-[11px] font-bold text-gray-400 mb-2 md:mb-6 tracking-widest uppercase">0{idx + 1}</div>
                <div className="relative inline-block pb-1">
                   <h3 className="fluid-h3 serif transition-opacity duration-300 leading-[1.1] group-hover:opacity-[0.88]">
                    {link.label}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <EmailForm />
    </div>
  );
};

export default Home;
