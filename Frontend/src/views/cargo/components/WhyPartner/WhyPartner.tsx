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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-3 sm:px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-theme-primary">PARTNERSHIP BENEFITS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 px-4">
            Why Partner With Arizontal Transportation
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {whyPartner.map((reason, index) => (
            <div
              key={index}
              className="flex items-center py-4 sm:py-5 px-4 sm:px-6 bg-slate-50 border-l-4 border-theme-primary hover:bg-slate-100 transition-all"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-theme-primary text-white flex items-center justify-center font-bold text-sm sm:text-base mr-3 sm:mr-4 flex-shrink-0">
                {index + 1}
              </div>
              <span className="text-base sm:text-lg text-slate-700 font-semibold">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
