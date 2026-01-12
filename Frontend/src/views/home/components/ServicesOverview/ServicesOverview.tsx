// Services Overview Component (View Layer)

import { SERVICE_CARDS } from '@/constants/home';

export const ServicesOverview = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
            Technology that Empowers
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl mx-auto">
            Change the way you do business with our platform. We're eliminating inefficiencies by creating one place for you to manage every step of the transportation process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICE_CARDS.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6">{service.subtitle}</p>
                </div>
                <div className="w-20 h-20 flex items-center justify-center">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-checkbox-circle-fill text-green-500 text-xl"></i>
                    </div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="px-6 py-3 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all whitespace-nowrap cursor-pointer">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
