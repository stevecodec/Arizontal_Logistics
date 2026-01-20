// Partnership Overview Component

import { getImageUrl } from '@/data/services/imageService';

export const PartnershipOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-6">
              <span className="text-sm font-semibold text-theme-primary">PARTNERSHIP OVERVIEW</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Independent Contractors, Professional Support
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Owner-operators who partner with Arizontal Transportation operate as independent contractors, maintaining full ownership and control of their equipment and business operations.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our role is to provide consistent freight opportunities, professional dispatch support, and clear communication—allowing owner-operators to focus on safe and efficient transportation.
            </p>
          </div>
          
          <div className="relative h-96">
            <img
              src={getImageUrl('truck2')}
              alt="Professional Transportation"
              className="w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
