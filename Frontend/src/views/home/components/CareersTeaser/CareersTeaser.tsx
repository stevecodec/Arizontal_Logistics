// Let us Partner Component

import { Link } from 'react-router-dom';

export const CareersTeaser = () => {
  return (
    <div className="py-16 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
            <span className="border-b-2 border-theme-primary pb-1">Let us</span> Partner
          </h2>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-3 border-2 border-slate-900 text-slate-900 text-sm font-semibold rounded-sm hover:bg-slate-900 hover:text-white transition-all whitespace-nowrap cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
