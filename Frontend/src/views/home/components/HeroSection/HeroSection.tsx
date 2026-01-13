// Hero Section Component (View Layer)

import { useState } from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import heroVideo from '@/assets/videos/herosection video.mp4';
import { AVAILABLE_LOADS } from '@/constants/home';
import { CONTACT_INFO } from '@/constants';

export const HeroSection = () => {
  const { handleGetQuote } = useNavigation();
  const [selectedLoad, setSelectedLoad] = useState<string>('');

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
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
              Delivering exceptional logistics services, tailored freight solutions designed for your success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={handleGetQuote}
                className="px-6 py-2.5 bg-gradient-to-r from-theme-primary to-theme-dark text-white text-sm font-semibold rounded-sm hover:from-theme-dark hover:to-theme-darker transition-all whitespace-nowrap cursor-pointer shadow-xl"
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

      {/* Bottom Info Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-[#363636] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Need Assistance Panel */}
            <div className="px-6 py-6">
              <div className="flex items-start space-x-3">
                <i className="ri-customer-service-2-line text-white text-xl mt-1"></i>
                <div>
                  <h3 className="text-white font-bold text-sm uppercase mb-2">Need Assistance?</h3>
                  <p className="text-white text-xs mb-1">Call us directly:</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-white text-xs hover:underline">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Are You a Driver Panel */}
            <div className="px-6 py-6">
              <div className="flex items-start space-x-3">
                <i className="ri-time-line text-white text-xl mt-1"></i>
                <div>
                  <h3 className="text-white font-bold text-sm uppercase mb-2">Are You a Driver?</h3>
                  <p className="text-white text-xs">
                    We're hiring! Learn more about our driving opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Located At Panel */}
            <div className="px-6 py-6">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-white text-xl mt-1"></i>
                <div>
                  <h3 className="text-white font-bold text-sm uppercase mb-2">Located At</h3>
                  <p className="text-white text-xs">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Available Loads Panel */}
            <div className="px-6 py-6">
              <div className="flex items-start space-x-3">
                <i className="ri-truck-line text-white text-xl mt-1"></i>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm uppercase mb-3">Available Loads</h3>
                  <select
                    value={selectedLoad}
                    onChange={(e) => setSelectedLoad(e.target.value)}
                    className="w-full px-4 py-3 border border-white rounded-none focus:outline-none focus:border-white text-sm bg-[#424242] text-white cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      paddingRight: '40px',
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#424242', color: '#ffffff' }}>
                      Select a Load
                    </option>
                    {AVAILABLE_LOADS.map((load) => (
                      <option key={load.id} value={load.id} style={{ backgroundColor: '#424242', color: '#ffffff' }}>
                        {load.origin} → {load.destination} | {load.rate} | {load.equipmentType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
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
