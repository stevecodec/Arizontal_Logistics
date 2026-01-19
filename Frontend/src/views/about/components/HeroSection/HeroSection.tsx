// Hero Section Component

import { getImageUrl } from '@/data/services/imageService';

export const HeroSection = () => {
  return (
    <section className="relative bg-slate-900 text-white py-24">
      <div className="absolute inset-0">
        <img
          src={getImageUrl('overlay1')}
          alt="Arizontal Transportation"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          About Arizontal Transportation
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Asset-Based Carrier Delivering Reliable Freight Solutions
        </p>
        <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
          Arizontal Transportation is a professional, asset-based trucking company providing 
          dependable and compliant transportation services across the United States. We operate 
          with a commitment to safety, on-time performance, and long-term partnerships.
        </p>
      </div>
    </section>
  );
};
