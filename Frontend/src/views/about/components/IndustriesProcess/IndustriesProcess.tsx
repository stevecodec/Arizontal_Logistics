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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center justify-items-center">
          {/* Industries We Serve */}
          <div className="w-full max-w-md">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              Industries We Serve
            </h2>
            <ul className="space-y-4">
              {industries.map((industry, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-[#d58630] mr-4"></div>
                  <span className="text-lg text-white">{industry}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How We Work */}
          <div className="w-full max-w-md">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              How We Work
            </h2>
            <div className="space-y-6">
              {workProcess.map((process, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-[#d58630] text-white flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{process.title}</h3>
                    <p className="text-white/90">{process.description}</p>
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
