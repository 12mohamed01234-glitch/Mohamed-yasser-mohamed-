
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isPublicPage = location.pathname.startsWith('/preview/');

  if (isPublicPage) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="glass sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between h-20 items-center">
            {/* Concept 2: Interlocked Logic Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                {/* The "S" Brackets Icon */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-500">
                  <path d="M12 8H28V14H18V20H28V32H12V26H22V20H12V8Z" fill="url(#logo_gradient)" />
                  <defs>
                    <linearGradient id="logo_gradient" x1="12" y1="8" x2="28" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366F1" />
                      <stop offset="1" stopColor="#22D3EE" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Subtle Glow behind icon */}
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full scale-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-2xl font-[800] tracking-tighter text-[#0F172A] pt-1">Sitezy</span>
            </Link>

            <div className="hidden md:flex space-x-10">
              <Link to="/" className="text-xs font-black text-gray-400 hover:text-indigo-600 transition-colors uppercase tracking-[0.2em]">Home</Link>
              <Link to="/dashboard" className="text-xs font-black text-gray-400 hover:text-indigo-600 transition-colors uppercase tracking-[0.2em]">Library</Link>
              <Link to="/engine" className="text-xs font-black text-gray-400 hover:text-indigo-600 transition-colors uppercase tracking-[0.2em]">The Engine</Link>
              <Link to="/arch" className="text-xs font-black text-gray-400 hover:text-indigo-600 transition-colors uppercase tracking-[0.2em]">Blueprint</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/wizard" className="bg-[#0F172A] text-white px-8 py-3.5 rounded-2xl text-sm font-bold hover:bg-black transition-all shadow-2xl shadow-indigo-500/10 hover:-translate-y-0.5 active:translate-y-0">
                Launch Wizard
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow">{children}</main>
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
               <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8H28V14H18V20H28V32H12V26H22V20H12V8Z" fill="#CBD5E1" />
               </svg>
               <span className="text-lg font-black tracking-tighter">Sitezy</span>
            </div>
            <p className="text-sm font-medium text-gray-400 text-center md:text-left">The world's first autonomous <br/> website factory.</p>
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
            <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
