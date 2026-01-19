// Transportation Page - Carrier Services and Fleet Details

import { Header } from '@/views/shared/Header';
import { Footer } from '@/views/shared/Footer';
import { getImageUrl } from '@/data/services/imageService';
import { CONTACT_INFO } from '@/constants';

const TransportationPage = () => {
  // Fleet Types with Arizontal-specific details
  const fleetTypes = [
    {
      name: 'Premium Dry Van Fleet',
      capacity: '53 ft standard',
      weight: 'Up to 45,000 lbs',
      description: 'Our flagship service covering the I-95 corridor and major Southeast routes. Equipped with real-time temperature monitoring for sensitive cargo.',
      features: ['Air-ride suspension', 'Liftgate available', 'Cross-docking in Charlotte'],
      stat: '60%',
      statLabel: 'Of Fleet',
      routes: 'NC • VA • SC • GA • FL',
    },
    {
      name: 'Cold Chain Specialists',
      capacity: '53 ft standard',
      weight: 'Up to 43,000 lbs',
      description: 'Dedicated refrigerated units serving pharmaceutical and food distribution from our Charlotte hub to major eastern markets.',
      features: ['Triple-temp zones', 'FSMA compliant', 'Cold chain certified drivers'],
      stat: '20%',
      statLabel: 'Of Fleet',
      routes: 'Pharma Corridor • Food Distribution',
    },
    {
      name: 'Heavy Equipment Specialists',
      capacity: '48-53 ft',
      weight: 'Up to 48,000 lbs',
      description: 'Serving construction sites across the Carolinas. Our team understands jobsite logistics and timing requirements.',
      features: ['Construction site delivery', 'Crane coordination', 'Same-day emergency service'],
      stat: '15%',
      statLabel: 'Of Fleet',
      routes: 'Construction Sites • Industrial Parks',
    },
    {
      name: 'Over-Dimensional Transport',
      capacity: '48-53 ft',
      weight: 'Up to 48,000 lbs',
      description: 'Permitted specialists for oversized loads. We handle the paperwork, routing, and escort coordination.',
      features: ['Permit acquisition', 'Route surveys', 'Pilot car coordination'],
      stat: '10%',
      statLabel: 'Of Fleet',
      routes: 'Southeast Region • Custom Routes',
    },
  ];

  // Key differentiators specific to Arizontal
  const keyDifferentiators = [
    {
      title: 'Southeast Expertise',
      description: 'Born in Charlotte, we know every back road, loading dock, and traffic pattern from DC to Miami. Our drivers average 8+ years serving these routes.',
      metric: '8+',
      metricLabel: 'Years Avg Experience',
      highlight: 'Local Knowledge Matters',
    },
    {
      title: 'Charlotte Cross-Dock Advantage',
      description: 'Our 50,000 sq ft Charlotte facility enables same-day consolidation and distribution throughout the Southeast corridor.',
      metric: '50K',
      metricLabel: 'Sq Ft Facility',
      highlight: 'Strategic Location',
    },
    {
      title: 'Carrier Network',
      description: 'Direct relationships with 500+ vetted carriers. We don\'t just broker loads - we build partnerships that ensure reliability.',
      metric: '500+',
      metricLabel: 'Vetted Partners',
      highlight: 'Quality Over Quantity',
    },
    {
      title: 'Technology Edge',
      description: 'Our proprietary TMS integrates with your systems for seamless booking, tracking, and billing. API access available.',
      metric: 'API',
      metricLabel: 'Integration Ready',
      highlight: 'Seamless Tech Stack',
    },
  ];

  // Specific routes and specializations
  const majorRoutes = [
    {
      route: 'Charlotte → Atlanta',
      frequency: 'Daily',
      transit: '8-10 hrs',
      specialty: 'Manufacturing & Retail',
    },
    {
      route: 'Charlotte → Jacksonville',
      frequency: '5x Weekly',
      transit: '6-8 hrs',
      specialty: 'Food Distribution',
    },
    {
      route: 'RDU → Port of Charleston',
      frequency: 'Daily',
      transit: '4-5 hrs',
      specialty: 'Import/Export',
    },
    {
      route: 'Triangle → Florida',
      frequency: 'Daily',
      transit: '12-14 hrs',
      specialty: 'Multi-stop LTL',
    },
  ];

  // Real achievements and certifications
  const achievements = [
    {
      year: '2019',
      title: 'Founded in Charlotte',
      description: 'Started with 5 trucks serving the Carolina region',
    },
    {
      year: '2021',
      title: 'SmartWay Certified',
      description: 'EPA recognition for environmental sustainability',
    },
    {
      year: '2023',
      title: 'C-TPAT Certification',
      description: 'Enhanced supply chain security standards',
    },
    {
      year: '2024',
      title: '50K+ Loads Delivered',
      description: 'Serving 200+ customers across 15 states',
    },
  ];

  // Industry-specific solutions
  const industrySolutions = [
    {
      industry: 'Pharmaceuticals',
      icon: '',
      challenge: 'Temperature-sensitive products requiring FDA compliance',
      solution: 'Validated cold chain with continuous monitoring and backup systems',
      clients: 'Life sciences companies in the Carolinas',
    },
    {
      industry: 'Food & Beverage',
      icon: '🍎',
      challenge: 'FSMA compliance and tight delivery windows',
      solution: 'Dedicated food-grade equipment and FSMA-trained drivers',
      clients: 'Regional grocery chains',
    },
    {
      industry: 'Manufacturing',
      icon: '⚙️',
      challenge: 'Just-in-time delivery and production line coordination',
      solution: 'Scheduled deliveries with real-time ETA updates',
      clients: 'Automotive and electronics OEMs',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-20">
          <div className="absolute inset-0">
            <img
              src={getImageUrl('overlay1')}
              alt="Cargo Transportation"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1 bg-theme-primary/20 border-l-4 border-theme-primary mb-6">
                <span className="text-sm font-semibold text-theme-primary">ARIZONTAL CARGO</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Southeast's Most Reliable Freight Partner
              </h1>
              <p className="text-lg text-white/80 mb-4 leading-relaxed">
                Based in Charlotte, NC, we've been connecting businesses across the Southeast since 2019. 
                Our deep regional knowledge and carrier relationships deliver results that generic brokers can't match.
              </p>
              <div className="flex items-center gap-4 mb-8 text-sm">
                <span className="text-white/60">Serving:</span>
                <span className="text-theme-primary font-semibold">NC • VA • SC • GA • FL • TN</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-theme-primary text-white font-semibold hover:bg-theme-dark transition-all"
                >
                  Get Southeast Quote
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white border-b-2 border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-3xl font-bold text-theme-primary mb-1">500+</div>
                <div className="text-xs text-slate-600 font-medium uppercase tracking-wide">Vetted Carriers</div>
              </div>
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-3xl font-bold text-theme-primary mb-1">98.5%</div>
                <div className="text-xs text-slate-600 font-medium uppercase tracking-wide">On-Time Rate</div>
              </div>
              <div className="text-center border-r border-slate-200 last:border-r-0">
                <div className="text-3xl font-bold text-theme-primary mb-1">50K+</div>
                <div className="text-xs text-slate-600 font-medium uppercase tracking-wide">Loads Since 2019</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-theme-primary mb-1">8+</div>
                <div className="text-xs text-slate-600 font-medium uppercase tracking-wide">Avg Driver Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Arizontal Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left - Image */}
              <div className="relative h-96 lg:h-[500px]">
                <img
                  src={getImageUrl('truck1')}
                  alt="Arizontal Logistics operations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Charlotte Born & Raised</h3>
                    <p className="text-white/90 text-sm">
                      "We're not a national broker trying to learn your market. We ARE your market. 
                      Every route, every warehouse, every traffic pattern - we've lived it for years."
                    </p>
                    <p className="text-white/70 text-xs mt-3">- Operations Team, Arizontal Logistics</p>
                  </div>
                </div>
              </div>

              {/* Right - Differentiators */}
              <div>
                <div className="inline-block px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-4">
                  <span className="text-sm font-semibold text-theme-primary">THE ARIZONTAL DIFFERENCE</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                  Not Just Brokers. Your Regional Experts.
                </h2>
                
                <div className="space-y-6">
                  {keyDifferentiators.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 border-l-4 border-slate-200 hover:border-theme-primary hover:bg-white transition-all"
                    >
                      <div className="flex-shrink-0 text-right min-w-[80px]">
                        <div className="text-2xl font-bold text-theme-primary">{item.metric}</div>
                        <div className="text-xs text-slate-500 uppercase">{item.metricLabel}</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-theme-primary mb-1 uppercase tracking-wide">{item.highlight}</div>
                        <h4 className="text-base font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet & Routes Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <div className="inline-block px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-4">
                <span className="text-sm font-semibold text-theme-primary">SPECIALIZED EQUIPMENT</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Purpose-Built for Southeast Freight
              </h2>
              <p className="text-slate-600 max-w-2xl">
                Each unit in our fleet is selected specifically for the cargo types and routes we serve. 
                No generic solutions - just equipment that works for your region.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {fleetTypes.map((fleet, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border-2 border-slate-200 hover:border-theme-primary transition-all duration-300 group"
                >
                  <div className="h-1 bg-gradient-to-r from-theme-primary to-theme-dark opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{fleet.name}</h3>
                        <div className="inline-block px-2 py-1 bg-theme-primary/10 text-xs font-semibold text-theme-primary mb-3">
                          {fleet.routes}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-theme-primary">{fleet.stat}</div>
                        <div className="text-xs text-slate-500">{fleet.statLabel}</div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mb-6">{fleet.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b border-slate-200">
                      <div>
                        <div className="text-xs text-slate-500 mb-1">CAPACITY</div>
                        <div className="text-sm font-bold text-slate-900">{fleet.capacity}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">MAX WEIGHT</div>
                        <div className="text-sm font-bold text-slate-900">{fleet.weight}</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-slate-700 mb-3 uppercase tracking-wide">Specialized Features</div>
                      <ul className="space-y-2">
                        {fleet.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-600">
                            <span className="inline-block w-1 h-1 bg-theme-primary mt-2 mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Major Routes */}
            <div className="bg-slate-900 text-white p-8 border-l-4 border-theme-primary">
              <h3 className="text-xl font-bold mb-6">Our Core Southeast Routes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {majorRoutes.map((route, index) => (
                  <div key={index} className="bg-white/5 p-4 border border-white/10">
                    <div className="text-sm font-bold text-theme-primary mb-2">{route.route}</div>
                    <div className="space-y-1 text-xs text-white/80">
                      <div>Frequency: <span className="text-white font-semibold">{route.frequency}</span></div>
                      <div>Transit: <span className="text-white font-semibold">{route.transit}</span></div>
                      <div className="pt-2 border-t border-white/10 text-white/60">{route.specialty}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className="inline-block px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-4">
                <span className="text-sm font-semibold text-theme-primary">INDUSTRY EXPERTISE</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                We Speak Your Industry's Language
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Generic logistics providers treat all cargo the same. We've built specialized solutions 
                for the industries that power the Southeast economy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {industrySolutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-slate-200 p-6 hover:border-theme-primary transition-all group"
                >
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.industry}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Challenge</div>
                      <p className="text-sm text-slate-600">{solution.challenge}</p>
                    </div>
                    
                    <div className="border-l-4 border-theme-primary pl-3 bg-slate-50 p-3">
                      <div className="text-xs font-semibold text-theme-primary uppercase mb-1">Our Solution</div>
                      <p className="text-sm text-slate-700 font-medium">{solution.solution}</p>
                    </div>
                    
                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-xs text-slate-500">Serving: <span className="text-slate-700 font-semibold">{solution.clients}</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={getImageUrl('truck2')}
              alt="Company growth"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className="inline-block px-4 py-1 bg-theme-primary/20 border-l-4 border-theme-primary mb-4">
                <span className="text-sm font-semibold text-theme-primary">OUR JOURNEY</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Built on Regional Relationships
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                From 5 trucks in Charlotte to a trusted Southeast partner. Every milestone reflects our commitment to this region.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all"
                >
                  <div className="text-3xl font-bold text-theme-primary mb-2">{achievement.year}</div>
                  <div className="h-1 w-12 bg-theme-primary mb-4"></div>
                  <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-white/80">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-block px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-4">
                  <span className="text-sm font-semibold text-theme-primary">WORK WITH US</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  Experience the Arizontal Advantage
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Stop working with generic freight brokers who don't understand your region. Partner with a team 
                  that knows every mile of your routes and has the carrier relationships to deliver results.
                </p>
                <div className="bg-slate-50 border-l-4 border-theme-primary p-6 mb-8">
                  <h4 className="font-bold text-slate-900 mb-2">Charlotte Cross-Dock Facility</h4>
                  <p className="text-sm text-slate-600 mb-3">
                    50,000 sq ft facility with same-day consolidation and distribution capabilities. 
                    Strategically located for optimal Southeast access.
                  </p>
                  <p className="text-xs text-slate-500">
                    {CONTACT_INFO.address} | {CONTACT_INFO.phone}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-block px-8 py-3 bg-theme-primary text-white font-semibold text-center hover:bg-theme-dark transition-all"
                  >
                    Request Southeast Quote
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="inline-block px-8 py-3 border-2 border-slate-900 text-slate-900 font-semibold text-center hover:bg-slate-900 hover:text-white transition-all"
                  >
                    Call Charlotte Office
                  </a>
                </div>
              </div>

              {/* Right - Image with overlay stats */}
              <div className="relative h-96 lg:h-[500px]">
                <img
                  src={getImageUrl('truck3')}
                  alt="Arizontal fleet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4">
                      <div className="text-xs text-white/80 mb-1">OPERATING SINCE</div>
                      <div className="text-3xl font-bold text-white">2019</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4">
                        <div className="text-2xl font-bold text-white mb-1">$1M</div>
                        <div className="text-xs text-white/80 uppercase tracking-wide">Cargo Coverage</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4">
                        <div className="text-2xl font-bold text-white mb-1">6</div>
                        <div className="text-xs text-white/80 uppercase tracking-wide">States Served</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TransportationPage;
