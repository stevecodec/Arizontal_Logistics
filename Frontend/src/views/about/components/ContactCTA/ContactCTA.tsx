// Contact CTA Component

import { CONTACT_INFO } from '@/constants';

export const ContactCTA = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Let's Move Your Freight Today!
        </h2>        
        <div className="grid md:grid-cols-3 gap-8 mb-12 py-4">
          <div>
            <p className="text-sm text-white/60 mb-1">Dispatch</p>
            <a href={`tel:${CONTACT_INFO.phone}`} className="text-white font-semibold hover:text-theme-primary">
              {CONTACT_INFO.phone}
            </a>
          </div>
          <div>
            <p className="text-sm text-white/60 mb-1">Email</p>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-semibold hover:text-theme-primary break-all">
              {CONTACT_INFO.email}
            </a>
          </div>
          <div>
            <p className="text-sm text-white/60 mb-1">Head Office</p>
            <p className="text-white font-semibold">
              {CONTACT_INFO.address}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-3 bg-theme-primary text-white font-semibold hover:bg-theme-dark transition-all"
          >
            Request Capacity
          </a>
        </div>
      </div>
    </section>
  );
};
