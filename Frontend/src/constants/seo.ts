// SEO Configuration for different pages

const BASE_URL = 'https://arizontal.com';
const SITE_NAME = 'Arizontal Transportation Group';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

export const SEO_CONFIG = {
  home: {
    title: `${SITE_NAME} | Freight Brokerage & Logistics Services NC`,
    description: 'Arizontal Transportation Group - Trusted logistics and freight brokerage services in Charlotte, NC. Technology-driven shipping solutions, carrier services, and comprehensive freight management across the United States.',
    keywords: 'freight brokerage, logistics services, carrier services, shipping solutions, Charlotte NC, transportation services, freight management, trucking services, supply chain',
    ogTitle: `${SITE_NAME} | Professional Freight Brokerage Services`,
    ogDescription: 'Leading freight brokerage and logistics services in Charlotte, NC. Reliable shipping solutions across the United States with real-time tracking and competitive rates.',
    ogImage: DEFAULT_IMAGE,
    canonical: `${BASE_URL}/`,
  },
  
  transportation: {
    title: `Transportation Services | ${SITE_NAME}`,
    description: 'Comprehensive transportation and carrier services for shippers and owner-operators. Partner with Arizontal for reliable freight solutions, competitive rates, and dedicated support across the United States.',
    keywords: 'carrier services, owner operator, freight carrier, transportation partner, trucking partnership, carrier network, freight solutions, LTL shipping, full truckload',
    ogTitle: 'Transportation & Carrier Partnership Services',
    ogDescription: 'Join our network of trusted carriers and owner-operators. Consistent loads, fair rates, and professional support for your transportation business.',
    ogImage: DEFAULT_IMAGE,
    canonical: `${BASE_URL}/transportation`,
  },
  
  about: {
    title: `About Us | ${SITE_NAME}`,
    description: 'Learn about Arizontal Transportation Group - Our mission, values, and commitment to delivering exceptional logistics services. Discover our fleet operations, industry expertise, and why shippers and carriers trust us.',
    keywords: 'about arizontal, logistics company, freight brokerage company, transportation company Charlotte, fleet operations, industry expertise',
    ogTitle: 'About Arizontal Transportation Group',
    ogDescription: 'Professional freight brokerage company serving Charlotte, NC and beyond. Learn about our commitment to excellence in logistics and transportation services.',
    ogImage: DEFAULT_IMAGE,
    canonical: `${BASE_URL}/about`,
  },
  
  careers: {
    title: `Careers | ${SITE_NAME}`,
    description: 'Join the Arizontal Transportation Group team. Explore career opportunities for drivers, logistics professionals, and office staff. Competitive pay, excellent benefits, and growth opportunities.',
    keywords: 'trucking jobs, CDL driver jobs, logistics careers, transportation jobs, Charlotte NC jobs, driver employment, career opportunities',
    ogTitle: 'Career Opportunities at Arizontal',
    ogDescription: 'Looking for a rewarding career in transportation and logistics? Join our growing team with competitive compensation and excellent benefits.',
    ogImage: DEFAULT_IMAGE,
    canonical: `${BASE_URL}/careers`,
  },
  
  contact: {
    title: `Contact Us | ${SITE_NAME}`,
    description: 'Get in touch with Arizontal Transportation Group. Contact our team for freight quotes, carrier inquiries, or general questions. Located in Charlotte, NC serving nationwide.',
    keywords: 'contact arizontal, freight quote, get quote, logistics contact, transportation inquiry, Charlotte NC contact',
    ogTitle: 'Contact Arizontal Transportation Group',
    ogDescription: 'Reach out to our team for freight quotes, partnership opportunities, or any questions about our logistics services.',
    ogImage: DEFAULT_IMAGE,
    canonical: `${BASE_URL}/contact`,
  },
};

// Structured data schemas for different pages
export const STRUCTURED_DATA = {
  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
  
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Freight Brokerage & Logistics',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Logistics Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Truckload Shipping',
            description: 'Complete truck capacity for your freight needs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'LTL Shipping',
            description: 'Less-than-truckload shipping solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Specialized Freight',
            description: 'Custom solutions for specialized cargo',
          },
        },
      ],
    },
  },
  
  faq: (questions: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }),
};
