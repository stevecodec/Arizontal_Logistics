// Contact CTA Component

import { CONTACT_INFO } from '@/constants';

export const ContactCTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-900/95 backdrop-blur-sm text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
          Arizontal Logistics LLC.
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8">
          Let's Move Your Freight Today!
        </p>
        
        <div className="flex justify-center">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white text-sm sm:text-base font-semibold hover:border-[#d58630] transition-all duration-300"
          >
            {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
