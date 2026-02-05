// Requirements Section Component

import { getImageUrl } from '@/data/services/imageService';

const requirements = [
  'Hold active operating authority or lease on under Arizontal Transportation',
  'Maintain valid CDL and medical certification',
  'Carry equipment that meets FMCSA and company safety standards',
  'Maintain required insurance coverage',
  'Operate in compliance with all federal and state regulations',
];

const openLiveChat = () => {
  // Open Tawk.to chat widget
  if (typeof window.Tawk_API !== 'undefined' && window.Tawk_API) {
    window.Tawk_API.maximize();
  } else {
    console.warn('Tawk.to chat is not loaded yet');
  }
};

export const RequirementsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
          {/* C-Shaped Content - Left Side */}
          <div className="relative z-20 w-full lg:w-[55%]">
            <div className="bg-gradient-to-br from-theme-dark to-slate-900 text-white py-8 sm:py-10 lg:py-12 px-6 sm:px-8 lg:px-12 rounded-r-[80px] sm:rounded-r-[120px] lg:rounded-r-[200px] shadow-2xl">
              <div className="max-w-xl">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                  Let's connect
                </h2>
                
                <p className="text-xs sm:text-sm lg:text-base text-white/90 mb-4 sm:mb-6 leading-relaxed">
                  We're here to help with all your logistics needs. Reach out to us for personalized solutions and expert advice.
                </p>

                {/* Requirements List - Simplified with ticks */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start text-[10px] sm:text-xs lg:text-sm">
                      <i className="ri-check-line text-theme-secondary text-sm sm:text-base lg:text-lg mr-2 mt-0.5 flex-shrink-0"></i>
                      <span className="text-white/90">{req}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="flex justify-start">
                  <button
                    onClick={openLiveChat}
                    className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-white/40 text-white text-xs sm:text-sm font-semibold hover:border-theme-secondary hover:bg-white/10 transition-all group"
                  >
                    <span>Talk to us</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right Side (positioned behind the C-shape) */}
          <div className="absolute inset-y-0 left-0 right-0 z-10 flex items-center">
            <div className="w-full h-full flex justify-end">
              <div className="w-[70%] sm:w-[65%] lg:w-[70%] h-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                <img
                  src={getImageUrl('truck3')}
                  alt="Professional team collaboration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
