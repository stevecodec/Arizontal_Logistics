// Scroll Utility Functions

/**
 * Smoothly scrolls to an element by its ID
 * @param elementId - The ID of the element to scroll to
 * @param block - Vertical alignment (default: 'start')
 */
export const scrollToElement = (elementId: string, block: ScrollLogicalPosition = 'start'): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block });
  }
};

/**
 * Checks if user has scrolled past a certain threshold
 * @param threshold - Scroll threshold in pixels (default: 50)
 * @returns boolean indicating if scrolled past threshold
 */
export const hasScrolledPast = (threshold: number = 50): boolean => {
  return window.scrollY > threshold;
};
