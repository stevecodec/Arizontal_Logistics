// Safety & Compliance Component

const safetyCompliance = [
  'DOT & FMCSA Compliant',
  'Active Safety Program',
  'Driver Qualification & Training',
  'Insurance Coverage Meeting Industry Standards',
];

export const SafetyCompliance = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1 bg-theme-primary/20 border-l-4 border-theme-primary mb-6">
            <span className="text-sm font-semibold text-theme-primary">COMMITMENT TO SAFETY</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Safety & Compliance
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Safety is a core value at Arizontal Transportation. Our company adheres strictly to 
            FMCSA regulations and industry best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyCompliance.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center"
            >
              <div className="w-12 h-12 bg-theme-primary/20 mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-theme-primary"></div>
              </div>
              <p className="text-white font-semibold">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-white/90 font-semibold">
            Our goal is zero incidents and consistent, safe deliveries.
          </p>
        </div>
      </div>
    </section>
  );
};
