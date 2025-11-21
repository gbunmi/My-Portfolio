import React, { useState } from 'react';
import Clock from './components/Clock';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import EmploymentView from './components/EmploymentView';

type ViewState = 'home' | 'employment';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setView('home');
  };

  return (
    <div className="fixed inset-0 w-full h-full flex flex-col bg-[#f4f4f0] text-gray-900 font-mono selection:bg-yellow-200">
      {/* Header */}
      <header className="h-14 shrink-0 border-b border-gray-300 flex justify-between items-center px-4 md:px-8 z-50 bg-[#f4f4f0]">
        <a 
          href="/" 
          onClick={handleHomeClick}
          className="text-xs md:text-sm font-bold uppercase tracking-wider hover:opacity-60 transition-opacity"
        >
          Bunmi Gbadamosi
        </a>
        <div className="text-xs md:text-sm font-bold uppercase tracking-wider">
          <Clock />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 min-h-0 relative bg-[#f4f4f0]">
        {view === 'home' ? (
          <HomeView onNavigate={setView} />
        ) : (
          <EmploymentView />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;