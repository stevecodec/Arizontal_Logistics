// Custom Hook for Scroll-triggered Animations

import { useState, useEffect, useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number; // How much of the element should be visible (0-1)
  rootMargin?: string; // Margin around the root
  triggerOnce?: boolean; // Whether to trigger animation only once
}

/**
 * Hook to detect when an element enters the viewport and trigger animations
 * @param options - Configuration options for the intersection observer
 * @returns [ref, isVisible] - Ref to attach to element and visibility state
 */
export const useScrollAnimation = <T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
): [RefObject<T>, boolean] => {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && element) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
};
