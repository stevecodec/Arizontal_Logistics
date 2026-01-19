// Services Section Component

const services = [
  {
    title: 'Dry Van Transportation',
    description: 'Security and reliable transport for general freight across regional and long-haul lanes.',
  },
  {
    title: 'Dedicated & Contract Freight',
    description: 'Customized transportation solutions designed to meet your shipping demands.',
  },
  {
    title: 'Regional & OTR Services',
    description: 'Flexible capacity for both regional routes and over-the-road freight.',
  },
  {
    title: 'Time-Sensitive Freight',
    description: 'Reliable service for shipments requiring strict delivery windows.',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-4">
            <span className="text-sm font-semibold text-theme-primary">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Transportation Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 border-l-4 border-theme-primary hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
