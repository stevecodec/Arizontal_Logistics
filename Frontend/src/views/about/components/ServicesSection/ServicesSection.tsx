// Services Section Component
import { Link } from 'react-router-dom';

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
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 inline-block relative pb-2">
            Transportation Services
            <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-[#d58630]"></span>
          </h2>
        </div>

        {/* Timeline container with vertical line */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#d58630]/30"></div>

          {/* Services items */}
          <div className="space-y-8">
            {services.map((service, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Service card */}
                  <div
                    className={`group w-full md:w-[calc(50%-2rem)] bg-white p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-[#d58630] ${
                      isLeft ? 'mr-auto md:mr-8' : 'ml-auto md:ml-8'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#d58630] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Center dot on the vertical line */}
                  <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-[#d58630] rounded-full border-4 border-slate-50 group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-block border-2 border-[#d58630] text-[#d58630] px-8 py-3 font-semibold hover:bg-[#d58630] hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};
