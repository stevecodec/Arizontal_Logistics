// Home Page Constants

import { City, Service, ServiceCard, Stat, AvailableLoad } from '@/models/types';
import intermodalTabsImage from '@/assets/images/intermodal-tabs.png';
import truckloadTabsImage from '@/assets/images/truckload-tabs.png';
import ltlTabsImage from '@/assets/images/ltl-tabs.png';
import dcsTabsImage from '@/assets/images/dcs-tabs.png';
import fmsTabsImage from '@/assets/images/fms-tabs.png';
import specialTabsImage from '@/assets/images/special-tabs.png';
import arizontal360RenderImage from '@/assets/images/arizontal360-render.png';
import carrier360RenderImage from '@/assets/images/carrier360-render.png';

// Cities for Trust Indicators Map
export const CITIES: City[] = [
  { name: 'Seattle', state: 'WA', left: '12%', top: '15%', color: 'blue' },
  { name: 'Portland', state: 'OR', left: '10%', top: '22%', color: 'blue' },
  { name: 'San Francisco', state: 'CA', left: '8%', top: '42%', color: 'blue' },
  { name: 'Los Angeles', state: 'CA', left: '11%', top: '52%', color: 'blue' },
  { name: 'Phoenix', state: 'AZ', left: '18%', top: '55%', color: 'blue' },
  { name: 'Denver', state: 'CO', left: '28%', top: '42%', color: 'blue' },
  { name: 'Dallas', state: 'TX', left: '40%', top: '60%', color: 'blue' },
  { name: 'Houston', state: 'TX', left: '42%', top: '68%', color: 'blue' },
  { name: 'Minneapolis', state: 'MN', left: '48%', top: '25%', color: 'blue' },
  { name: 'Chicago', state: 'IL', left: '54%', top: '38%', color: 'blue' },
  { name: 'Detroit', state: 'MI', left: '58%', top: '32%', color: 'blue' },
  { name: 'Atlanta', state: 'GA', left: '62%', top: '58%', color: 'blue' },
  { name: 'Miami', state: 'FL', left: '68%', top: '75%', color: 'blue' },
  { name: 'Charlotte', state: 'NC', left: '66%', top: '52%', color: 'blue' },
  { name: 'Washington DC', state: 'DC', left: '70%', top: '45%', color: 'blue' },
  { name: 'Philadelphia', state: 'PA', left: '72%', top: '42%', color: 'blue' },
  { name: 'New York', state: 'NY', left: '74%', top: '38%', color: 'blue' },
  { name: 'Boston', state: 'MA', left: '76%', top: '32%', color: 'blue' },
];

// Capacity Services
export const CAPACITY_SERVICES: Service[] = [
  {
    title: 'Intermodal',
    description: 'Take advantage of the cost-effective and sustainable solutions from North America\'s leading intermodal provider.',
    image: intermodalTabsImage,
    link: '/arizontal-logistics',
  },
  {
    title: 'Truckload',
    description: 'Move over-the-road shipments with flexibility and efficiency through our drop-and-hook solution.',
    image: truckloadTabsImage,
    link: '/arizontal-logistics',
  },
  {
    title: 'Less-Than-Truckload',
    description: 'Receive access to nationwide reach, visibility into performance, streamline shipments and more with LTL.',
    image: ltlTabsImage,
    link: '/arizontal-logistics',
  },
  {
    title: 'Dedicated Contract Services',
    description: 'Get best-in-class safety, route planning and optimization capabilities for your dedicated fleet.',
    image: dcsTabsImage,
    link: '/arizontal-logistics',
  },
  {
    title: 'Final Mile Services',
    description: 'We\'ve got you covered from the first mile all the way through last-mile deliveries to homes and job sites.',
    image: fmsTabsImage,
    link: '/arizontal-logistics',
  },
  {
    title: 'Brokerage Services',
    description: 'Get the capacity you need for your over-the-road freight, supported by thousands of qualified carriers.',
    image: specialTabsImage,
    link: '/arizontal-logistics',
  },
];

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
    image: carrier360RenderImage,
  },
];

// Statistics
export const STATS: Stat[] = [
  {
    icon: 'ri-truck-line',
    value: '500+',
    label: 'Active Trucks',
  },
  {
    icon: 'ri-map-pin-line',
    value: '48',
    label: 'States Covered',
  },
  {
    icon: 'ri-time-line',
    value: '24/7',
    label: 'Support Available',
  },
  {
    icon: 'ri-shield-check-line',
    value: '100%',
    label: 'Insured Cargo',
  },
];

// Equipment Types for Quote Form
export const EQUIPMENT_TYPES = [
  'Dry Van',
  'Flatbed',
  'Reefer',
  'Step Deck',
] as const;

// Available Loads for Hero Section
export const AVAILABLE_LOADS: AvailableLoad[] = [
  {
    id: '1',
    origin: 'Los Angeles, CA',
    destination: 'New York, NY',
    equipmentType: 'Dry Van',
    rate: '$2,850',
    distance: '2,789 mi',
    pickupDate: 'Today',
  },
  {
    id: '2',
    origin: 'Chicago, IL',
    destination: 'Atlanta, GA',
    equipmentType: 'Flatbed',
    rate: '$1,650',
    distance: '715 mi',
    pickupDate: 'Tomorrow',
  },
  {
    id: '3',
    origin: 'Dallas, TX',
    destination: 'Miami, FL',
    equipmentType: 'Reefer',
    rate: '$1,950',
    distance: '1,330 mi',
    pickupDate: 'Today',
  },
];
