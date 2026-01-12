// Home Page ViewModel

import { useState } from 'react';
import { useNavigation } from '@/hooks/useNavigation';
import { CITIES } from '@/constants/home';

/**
 * ViewModel for Home Page
 * Contains business logic and state management for home page
 */
export const useHomeViewModel = () => {
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const { handleGetQuote, handleScrollToSection } = useNavigation();

  const handleCityHover = (cityName: string | null) => {
    setActiveCity(cityName);
  };

  const handleServiceClick = (link: string) => {
    // Future: Navigate to service page or handle service selection
    // TODO: Implement navigation logic
    if (process.env.NODE_ENV === 'development') {
      console.log('Service clicked:', link);
    }
  };

  return {
    // State
    activeCity,
    cities: CITIES,
    
    // Actions
    handleCityHover,
    handleGetQuote,
    handleScrollToSection,
    handleServiceClick,
  };
};
