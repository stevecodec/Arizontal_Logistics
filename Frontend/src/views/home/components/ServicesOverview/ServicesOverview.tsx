// Services Overview Component (View Layer)

import { Link } from 'react-router-dom';
import { SERVICE_CARDS } from '@/constants/home';

export const ServicesOverview = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 pb-2 border-b-2 border-theme-primary inline-block">
            OUR SERVICES
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl mx-auto mt-4">
            Change the way you do business with our platform. We're eliminating inefficiencies by creating one place for you to manage every step of the transportation process.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICE_CARDS.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6">{service.subtitle}</p>
                </div>
                <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 ml-4">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <i className="ri-checkbox-circle-line text-theme-primary text-xl"></i>
                    </div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link 
                  to={service.subtitle === 'For Carriers' ? '/careers' : '/contact'}
                  className="inline-flex items-center px-4 py-2 text-theme-primary text-sm font-medium border border-theme-primary rounded-lg hover:bg-theme-bg-lighter transition-all duration-200 whitespace-nowrap cursor-pointer"
                >
                  <span>{service.subtitle === 'For Carriers' ? 'Apply Here' : 'Contact Us'}</span>
                  <i className="ri-arrow-right-line ml-2 text-sm"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
