// Domain Models and Type Definitions

export interface City {
  name: string;
  state: string;
  left: string;
  top: string;
  color: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ServiceCard {
  title: string;
  subtitle: string;
  features: string[];
  image: string;
  link?: string;
}

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export interface QuoteFormData {
  originCity: string;
  destinationCity: string;
  equipmentType: string;
  weight: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface AvailableLoad {
  id: string;
  origin: string;
  destination: string;
  equipmentType: string;
  rate: string;
  distance: string;
  pickupDate: string;
}

export interface Driver {
  id: string;
  name: string;
  rating: number;
  yearsExperience: number;
  totalDeliveries: number;
  onTimeRate: number;
  specialties: string[];
  role: string;
  location: string;
  description: string;
  backgroundColor: string;
}
