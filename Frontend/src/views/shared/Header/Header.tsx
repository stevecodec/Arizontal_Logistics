// Header Component (View Layer)

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScroll } from '@/hooks/useScroll';
import { useNavigation } from '@/hooks/useNavigation';
import { APP_NAME, APP_SUBTITLE, NAVIGATION_ITEMS } from '@/constants';
import { getImageUrl } from '@/data/services/imageService';

export const Header = () => {
  const scrolled = useScroll();
  const { handleGetQuote } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src={getImageUrl('logo')}
              alt={`${APP_NAME} Logo`}
              className="h-9 w-auto object-contain"
            />
            <div>
              <h1 className={`text-base font-bold ${scrolled ? 'text-slate-900' : 'text-white'}`}>{APP_NAME}</h1>
              <p className={`text-sm ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}>{APP_SUBTITLE}</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item) => (
              item.isRoute ? (
                <Link 
                  key={item.href}
                  to={item.href} 
                  className={`text-sm font-medium hover:text-theme-primary hover:underline hover:underline-offset-4 decoration-theme-primary transition-all whitespace-nowrap ${scrolled ? 'text-slate-900' : 'text-white'}`}
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={`text-sm font-medium hover:text-theme-primary hover:underline hover:underline-offset-4 decoration-theme-primary transition-all whitespace-nowrap ${scrolled ? 'text-slate-900' : 'text-white'}`}
                >
                  {item.label}
                </a>
              )
            ))}
            <button 
              onClick={handleGetQuote}
              className="px-4 py-1.5 bg-gradient-to-r from-theme-primary to-theme-dark text-white text-sm font-semibold rounded hover:from-theme-dark hover:to-theme-darker transition-all whitespace-nowrap cursor-pointer shadow-lg"
            >
              Make an Enquiry
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`md:hidden inline-flex items-center justify-center rounded-md p-2 transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className={`mt-2 rounded-lg border ${scrolled ? 'border-slate-200 bg-white' : 'border-white/10 bg-white/95'} shadow-lg`}>
            <div className="flex flex-col py-2">
              {NAVIGATION_ITEMS.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={handleNavClick}
                    className="px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
              <button
                onClick={() => {
                  handleNavClick();
                  handleGetQuote();
                }}
                className="mx-4 my-2 px-4 py-2 bg-gradient-to-r from-theme-primary to-theme-dark text-white text-sm font-semibold rounded hover:from-theme-dark hover:to-theme-darker transition-all shadow-lg"
              >
                Make an Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
