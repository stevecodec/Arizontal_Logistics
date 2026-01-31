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
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center justify-items-center">
          {/* Industries We Serve */}
          <div className="w-full max-w-md px-4 sm:px-0">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8">
              Industries We Serve
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              {industries.map((industry, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-[#d58630] mr-3 sm:mr-4 flex-shrink-0"></div>
                  <span className="text-base sm:text-lg text-white">{industry}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How We Work */}
          <div className="w-full max-w-md px-4 sm:px-0">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8">
              How We Work
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {workProcess.map((process, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d58630] text-white flex items-center justify-center font-bold text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">{process.title}</h3>
                    <p className="text-sm sm:text-base text-white/90">{process.description}</p>
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
