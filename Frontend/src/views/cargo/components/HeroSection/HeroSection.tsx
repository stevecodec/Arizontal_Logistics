// Hero Section Component

import { getImageUrl } from '@/data/services/imageService';

export const HeroSection = () => {
  return (
    <section className="relative bg-slate-900 text-white min-h-[500px] sm:min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src={getImageUrl('truck1')}
          alt="Owner-Operator Partnership"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/90 via-transparent via-40% to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-24">
        <div className="max-w-2xl">
          {/* Yellow accent line */}
          <div className="w-12 sm:w-16 h-1 bg-[#fbbf24] mb-4 sm:mb-6"></div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 sm:mb-5 leading-tight">
            Together.
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 leading-relaxed">
            Because you have the truck and we have the load.
          </p>
          
          <button
            onClick={() => {
              document.getElementById('registration-form')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-white text-white text-sm font-semibold hover:border-[#d58630] transition-all group"
          >
            <span>Become a partner now</span>
            <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </section>
  );
};
