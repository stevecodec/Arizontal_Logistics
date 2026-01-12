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
    scrollToElement(SECTION_IDS.QUICK_QUOTE);
  }, []);

  const handleScrollToSection = useCallback((sectionId: string) => {
    scrollToElement(sectionId);
  }, []);

  return {
    handleGetQuote,
    handleScrollToSection,
  };
};
