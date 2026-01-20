// Hero Section Component

import { Link } from 'react-router-dom';
import { getImageUrl } from '@/data/services/imageService';
import { CONTACT_INFO } from '@/constants';

export const HeroSection = () => {
  return (
    <section className="relative bg-slate-900 text-white py-24">
      <div className="absolute inset-0">
        <img
          src={getImageUrl('truck1')}
          alt="Owner-Operator Partnership"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Owner-Operator Partnerships
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Arizontal Transportation partners with qualified owner-operators to expand capacity while maintaining high standards of safety, compliance, and service excellence. We value professionalism, transparency, and long-term relationships with independent contractors who operate their own businesses.
          </p>
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-theme-primary text-white font-semibold hover:bg-theme-dark transition-all"
            >
              Partner With Us
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              Call Dispatch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
