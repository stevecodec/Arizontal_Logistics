// Hero Section Component (View Layer)

import { useNavigation } from '@/hooks/useNavigation';
import { getImageUrl } from '@/data/services/imageService';

export const HeroSection = () => {
  const { handleGetQuote } = useNavigation();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={getImageUrl('hero')}
          alt="Professional truck driver in cab"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Headline */}
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
              From Coast to Coast<sup className="text-base">®</sup>
            </h2>

            <p className="text-sm lg:text-base text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Delivering exceptional logistics services with innovative, tailored freight solutions designed for your success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={handleGetQuote}
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-sm hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer shadow-xl"
              >
                Get Instant Quote
              </button>
              <button className="px-6 py-2.5 bg-white text-slate-900 text-sm font-semibold rounded-sm hover:bg-slate-100 transition-all whitespace-nowrap cursor-pointer shadow-xl">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <i className="ri-arrow-down-line text-white text-lg"></i>
        </div>
      </div>
    </div>
  );
};
