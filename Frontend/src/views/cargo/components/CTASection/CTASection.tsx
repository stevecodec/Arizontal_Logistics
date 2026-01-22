// CTA Section Component

import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '@/constants';

export const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
          Interested in Partnering With Us?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 px-4">
          We are always open to working with professional owner-operators who share our commitment to safety, reliability, and service quality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
          <Link
            to="/contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-theme-primary text-white text-sm sm:text-base font-semibold hover:bg-theme-dark transition-all text-center"
          >
            Submit Partnership Inquiry
          </Link>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-semibold border border-white/20 hover:bg-white/20 transition-all text-center"
          >
            Call {CONTACT_INFO.phone}
          </a>
        </div>

        <div className="text-xs sm:text-sm text-white/60 px-4">
          <p className="break-words">{CONTACT_INFO.email} | {CONTACT_INFO.address}</p>
        </div>
      </div>
    </section>
  );
};
