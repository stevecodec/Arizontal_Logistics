// Industries & Process Component

const industries = [
  'Manufacturing',
  'Retail & Distribution',
  'Construction Materials',
  'Warehousing & Logistics',
  'Commercial Freight Shippers',
];

const workProcess = [
  {
    step: '1',
    title: 'Load Confirmation',
    description: 'Shipment details reviewed and accepted',
  },
  {
    step: '2',
    title: 'Dispatch & Pickup',
    description: 'Equipment assigned and on-time pickup',
  },
  {
    step: '3',
    title: 'In-Transit Updates',
    description: 'Clear communication and tracking',
  },
  {
    step: '4',
    title: 'Delivery & POD',
    description: 'Timely delivery and documentation',
  },
];

export const IndustriesProcess = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Industries We Serve */}
          <div>
            <div className="inline-block px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-6">
              <span className="text-sm font-semibold text-theme-primary">INDUSTRIES</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
              Industries We Serve
            </h2>
            <ul className="space-y-4">
              {industries.map((industry, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-theme-primary mr-4"></div>
                  <span className="text-lg text-slate-700">{industry}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How We Work */}
          <div>
            <div className="inline-block px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-6">
              <span className="text-sm font-semibold text-theme-primary">PROCESS</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
              How We Work
            </h2>
            <div className="space-y-6">
              {workProcess.map((process, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-theme-primary text-white flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{process.title}</h3>
                    <p className="text-slate-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
