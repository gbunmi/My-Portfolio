import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import EmploymentView from './components/EmploymentView';
import FeaturedWorkView from './components/FeaturedWorkView';

type ViewState = 'home' | 'employment' | 'featured';

const App: React.FC = () => {
  // --- Router Logic ---
  const getViewFromPath = (path: string): ViewState => {
    const p = path.toLowerCase();
    if (p.includes('/featuredwork')) return 'featured';
    if (p.includes('/employment-history')) return 'employment';
    return 'home';
  };

  const [view, setView] = useState<ViewState>(() => getViewFromPath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setView(getViewFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);

    // If loading root, replace with /home to match requested format
    if (window.location.pathname === '/' || window.location.pathname === '') {
      window.history.replaceState({}, '', '/home');
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (newView: ViewState) => {
    let path = '/home';
    if (newView === 'featured') path = '/featuredwork';
    if (newView === 'employment') path = '/employment-history';

    window.history.pushState({}, '', path);
    setView(newView);
  };
  // --------------------

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('home');
  };

  const getPageTitle = (view: ViewState) => {
    switch (view) {
      case 'employment':
        return 'EMPLOYMENT HISTORY';
      case 'featured':
        return 'FEATURED WORK';
      default:
        return '';
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full flex flex-col bg-[#f4f4f0] text-[#041727] font-mono selection:bg-yellow-200">
      {/* Header */}
      <header className="h-14 shrink-0 border-b border-gray-300 flex justify-between items-center px-4 md:px-8 z-50 bg-[#f4f4f0]">
        <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider overflow-hidden">
          <a 
            href="/home" 
            onClick={handleHomeClick}
            className="hover:opacity-60 transition-opacity whitespace-nowrap shrink-0"
          >
            Bunmi Gbadamosi
          </a>
          {view !== 'home' && (
            <>
              <span className="text-[#041727] shrink-0">//</span>
              <span className="text-[#465460] whitespace-nowrap truncate">
                {getPageTitle(view)}
              </span>
            </>
          )}
        </div>
        <div className="text-xs md:text-sm font-bold uppercase tracking-wider shrink-0 ml-4">
          <Clock />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 min-h-0 relative bg-[#f4f4f0] border-t-0">
        {view === 'home' && <HomeView onNavigate={navigate} />}
        {view === 'employment' && <EmploymentView />}
        {view === 'featured' && <FeaturedWorkView />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;