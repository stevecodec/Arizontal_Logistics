// Fleet Operations Component

import { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '@/data/services/imageService';

const fleetFeatures = [
  'Company-Owned Trucks & Equipment',
  'Very Experienced & Qualified Drivers',
  'We do Routine Equipment Inspections & Maintenance',
  'ELD-Compliant Operations',
];

export const FleetOperations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`relative h-96 order-2 lg:order-1 shadow-xl transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <img
              src={getImageUrl('truck2')}
              alt="Fleet operations"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div 
            className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
          >
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
                <li 
                  key={index} 
                  className={`flex items-start transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
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
