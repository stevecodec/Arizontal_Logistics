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
