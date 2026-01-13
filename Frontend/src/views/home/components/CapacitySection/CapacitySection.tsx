// Why Choose Us Section Component (View Layer)

import { useNavigation } from '@/hooks/useNavigation';
import { CAPACITY_SERVICES } from '@/constants/home';

export const CapacitySection = () => {
  const { handleGetQuote } = useNavigation();

  // Show first 3 services for the Why Choose Us section
  const displayedServices = CAPACITY_SERVICES.slice(0, 3);

  return (
    <div className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Why Choose Us Content */}
          <div className="lg:pt-[200px]">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              <span className="border-b-2 border-theme-primary pb-1">Why Choose</span> Us?
            </h2>
            <p className="text-sm text-slate-600 mb-8">
              Make shipping your freight simple with our transportation expertise and multimodal services. You can get customized solutions that make sense for your business.
            </p>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="space-y-4">
            {displayedServices.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-lg font-bold">
                        {service.title}
                      </h3>
                    </div>
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
