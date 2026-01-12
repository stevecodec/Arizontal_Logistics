// Trust Indicators Component (View Layer)

import { useHomeViewModel } from '@/viewmodels/home/useHomeViewModel';
import { getImageUrl } from '@/data/services/imageService';

export const TrustIndicators = () => {
  const { cities, activeCity, handleCityHover } = useHomeViewModel();

  return (
    <div className="relative overflow-hidden">
      {/* Fixed Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={getImageUrl('trustIndicatorsBackground')}
          alt="Truck on Highway"
          className="w-full h-full object-cover fixed top-0 left-0"
          style={{ zIndex: -1 }}
        />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
              Our Shipping Network
            </h2>
          </div>

          {/* Map Container */}
          <div className="relative w-full h-[400px] bg-slate-900/40 backdrop-blur-sm rounded overflow-hidden">
            {/* US Map Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={getImageUrl('trustIndicatorsMap')}
                alt="US Map"
                className="w-full h-full object-contain opacity-50"
              />
            </div>

            {/* City Markers */}
            {cities.map((city, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: city.left, top: city.top }}
                onMouseEnter={() => handleCityHover(city.name)}
                onMouseLeave={() => handleCityHover(null)}
              >
                {/* Pulse Animation */}
                <div className="absolute inset-0 w-6 h-6 bg-orange-500 rounded-full animate-ping opacity-75"></div>
                
                {/* Marker Dot */}
                <div className="relative w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* City Label */}
                <div className={`absolute left-1/2 -translate-x-1/2 top-8 whitespace-nowrap transition-all duration-300 ${
                  activeCity === city.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}>
                  <div className="bg-white rounded-lg shadow-xl px-4 py-2 border border-slate-200 rounded-sm">
                    <div className="font-bold text-slate-900 text-sm">{city.name}</div>
                    <div className="text-xs text-slate-600">{city.state}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
