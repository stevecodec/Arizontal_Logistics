// Why Choose Us Component (View Layer)

import { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '@/data/services/imageService';

export const WhyChooseUs = () => {
  const ceoCardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before it comes into view
      }
    );

    if (ceoCardRef.current) {
      observer.observe(ceoCardRef.current);
    }

    return () => {
      if (ceoCardRef.current) {
        observer.unobserve(ceoCardRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-2 pb-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 border-b-2 border-theme-primary pb-1 inline-block">
            The Arizontal Difference
          </h2>
        </div>

        {/* CEO Quote Section */}
        <div className="relative mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative h-96 rounded overflow-hidden">
                <img 
                  src={getImageUrl('whyChooseUs')}
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[55%] lg:z-10">
              <div 
                ref={ceoCardRef}
                className={`bg-white lg:shadow-2xl lg:rounded lg:p-10 lg:-ml-20 relative transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 translate-x-0' 
                    : 'opacity-0 translate-y-8 translate-x-8'
                }`}
              >
                <div className="absolute top-8 left-10 text-4xl text-theme-primary opacity-20">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <div className="relative">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    You Deserve the Best
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Our people, customers, carriers, investors and communities all deserve the best from us. That's why we have a passionate pursuit of excellence and are always striving for more. We listen, innovate and invest in order to provide you with excellence. Arizontal is driven for you.
                  </p>
                  <div className="text-xs text-slate-600 font-semibold italic">
                    — CEO, Arizontal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
