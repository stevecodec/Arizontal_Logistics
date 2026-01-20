// Application Constants

export const APP_NAME = 'Arizontal';
export const APP_SUBTITLE = 'Logistics';
export const COMPANY_NAME = 'Arizontal Logistics';

// Contact Information
export const CONTACT_INFO = {
  phone: '(919) 555-0123',
  email: 'info@arizontallogistics.com',
  address: '4037 E Independence Blvd, Suite 402, Charlotte, NC 28205',
} as const;

// Navigation Links
export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'Transportation', href: '/transportation', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Careers', href: '/careers', isRoute: true },
  { label: 'Contact', href: '/contact', isRoute: true },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', to: '/' },
    { label: 'Transportation', to: '/transportation' },
    { label: 'About Us', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact', to: '/contact' },
  ],
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
} as const;

// Section IDs
export const SECTION_IDS = {
  QUICK_QUOTE: 'quick-quote',
  SERVICES: 'services',
  ABOUT: 'about',
  CONTACT: 'contact',
} as const;
