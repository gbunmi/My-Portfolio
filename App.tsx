import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import EmploymentView from './components/EmploymentView';
import FeaturedWorkView, { PROJECT_DATA } from './components/FeaturedWorkView';
import Loader from './components/Loader';

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
  const [isLoading, setIsLoading] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    // Disable browser scroll restoration to ensure we control the scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handlePopState = () => {
      setView(getViewFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);

    // If loading root, replace with /home to match requested format
    if (window.location.pathname === '/' || window.location.pathname === '') {
      try {
        window.history.replaceState({}, '', '/home');
      } catch (e) {
        console.warn('History replacement blocked:', e);
      }
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top whenever view changes to ensure "new page" feel
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const preloadImages = async () => {
    // Gather all images from featured work
    const imagesToLoad: string[] = [];
    Object.values(PROJECT_DATA).forEach(project => {
      if (project.images && project.images.length > 0) {
        imagesToLoad.push(...project.images);
      }
    });

    if (imagesToLoad.length === 0) return;

    const total = imagesToLoad.length;
    let loaded = 0;

    const updateProgress = () => {
        loaded++;
        const percentage = (loaded / total) * 100;
        setLoadProgress(percentage);
    };

    const promises = imagesToLoad.map(src => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            updateProgress();
            resolve();
        };
        img.onerror = () => {
            updateProgress();
            resolve(); // Resolve anyway to avoid blocking
        };
      });
    });

    // Race condition safety: if images load instantly or fail, ensure we wait at least a moment for the UI
    const minTimePromise = new Promise<void>(resolve => setTimeout(resolve, 800));
    
    await Promise.all([Promise.all(promises), minTimePromise]);
  };

  const navigate = async (newView: ViewState) => {
    let path = '/home';
    if (newView === 'featured') path = '/featuredwork';
    if (newView === 'employment') path = '/employment-history';

    // Always trigger loading state to provide visual feedback for navigation
    setIsLoading(true);
    setLoadProgress(0);

    if (newView === 'featured') {
        // Start "fake" progress to ensure user sees something if it hangs
        const fakeInterval = setInterval(() => {
            setLoadProgress(old => {
                if (old >= 90) return old;
                return old + (Math.random() * 10);
            });
        }, 200);

        await preloadImages();
        
        clearInterval(fakeInterval);
        setLoadProgress(100);
        
        // Short delay to show 100%
        setTimeout(() => {
            try {
              window.history.pushState({}, '', path);
            } catch (e) {
              console.warn('Navigation history blocked:', e);
            }
            setView(newView);
            window.scrollTo(0, 0);
            // Small delay before revealing content
            setTimeout(() => setIsLoading(false), 200);
        }, 200);
    } else {
        // For other views, simulate a quick load to make it feel like a transition
        // This solves the "static" feeling by fading out and in
        const interval = setInterval(() => {
            setLoadProgress(prev => Math.min(prev + 25, 95));
        }, 50);

        setTimeout(() => {
            clearInterval(interval);
            setLoadProgress(100);
            
            try {
              window.history.pushState({}, '', path);
            } catch (e) {
              console.warn('Navigation history blocked:', e);
            }
            setView(newView);
            window.scrollTo(0, 0);
            
            setTimeout(() => {
                setIsLoading(false);
            }, 150);
        }, 400); // 400ms transition time
    }
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

  const isHome = view === 'home';

  return (
    <>
    {isLoading && <Loader progress={loadProgress} />}
    <div className={`flex flex-col bg-[#F8F5F0] text-[#041727] font-mono selection:bg-yellow-200 ${isHome ? 'min-h-screen relative md:fixed md:inset-0 md:h-full' : 'fixed inset-0 w-full h-full'} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
      {/* Header */}
      <header className="h-14 shrink-0 border-b border-[#DEDBD6] flex justify-between items-center px-4 md:px-8 z-50 bg-[#F8F5F0] sticky top-0 md:relative">
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
      <main className="flex-1 bg-[#F8F5F0] border-t-0 min-h-0 relative">
        {view === 'home' && <HomeView onNavigate={navigate} />}
        {view === 'employment' && <EmploymentView />}
        {view === 'featured' && <FeaturedWorkView />}
      </main>

      {/* Footer - Only show on Home view */}
      {view === 'home' && (
        <div className="w-full">
          <Footer />
        </div>
      )}
    </div>
    </>
  );
};

export default App;