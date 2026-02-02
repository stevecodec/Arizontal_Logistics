// Why Choose Us Section Component (View Layer)

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const CapacitySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger button visibility animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  // Why Choose Us reasons
  const whyChooseUsReasons = [
    {
      title: 'Connectivity',
      shortDescription: 'Connect with extensive carrier network',
    },
    {
      title: 'Transparency',
      shortDescription: 'Real-time visibility into shipments',
    },
    {
      title: 'Timely',
      shortDescription: 'Reliable on-time delivery commitment',
    },
  ];

  return (
    <div className="py-6 sm:py-8 bg-white border-t border-gray-200">
      {/* Decorative divider bar */}
      <div className="flex justify-end pb-6 sm:pb-8 px-4 sm:px-0">
        <div className="w-24 sm:w-32 h-0.5 bg-theme-primary rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left Column - Why Choose Us Content */}
          <div className="lg:pt-[200px]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              <span className="border-b-2 border-theme-primary pb-1">Why Choose</span> Us?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 sm:mb-8">
              Make shipping your freight simple with our coordinated carriers & optimized routes. Our trucking thrives on this <span className="text-theme-primary font-semibold">three pillars</span>.
            </p>
            <Link
              to="/about"
              className={`inline-block px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-slate-900 text-slate-900 text-xs sm:text-sm font-semibold rounded-sm hover:bg-slate-900 hover:text-white transition-all whitespace-nowrap cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } transition-all duration-500`}
            >
              Read More
            </Link>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="space-y-3 sm:space-y-4">
            {whyChooseUsReasons.map((reason, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-28 sm:h-32 bg-gradient-to-r from-slate-900 to-slate-100 group-hover:from-theme-primary group-hover:to-white">
                  {/* Number Badge */}
                  <div className={`absolute ${index === 1 ? 'top-2 sm:top-3 right-2 sm:right-3' : 'top-2 sm:top-3 left-2 sm:left-3'} w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-lg flex items-center justify-center font-bold text-lg sm:text-xl text-white group-hover:bg-white group-hover:text-theme-primary transition-all duration-300`}>
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                    <h3 className="text-white text-base sm:text-lg font-bold mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-white/90 text-xs">
                      {reason.shortDescription}
                    </p>
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
