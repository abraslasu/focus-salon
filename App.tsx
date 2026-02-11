
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentHash(hash);
      setIsMenuOpen(false); 
      
      // Reset scroll position on route change, unless it's an anchor link
      if (hash === '#/join-form') {
        // Small timeout to allow Home to render if we are coming from another page
        setTimeout(() => {
          const element = document.getElementById('join-form');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple Router Logic
  const renderContent = () => {
    switch (currentHash) {
      case '#/':
      case '#/join-form':
        return <Home />;
      case '#/de-ce-focus':
        return <DetailPage id="de-ce-focus" />;
      case '#/cum-se-desfasoara':
        return <DetailPage id="cum-se-desfasoara" />;
      case '#/articole':
        return <DetailPage id="articole" />;
      case '#/cum-poti-participa':
        return <DetailPage id="cum-poti-participa" />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {/* 
        Main content wrapper: 
        - z-10 stays above the fixed footer
        - bg-[#F5F3F1] hides the footer underneath
        - The margin-bottom creates the window for the reveal effect
      */}
      <div className="relative z-10 bg-[#F5F3F1] min-h-screen mb-[60vh] md:mb-[80vh] shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
        <Header 
          onMenuOpen={() => setIsMenuOpen(true)} 
          showBackButton={currentHash !== '#/' && currentHash !== '#/join-form'}
        />
        
        <MenuOverlay 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
        />

        <main>
          {renderContent()}
        </main>
      </div>

      {/* Footer is fixed at the very bottom, behind the main content */}
      <Footer currentHash={currentHash} />
    </>
  );
};

export default App;
