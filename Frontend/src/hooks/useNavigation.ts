// Custom Hook for Navigation Logic

import { useCallback } from 'react';
import { scrollToElement } from '@/utils/scroll';
import { SECTION_IDS } from '@/constants';

/**
 * Hook for navigation actions
 * @returns Navigation handler functions
 */
export const useNavigation = () => {
  const handleGetQuote = useCallback(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleScrollToSection = useCallback((sectionId: string) => {
    scrollToElement(sectionId);
  }, []);

  return {
    handleGetQuote,
    handleScrollToSection,
  };
};
