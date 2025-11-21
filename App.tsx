import React, { useState } from 'react';
import Clock from './components/Clock';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import EmploymentView from './components/EmploymentView';
import FeaturedWorkView from './components/FeaturedWorkView';

type ViewState = 'home' | 'employment' | 'featured';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setView('home');
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
            href="/" 
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
        {view === 'home' && <HomeView onNavigate={setView} />}
        {view === 'employment' && <EmploymentView />}
        {view === 'featured' && <FeaturedWorkView />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
