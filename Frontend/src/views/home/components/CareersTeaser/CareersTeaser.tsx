// Careers Teaser Component (View Layer)

import { getImageUrl } from '@/data/services/imageService';

export const CareersTeaser = () => {
  return (
    <div className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
            People You Trust
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl mx-auto">
            Since our founding, our people have set us apart and made us into the leading transportation company we are today. Learn why thousands of employees choose to work at Arizontal.
          </p>
        </div>

        {/* CTA Section with Gradient and Truck Image */}
        <div className="relative h-[400px] rounded overflow-hidden">
          {/* Truck Image */}
          <div className="absolute inset-0">
            <img 
              src={getImageUrl('careersTeaser')}
              alt="Arizontal Logistics Truck"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a472a] via-[#2d5a3d]/95 via-[#2d5a3d]/60 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-2xl px-12 py-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                Let's deliver success
              </h3>
              <p className="text-sm text-white/90 mb-6 leading-relaxed">
                From road transport to freight forwarding, we offer flexible logistics solutions designed to grow with your business. Let's build a partnership that lasts.
              </p>
              <button className="px-6 py-2.5 bg-white text-slate-900 text-sm font-semibold rounded-sm hover:bg-slate-100 transition-all whitespace-nowrap cursor-pointer shadow-xl">
                Explore Careers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
