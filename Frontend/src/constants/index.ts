// Application Constants

export const APP_NAME = 'Arizontal';
export const APP_SUBTITLE = 'Logistics';
export const COMPANY_NAME = 'Arizontal Logistics';

// Contact Information
export const CONTACT_INFO = {
  phone: '(919) 555-0123',
  email: 'info@arizontallogistics.com',
  address: 'Raleigh, North Carolina, USA',
} as const;

// Navigation Links
export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', to: '/' },
    { label: 'Brokerage Services', to: '/arizontal-logistics' },
    { label: 'Carrier Services', to: '/arizontal-cargo' },
  ],
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  linkedin: '#',
  facebook: '#',
  twitter: '#',
} as const;

// Section IDs
export const SECTION_IDS = {
  QUICK_QUOTE: 'quick-quote',
  SERVICES: 'services',
  ABOUT: 'about',
  CONTACT: 'contact',
} as const;
