// What We Offer Component

const offerings = [
  'Consistent Freight Opportunities',
  'Transparent Rate Confirmations',
  'On-Time Settlements',
  'Professional Dispatch & Load Support',
  'Access to Nationwide Freight Lanes',
  'Compliance-Focused Operations',
];

export const WhatWeOffer = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-4">
            <span className="text-sm font-semibold text-theme-primary">WHAT WE OFFER</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Built on Trust & Clarity
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We believe strong partnerships are built on trust, clarity, and mutual respect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 border-l-4 border-theme-primary hover:shadow-lg transition-all"
            >
              <div className="flex items-start">
                <div className="w-8 h-8 bg-theme-primary/10 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-theme-primary"></div>
                </div>
                <p className="text-slate-700 font-semibold">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
