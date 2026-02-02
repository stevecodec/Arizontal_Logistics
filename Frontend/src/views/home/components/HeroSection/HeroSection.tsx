// Hero Section Component (View Layer)

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigation } from '@/hooks/useNavigation';
import { getImageUrl } from '@/data/services/imageService';
// import heroVideo from '@/assets/videos/herosection video1.mp4';
import { CONTACT_INFO } from '@/constants';

export const HeroSection = () => {
  const { handleGetQuote } = useNavigation();
  // TODO: Load from backend API
  const [availableLoadsCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* <video 
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline/> */}
        <img 
          src={getImageUrl('truck4')}
          alt="Arizontal Logistics"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center pt-16 pb-36 sm:pb-24">
        <div className="max-w-7xl mx-auto w-full pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
          {/* Content Card */}
          <div 
            className={`bg-gradient-to-r from-[#d58630] to-theme-primary backdrop-blur-sm p-6 sm:p-8 lg:p-12 max-w-2xl shadow-2xl transition-all duration-1000 ease-out delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              From Coast to Coast<sup className="text-base sm:text-xl">®</sup>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-white/95 mb-6 sm:mb-8 leading-relaxed">
              Delivering exceptional logistics services and tailored freight solutions.
            </p>

            {/* CTA Button */}
            <Link 
              to="/contact"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#d58630] text-sm sm:text-base font-bold border-2 border-transparent hover:border-theme-primary hover:bg-slate-100 transition-all whitespace-nowrap cursor-pointer shadow-xl"
            >
              Get Instant Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-[#363636] w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {/* Need Assistance Panel */}
            <div className="px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex items-start space-x-3">
                <i className="ri-customer-service-2-line text-white text-lg sm:text-xl mt-1 flex-shrink-0"></i>
                <div>
                  <h3 className="text-white font-bold text-xs sm:text-sm uppercase mb-2">Need Assistance?</h3>
                  <p className="text-white text-xs mb-1">Call us directly:</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-white text-xs hover:underline break-all">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Are You a Driver Panel */}
            <div className="px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex items-start space-x-3">
                <i className="ri-time-line text-white text-lg sm:text-xl mt-1 flex-shrink-0"></i>
                <div>
                  <h3 className="text-white font-bold text-xs sm:text-sm uppercase mb-2">Are You a Driver?</h3>
                  <p className="text-white text-xs">
                    We're hiring!{' '}
                    <Link 
                      to="/careers" 
                      className="text-theme-primary font-semibold hover:text-theme-secondary hover:underline transition-colors"
                    >
                      Learn more
                    </Link>{' '}
                    about our driving opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Located At Panel */}
            <div className="px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-white text-lg sm:text-xl mt-1 flex-shrink-0"></i>
                <div>
                  <h3 className="text-white font-bold text-xs sm:text-sm uppercase mb-2">Located At</h3>
                  <p className="text-white text-xs">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Available Loads Panel */}
            <div className="px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex items-start space-x-3">
                <i className="ri-truck-line text-white text-lg sm:text-xl mt-1 flex-shrink-0"></i>
                <div>
                  <h3 className="text-white font-bold text-xs sm:text-sm uppercase mb-2">Available Loads</h3>
                  <p className="text-white text-xs">
                    {availableLoadsCount.toLocaleString()} loads.{' '}
                    <Link 
                      to="/careers" 
                      className="text-theme-primary font-semibold hover:text-theme-secondary hover:underline transition-colors"
                    >
                      Apply
                    </Link>{' '}
                    to work with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - above bottom bar on mobile (bar ~4 rows stacked), at bottom on sm+ */}
      <div className="absolute bottom-[11rem] sm:bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <i className="ri-arrow-down-line text-white text-lg" aria-hidden></i>
        </div>
      </div>
    </div>
  );
};
