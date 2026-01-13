// Trust Indicators Component (View Layer)

import { getImageUrl } from '@/data/services/imageService';

export const TrustIndicators = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};
