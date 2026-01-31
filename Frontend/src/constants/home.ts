// Home Page Constants

import { ServiceCard } from '@/models/types';
import arizontal360RenderImage from '@/assets/images/arizontal360-render.png';
import trustIndicatorsBackground from '@/assets/images/trustIndicatorsBackground.png';
import truckloadTabsImage from '@/assets/images/truckload-tabs.png';

// Service Cards
export const SERVICE_CARDS: ServiceCard[] = [
  {
    title: 'Arizontal Shippers',
    subtitle: 'For Shippers',
    features: [
      'Access to 5 star rated carriers',
      'Easily quote and book shipments',
      'Monitor every mile of your shipment',
      'We automate the paperwork',
      'Access to our 24/7 support team',
    ],
    image: arizontal360RenderImage,
    link: '/contact',
    buttonText: 'Contact Us',
  },
  {
    title: 'Arizontal Carriers',
    subtitle: 'For Carriers',
    features: [
      'Find return trip loads around your route',
      'Build long-term, trusted relationships and negotiate rates',
      'Receive guaranteed payments within days of delivery',
      'Receive 5 star rating and get recommended for more shipments',
    ],
    image: trustIndicatorsBackground,
    link: '/careers',
    buttonText: 'Apply Here',
  },
  {
    title: 'Owner-Operator Partnerships',
    subtitle: 'For Owner-Operators',
    features: [
      'Competitive rates and consistent loads',
      'Flexible partnership opportunities',
      'Fuel discount programs available',
      'Dedicated support team',
      'Weekly settlements and transparent pay',
    ],
    image: truckloadTabsImage,
    link: '/transportation',
    buttonText: 'Read More',
  },
];

// Equipment Types for Quote Form
export const EQUIPMENT_TYPES = [
  'Dry Van',
  'Flatbed',
  'Reefer',
  'Step Deck',
] as const;
