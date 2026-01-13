// Company Logos Slider Component (View Layer)

import { useEffect, useRef } from 'react';
import jbhuntLogo from '@/assets/images/jbhunt_patners.png';

// Company logos - using actual partner logo
const COMPANY_LOGOS = [
  { id: '1', name: 'JB Hunt', logo: jbhuntLogo },
  { id: '2', name: 'JB Hunt', logo: jbhuntLogo },
  { id: '3', name: 'JB Hunt', logo: jbhuntLogo },
  { id: '4', name: 'JB Hunt', logo: jbhuntLogo },
  { id: '5', name: 'JB Hunt', logo: jbhuntLogo },
  { id: '6', name: 'JB Hunt', logo: jbhuntLogo },
  { id: '7', name: 'JB Hunt', logo: jbhuntLogo },
  { id: '8', name: 'JB Hunt', logo: jbhuntLogo },
];

export const CompanyLogos = () => {
  const logoSliderRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...COMPANY_LOGOS, ...COMPANY_LOGOS];

  useEffect(() => {
    const logoSlider = logoSliderRef.current;
    if (!logoSlider) return;

    const logoWidth = 150; // Approximate width per logo
    const gap = 32; // gap-8 = 32px
    const logoWithGap = logoWidth + gap;
    const originalWidth = COMPANY_LOGOS.length * logoWithGap;

    // Set initial scroll position
    logoSlider.scrollLeft = 0;

    const scroll = () => {
      if (!logoSlider || isScrollingRef.current) return;
      
      isScrollingRef.current = true;
      logoSlider.scrollBy({ left: 1, behavior: 'auto' }); // Smooth continuous scroll
      
      // Reset flag
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 16);
    };

    // Handle seamless loop
    const handleScroll = () => {
      if (!logoSlider || isScrollingRef.current) return;
      
      const scrollLeft = logoSlider.scrollLeft;
      
      // If we've scrolled past the original logos, jump back instantly
      if (scrollLeft >= originalWidth - 10) {
        logoSlider.style.scrollBehavior = 'auto';
        logoSlider.scrollLeft = scrollLeft - originalWidth;
        setTimeout(() => {
          if (logoSlider) {
            logoSlider.style.scrollBehavior = 'auto';
          }
        }, 0);
      }
    };

    // Start auto-scrolling (continuous smooth scroll)
    scrollIntervalRef.current = setInterval(scroll, 16); // ~60fps

    // Listen for scroll events
    logoSlider.addEventListener('scroll', handleScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };

    const handleMouseLeave = () => {
      if (!scrollIntervalRef.current) {
        scrollIntervalRef.current = setInterval(scroll, 16);
      }
    };

    logoSlider.addEventListener('mouseenter', handleMouseEnter);
    logoSlider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      logoSlider.removeEventListener('scroll', handleScroll);
      logoSlider.removeEventListener('mouseenter', handleMouseEnter);
      logoSlider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-12 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={logoSliderRef}
          className="overflow-x-hidden scrollbar-hide w-full relative"
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="flex gap-8 items-center" style={{ width: 'max-content', minHeight: '100px' }}>
            {duplicatedLogos.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img 
                  src={company.logo}
                  alt={company.name}
                  className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
