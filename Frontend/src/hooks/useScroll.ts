// Custom Hook for Scroll Detection

import { useState, useEffect, useCallback } from 'react';

/**
 * Hook to detect scroll position
 * @param threshold - Scroll threshold in pixels (default: 50)
 * @returns boolean indicating if scrolled past threshold
 */
export const useScroll = (threshold: number = 50): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrolled;
};
