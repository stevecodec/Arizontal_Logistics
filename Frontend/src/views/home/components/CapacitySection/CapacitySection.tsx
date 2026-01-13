// Capacity Section Component (View Layer)

import { useNavigation } from '@/hooks/useNavigation';
import { CAPACITY_SERVICES } from '@/constants/home';

export const CapacitySection = () => {
  const { handleGetQuote } = useNavigation();

  return (
    <div className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
            Capacity to Deliver
          </h2>
          <p className="text-sm text-slate-300 max-w-3xl mx-auto">
            Make shipping your freight simple with our transportation expertise and multimodal services. You can get customized solutions that make sense for your business.
          </p>
        </div>

        {/* Services Tabs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CAPACITY_SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800 rounded-sm overflow-hidden hover:bg-slate-700 transition-all duration-300 cursor-pointer"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-white">{service.title}</h3>
                  <i className="ri-arrow-right-line text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="w-full h-32 flex items-center justify-center">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-theme-primary to-theme-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>

        {/* CTA Button at Bottom */}
        <div className="text-center">
          <button 
            onClick={handleGetQuote}
            className="px-8 py-4 bg-gradient-to-r from-theme-primary to-theme-dark text-white font-semibold rounded-sm hover:from-theme-dark hover:to-theme-darker transition-all whitespace-nowrap cursor-pointer shadow-xl"
          >
            Ship with Us
          </button>
        </div>
      </div>
    </div>
  );
};
