// Home Page Constants

import { City, Service, ServiceCard, Stat, AvailableLoad, Driver } from '@/models/types';
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
    image: carrier360RenderImage,
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

// Top Rated Drivers
export const TOP_DRIVERS: Driver[] = [
  {
    id: '1',
    name: 'Michael Rodriguez',
    rating: 5.0,
    yearsExperience: 12,
    totalDeliveries: 2847,
    onTimeRate: 99.2,
    specialties: ['Long Haul', 'Refrigerated'],
    role: 'Senior Driver',
    location: 'Los Angeles, CA',
    description: 'Highly disciplined professional with exceptional reliability and commitment to on-time delivery excellence.',
    backgroundColor: '#F5F5DC', // Beige
  },
  {
    id: '2',
    name: 'James Thompson',
    rating: 5.0,
    yearsExperience: 15,
    totalDeliveries: 3421,
    onTimeRate: 98.8,
    specialties: ['Flatbed', 'Oversized'],
    role: 'Master Driver',
    location: 'Chicago, IL',
    description: 'Proven track record of safe and efficient deliveries with unwavering dedication to customer satisfaction.',
    backgroundColor: '#F5F5DC', // Beige
  },
  {
    id: '3',
    name: 'David Martinez',
    rating: 4.9,
    yearsExperience: 10,
    totalDeliveries: 2156,
    onTimeRate: 99.5,
    specialties: ['Dry Van', 'Express'],
    role: 'Elite Driver',
    location: 'Dallas, TX',
    description: 'Reliable and punctual driver known for maintaining the highest standards in freight transportation.',
    backgroundColor: '#F5F5DC', // Beige
  },
  {
    id: '4',
    name: 'Robert Chen',
    rating: 5.0,
    yearsExperience: 18,
    totalDeliveries: 4123,
    onTimeRate: 99.1,
    specialties: ['Intermodal', 'Cross Country'],
    role: 'Veteran Driver',
    location: 'New York, NY',
    description: 'Experienced professional delivering consistent excellence across thousands of successful shipments.',
    backgroundColor: '#F5F5DC', // Beige
  },
  {
    id: '5',
    name: 'Christopher Anderson',
    rating: 4.9,
    yearsExperience: 11,
    totalDeliveries: 2654,
    onTimeRate: 98.9,
    specialties: ['Hazmat', 'Temperature Controlled'],
    role: 'Specialized Driver',
    location: 'Houston, TX',
    description: 'Expert in handling specialized freight with meticulous attention to safety protocols and regulations.',
    backgroundColor: '#F5F5DC', // Beige
  },
  {
    id: '6',
    name: 'William Johnson',
    rating: 5.0,
    yearsExperience: 14,
    totalDeliveries: 3287,
    onTimeRate: 99.3,
    specialties: ['Team Driving', 'Expedited'],
    role: 'Lead Driver',
    location: 'Atlanta, GA',
    description: 'Dedicated team driver specializing in expedited shipments with exceptional communication skills.',
    backgroundColor: '#F5F5DC', // Beige
  },
  {
    id: '7',
    name: 'Thomas Wilson',
    rating: 4.8,
    yearsExperience: 9,
    totalDeliveries: 1987,
    onTimeRate: 98.5,
    specialties: ['Regional', 'Local Delivery'],
    role: 'Regional Driver',
    location: 'Phoenix, AZ',
    description: 'Reliable regional driver with deep knowledge of local routes and customer service excellence.',
    backgroundColor: '#F5F5DC', // Beige
  },
  {
    id: '8',
    name: 'Daniel Brown',
    rating: 5.0,
    yearsExperience: 16,
    totalDeliveries: 3892,
    onTimeRate: 99.4,
    specialties: ['Oversized Loads', 'Heavy Haul'],
    role: 'Heavy Haul Specialist',
    location: 'Denver, CO',
    description: 'Specialized in oversized and heavy haul shipments with proven expertise in complex logistics.',
    backgroundColor: '#F5F5DC', // Beige
  },
];
