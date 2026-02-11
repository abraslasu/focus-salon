
import React, { useEffect } from 'react';
import { PAGE_CONTENTS } from '../constants';
import TestimonialSlider from '../components/TestimonialSlider';

interface DetailPageProps { id: string; }

const DetailPage: React.FC<DetailPageProps> = ({ id }) => {
  const content = PAGE_CONTENTS[id];
  // These pages benefit from a focused single column and tight spacing
  const isCompactPage = id === 'cum-poti-participa' || id === 'cum-se-desfasoara' || id === 'de-ce-focus';
  const isSingleColumnPage = isCompactPage; 
  const isDeCeFocus = id === 'de-ce-focus';
  
  // Track the number of UL blocks to apply specific styles to the first vs following sections
  let ulCounter = 0;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
  };

  if (!content) {
    return (
      <div className="pt-40 md:pt-48 mx-fluid min-h-screen text-center">
        <h1 className="text-3xl md:text-4xl font-serif">Pagină inexistentă.</h1>
        <a 
          href="#/" 
          onClick={(e) => handleNav(e, '/')}
          className="mt-8 inline-block text-blue-600 hover:underline italic"
        >
          Revino la prima pagină
        </a>
      </div>
    );
  }

  return (
    <div className="pt-[140px] md:pt-48 pb-20 md:pb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mx-fluid">
        <div className="max-w-6xl lg:max-w-7xl mx-auto text-left">
          
          <header className={`${isDeCeFocus ? 'mb-3 md:mb-5' : (isCompactPage ? 'mb-4 md:mb-12' : 'mb-16 md:mb-24')}`}>
            <h1 className={`fluid-h2 font-serif leading-[1.1] tracking-tight text-black ${isCompactPage ? 'mb-1 md:mb-4' : 'mb-6'}`}>
              {content.title}
            </h1>
            {content.subtitle && (
              <p className="fluid-h4 font-normal text-gray-500 py-0.5 md:py-2">
                {content.subtitle}
              </p>
            )}
          </header>
          
          <div className={`max-w-5xl lg:max-w-6xl ${isCompactPage ? 'space-y-6 md:space-y-10' : 'space-y-12 md:space-y-16'}`}>
            {content.blocks.map((block, idx) => {
              switch (block.type) {
                case 'h2':
                  return (
                    <h2 key={idx} className={`fluid-h3 font-serif border-t border-gray-100 text-black leading-tight ${isCompactPage ? 'pt-6 mt-2 md:pt-16 md:mt-8' : 'pt-16 mt-8'}`}>
                      {block.value}
                    </h2>
                  );
                case 'h3':
                  return (
                    <h3 key={idx} className="fluid-h3 font-serif pt-12 mt-4 text-black leading-tight">
                      {block.value}
                    </h3>
                  );
                case 'p':
                  return (
                    <p key={idx} className="fluid-body text-gray-700 leading-relaxed font-normal">
                      {block.value}
                    </p>
                  );
                case 'ul':
                  ulCounter++;
                  const isFirstUlOnParticipate = id === 'cum-poti-participa' && ulCounter === 1;
                  
                  // Reduced gap on mobile for compact pages
                  const gapYClass = isCompactPage 
                    ? 'gap-y-4 md:gap-y-6' 
                    : 'gap-y-10 md:gap-y-12';

                  return (
                    <ul key={idx} className={`grid grid-cols-1 ${isSingleColumnPage ? '' : 'md:grid-cols-2'} gap-x-16 ${gapYClass} list-none`}>
                      {block.items.map((item, i) => {
                        const parts = item.split(/\s*[:–—]\s*/);
                        return (
                          <li key={i} className="relative pl-8 group">
                            {/* Custom Bullet */}
                            <span className={`absolute left-0 w-2 h-2 rounded-full bg-gray-300 group-hover:bg-black transition-colors ${isFirstUlOnParticipate ? 'top-[0.7em]' : 'top-3'}`} />
                            
                            {isFirstUlOnParticipate ? (
                              <p className="fluid-body text-gray-700 leading-relaxed font-normal">
                                {parts.length >= 2 ? (
                                  <>
                                    <span className="font-semibold text-black">{parts[0]}: </span>
                                    <span>{parts.slice(1).join(': ')}</span>
                                  </>
                                ) : item}
                              </p>
                            ) : (
                              parts.length >= 2 ? (
                                <>
                                  <h4 className="fluid-h4 font-semibold text-black mb-1 md:mb-2 tracking-tight">
                                    {parts[0]}
                                  </h4>
                                  <p className="fluid-body text-gray-700 leading-relaxed font-normal">
                                    {parts.slice(1).join(': ')}
                                  </p>
                                </>
                              ) : (
                                <p className="fluid-body text-gray-700 leading-relaxed font-normal">
                                  {item}
                                </p>
                              )
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  );
                case 'article-list':
                  return (
                    <div key={idx} className="space-y-0 border-t border-gray-100">
                      {block.articles.map((article, i) => (
                        <a 
                          key={i} 
                          href="#" 
                          onClick={(e) => e.preventDefault()}
                          className="group block py-10 border-b border-gray-100 hover:bg-white transition-all px-4 -mx-4"
                        >
                          <div className="flex justify-between items-baseline mb-3">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-500 uppercase">{article.category}</span>
                            <span className="text-[10px] text-gray-400 font-medium tracking-widest">{article.date}</span>
                          </div>
                          <h3 className="text-2xl md:text-4xl font-serif group-hover:text-blue-600 group-hover:italic transition-all duration-300 leading-tight">
                            {article.title}
                          </h3>
                        </a>
                      ))}
                    </div>
                  );
                case 'testimonial-slider':
                  return (
                    <TestimonialSlider key={idx} testimonials={block.testimonials} />
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
