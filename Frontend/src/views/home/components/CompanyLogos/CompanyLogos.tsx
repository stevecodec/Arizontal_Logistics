// Company Logos Slider Component (View Layer)

import { useEffect, useRef } from 'react';
import huberLogo from '@/assets/images/huber_patners.svg';
import atlasLogo from '@/assets/images/atlas_patners.png';

// Company logos - using actual partner logo
const COMPANY_LOGOS = [
  { id: '1', name: 'Huber', logo: huberLogo },
  { id: '2', name: 'Atlas', logo: atlasLogo },
  { id: '3', name: 'Huber', logo: huberLogo },
  { id: '4', name: 'Atlas', logo: atlasLogo },
  { id: '5', name: 'Huber', logo: huberLogo },
  { id: '6', name: 'Atlas', logo: atlasLogo },  
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
    
    // Track all timeouts for cleanup
    const timeouts: NodeJS.Timeout[] = [];

    // Set initial scroll position
    logoSlider.scrollLeft = 0;

    const scroll = () => {
      if (!logoSlider || isScrollingRef.current) return;
      
      isScrollingRef.current = true;
      logoSlider.scrollBy({ left: 1, behavior: 'auto' }); // Smooth continuous scroll
      
      // Reset flag with tracked timeout
      const timeout = setTimeout(() => {
        isScrollingRef.current = false;
      }, 16);
      timeouts.push(timeout);
    };

    // Handle seamless loop
    const handleScroll = () => {
      if (!logoSlider || isScrollingRef.current) return;
      
      const scrollLeft = logoSlider.scrollLeft;
      
      // If we've scrolled past the original logos, jump back instantly
      if (scrollLeft >= originalWidth - 10) {
        logoSlider.style.scrollBehavior = 'auto';
        logoSlider.scrollLeft = scrollLeft - originalWidth;
        
        const timeout = setTimeout(() => {
          if (logoSlider) {
            logoSlider.style.scrollBehavior = 'auto';
          }
        }, 0);
        timeouts.push(timeout);
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
      // Clear all tracked timeouts
      timeouts.forEach((timeout) => clearTimeout(timeout));
      
      // Clear interval
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
      
      // Remove event listeners
      logoSlider.removeEventListener('scroll', handleScroll);
      logoSlider.removeEventListener('mouseenter', handleMouseEnter);
      logoSlider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-8 sm:py-12 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={logoSliderRef}
          className="overflow-x-hidden scrollbar-hide w-full relative"
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="flex gap-6 sm:gap-8 items-center" style={{ width: 'max-content', minHeight: '80px' }}>
            {duplicatedLogos.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img 
                  src={company.logo}
                  alt={company.name}
                  className="h-12 sm:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
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
