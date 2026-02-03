// Company Profile Component

import { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '@/data/services/imageService';

export const CompanyProfile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <div className="inline-block px-3 sm:px-4 py-1 bg-[#d58630]/10 border-l-4 border-[#d58630] mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-semibold text-[#d58630]">WHO WE ARE</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              Licensed & Insured Freight Broker
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
              Arizontal Transportation is a licensed and insured freight broker dedicated to safe 
              and efficient freight transportation. As an asset-based company, we maintain direct 
              control over our equipment and drivers, ensuring consistent service quality and accountability.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our operations are built on industry standards, regulatory compliance, and customer satisfaction.
            </p>
          </div>
          
          <div 
            ref={imageRef}
            className={`relative h-64 sm:h-80 lg:h-96 shadow-xl transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
          >
            <img
              src={getImageUrl('outdoor')}
              alt="Arizontal fleet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
