// Header Component (View Layer)

import { Link } from 'react-router-dom';
import { useScroll } from '@/hooks/useScroll';
import { useNavigation } from '@/hooks/useNavigation';
import { APP_NAME, APP_SUBTITLE, NAVIGATION_ITEMS } from '@/constants';
import { getImageUrl } from '@/data/services/imageService';

export const Header = () => {
  const scrolled = useScroll();
  const { handleGetQuote } = useNavigation();

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
              <h1 className={`text-sm font-bold ${scrolled ? 'text-slate-900' : 'text-white'}`}>{APP_NAME}</h1>
              <p className={`text-xs ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}>{APP_SUBTITLE}</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item) => (
              item.isRoute ? (
                <Link 
                  key={item.href}
                  to={item.href} 
                  className={`text-xs font-medium hover:text-theme-primary hover:underline hover:underline-offset-4 decoration-theme-primary transition-all whitespace-nowrap ${scrolled ? 'text-slate-900' : 'text-white'}`}
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={`text-xs font-medium hover:text-theme-primary hover:underline hover:underline-offset-4 decoration-theme-primary transition-all whitespace-nowrap ${scrolled ? 'text-slate-900' : 'text-white'}`}
                >
                  {item.label}
                </a>
              )
            ))}
            <button 
              onClick={handleGetQuote}
              className="px-4 py-1.5 bg-gradient-to-r from-theme-primary to-theme-dark text-white text-xs font-semibold rounded hover:from-theme-dark hover:to-theme-darker transition-all whitespace-nowrap cursor-pointer shadow-lg"
            >
              Make an Enquiry
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
