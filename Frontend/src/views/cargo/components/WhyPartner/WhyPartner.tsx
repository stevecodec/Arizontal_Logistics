// Why Partner Component

const whyPartner = [
  'Asset-Based Carrier with Professional Operations',
  'No Load Re-Brokering',
  'Clear Communication & Accountability',
  'Respect for Independent Business Owners',
  'Long-Term Partnership Focus',
];

export const WhyPartner = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-4">
            <span className="text-sm font-semibold text-theme-primary">PARTNERSHIP BENEFITS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Why Partner With Arizontal Transportation
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {whyPartner.map((reason, index) => (
            <div
              key={index}
              className="flex items-center py-5 px-6 bg-slate-50 border-l-4 border-theme-primary hover:bg-slate-100 transition-all"
            >
              <div className="w-10 h-10 bg-theme-primary text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                {index + 1}
              </div>
              <span className="text-lg text-slate-700 font-semibold">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
