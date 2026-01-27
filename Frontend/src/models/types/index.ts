// Domain Models and Type Definitions

export interface ServiceCard {
  title: string;
  subtitle: string;
  features: string[];
  image: string;
  link?: string;
  buttonText?: string;
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
  isRoute?: boolean;
}
