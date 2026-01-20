// Contact CTA Component

import { CONTACT_INFO } from '@/constants';

export const ContactCTA = () => {
  return (
    <section className="py-20 bg-slate-900/95 backdrop-blur-sm text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">
          Arizontal Logistics Inc.
        </h2>
        <p className="text-xl lg:text-2xl text-white/90 mb-8">
          Let's Move Your Freight Today!
        </p>
        
        <div className="flex justify-center">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="px-8 py-3 border-2 border-white text-white font-semibold hover:border-[#d58630] transition-all duration-300"
          >
            {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
