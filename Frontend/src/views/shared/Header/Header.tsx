// Header Component (View Layer)

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScroll, useTopBarHeight } from '@/hooks';
import { APP_NAME, NAVIGATION_ITEMS } from '@/constants';
import { getImageUrl } from '@/data/services/imageService';

export const Header = () => {
  const scrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const topBarHeight = useTopBarHeight();
  const gapSize = 4; // Professional gap in pixels

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <>
      {/* Spacer Gap */}
      <div 
        className="fixed left-0 right-0 z-[49] bg-slate-100/30 backdrop-blur-sm"
        style={{ 
          top: `${topBarHeight}px`,
          height: `${gapSize}px`
        }}
      />
      
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 backdrop-blur ${scrolled ? 'bg-white/95 shadow-lg' : 'bg-slate-900/70'}`}
        style={{ top: `${topBarHeight + gapSize}px` }}
      >
        <div className="max-w-7xl mx-auto pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] lg:pl-8 lg:pr-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img 
                src={getImageUrl('logo1')}
                alt={`${APP_NAME} Logo`}
                className="h-9 w-auto object-contain"
              />
              <div>
                <h1 className={`text-base font-bold ${scrolled ? 'text-slate-900' : 'text-white'}`}>{APP_NAME}</h1>
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
              <Link 
                to="/contact"
                className="px-4 py-1.5 bg-gradient-to-r from-theme-primary to-theme-dark text-white text-sm font-semibold rounded hover:from-theme-dark hover:to-theme-darker transition-all whitespace-nowrap cursor-pointer shadow-lg"
              >
                Make an Enquiry
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className={`md:hidden inline-flex items-center justify-center rounded-md min-h-[44px] min-w-[44px] p-2 transition-colors z-[60] ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleNavClick}
        aria-hidden="true"
      />

      {/* Mobile Full-Screen Menu */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-[60] md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className={`flex items-center justify-between p-4 border-b border-slate-200 transition-all ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4'
          }`}
          style={{
            transitionDelay: isMenuOpen ? '50ms' : '0ms',
            transitionDuration: '300ms'
          }}>
            <div className="flex items-center space-x-2">
              <img 
                src={getImageUrl('logo1')}
                alt={`${APP_NAME} Logo`}
                className="h-8 w-auto object-contain"
              />
              <h2 className="text-base font-bold text-slate-900">{APP_NAME}</h2>
            </div>
            <button
              type="button"
              onClick={handleNavClick}
              className="inline-flex items-center justify-center rounded-md min-h-[44px] min-w-[44px] p-2 text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="flex flex-col space-y-1">
              {NAVIGATION_ITEMS.map((item, index) => (
                item.isRoute ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={handleNavClick}
                    className={`px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-100 rounded-lg transition-all ${
                      isMenuOpen 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${100 + index * 50}ms` : '0ms',
                      transitionDuration: '300ms'
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-100 rounded-lg transition-all ${
                      isMenuOpen 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${100 + index * 50}ms` : '0ms',
                      transitionDuration: '300ms'
                    }}
                  >
                    {item.label}
                  </a>
                )
              ))}
              
              {/* Make an Enquiry Button - Inline */}
              <Link
                to="/contact"
                onClick={handleNavClick}
                className={`mt-4 px-6 py-3 bg-gradient-to-r from-theme-primary to-theme-dark text-white text-base font-semibold rounded-lg hover:from-theme-dark hover:to-theme-darker shadow-lg text-center transition-all ${
                  isMenuOpen 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-8 scale-95'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${100 + NAVIGATION_ITEMS.length * 50}ms` : '0ms',
                  transitionDuration: '400ms'
                }}
              >
                Make an Enquiry
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
