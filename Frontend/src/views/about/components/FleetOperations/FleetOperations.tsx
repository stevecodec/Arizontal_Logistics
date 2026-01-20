// Fleet Operations Component

import { getImageUrl } from '@/data/services/imageService';

const fleetFeatures = [
  'Company-Owned Trucks & Equipment',
  'Very Experienced & Qualified Drivers',
  'We do Routine Equipment Inspections & Maintenance',
  'ELD-Compliant Operations',
];

export const FleetOperations = () => {
  return (
    <section className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 order-2 lg:order-1 shadow-xl">
            <img
              src={getImageUrl('truck2')}
              alt="Fleet operations"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 bg-[#d58630]/10 border-l-4 border-[#d58630] mb-6">
              <span className="text-sm font-semibold text-[#d58630]">OUR FLEET</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Fleet & Operations
            </h2>
            <p className="text-slate-600 mb-6">
              We prioritize equipment reliability and driver professionalism to protect every shipment.
            </p>
            <ul className="space-y-3">
              {fleetFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-[#d58630]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-[#d58630]"></div>
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
