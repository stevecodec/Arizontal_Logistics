// Company Profile Component

import { getImageUrl } from '@/data/services/imageService';

export const CompanyProfile = () => {
  return (
    <section className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-[#d58630]/10 border-l-4 border-[#d58630] mb-6">
              <span className="text-sm font-semibold text-[#d58630]">WHO WE ARE</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Licensed & Insured Motor Carrier
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Arizontal Transportation is a licensed and insured motor carrier dedicated to safe 
              and efficient freight transportation. As an asset-based company, we maintain direct 
              control over our equipment and drivers, ensuring consistent service quality and accountability.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our operations are built on industry standards, regulatory compliance, and customer satisfaction.
            </p>
          </div>
          
          <div className="relative h-96 shadow-xl">
            <img
              src={getImageUrl('truck1')}
              alt="Arizontal fleet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
