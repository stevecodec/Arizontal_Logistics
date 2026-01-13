// People You Trust - Top Rated Drivers Component

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TOP_DRIVERS } from '@/constants/home';
import whyChooseUsImage from '@/assets/images/whyChooseUs.jpg';

export const CareersTeaser = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);

  // Duplicate drivers for seamless loop
  const duplicatedDrivers = [...TOP_DRIVERS, ...TOP_DRIVERS];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cardWidth = 256; // w-64 = 256px
    const gap = 24; // gap-6 = 24px
    const cardWithGap = cardWidth + gap;
    const originalWidth = TOP_DRIVERS.length * cardWithGap;

    // Set initial scroll position to start of original cards
    scrollContainer.scrollLeft = 0;

    const scroll = () => {
      if (!scrollContainer || isScrollingRef.current) return;
      
      isScrollingRef.current = true;
      scrollContainer.scrollBy({ left: cardWithGap, behavior: 'smooth' });
      
      // Reset flag after scroll animation completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    };

    // Handle seamless loop - jump back when reaching duplicated section
    const handleScroll = () => {
      if (!scrollContainer || isScrollingRef.current) return;
      
      const scrollLeft = scrollContainer.scrollLeft;
      
      // If we've scrolled past the original cards, jump back instantly
      if (scrollLeft >= originalWidth - 10) {
        // Temporarily disable smooth scrolling for instant jump
        scrollContainer.style.scrollBehavior = 'auto';
        scrollContainer.scrollLeft = scrollLeft - originalWidth;
        // Re-enable smooth scrolling
        setTimeout(() => {
          if (scrollContainer) {
            scrollContainer.style.scrollBehavior = 'smooth';
          }
        }, 0);
      }
    };

    // Start auto-scrolling
    scrollIntervalRef.current = setInterval(scroll, 3000); // Scroll every 3 seconds

    // Listen for scroll events to handle seamless loop
    scrollContainer.addEventListener('scroll', handleScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };

    const handleMouseLeave = () => {
      if (!scrollIntervalRef.current) {
        scrollIntervalRef.current = setInterval(scroll, 3000);
      }
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="py-12 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
            <span className="border-b-2 border-theme-primary pb-1">People You</span> Trust
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl mx-auto mb-12">
            Meet our top-rated drivers - highly disciplined and reliable Carriers committed to delivering excellence on every route.
          </p>
        </div>

        {/* Driver Cards Slider */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pt-20 pb-4 scrollbar-hide scroll-smooth" 
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <div className="flex gap-6 px-2">
            {duplicatedDrivers.map((driver, index) => (
              <div
                key={`${driver.id}-${index}`}
                className="bg-white rounded-xl shadow-lg overflow-visible flex flex-col relative pt-28 flex-shrink-0 w-64"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Image Section with Background Color - Extends out of card */}
                <div
                  className="absolute top-0 left-0 right-0 h-40 flex items-center justify-center -mt-16"
                  style={{ backgroundColor: driver.backgroundColor || '#F5F5DC' }}
                >
                  {/* Driver image with fancy design */}
                  <div className="relative">
                    <div className="w-32 h-40 rounded-xl overflow-hidden border-2 border-white shadow-xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                      <img 
                        src={whyChooseUsImage}
                        alt={driver.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {driver.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">
                    {driver.role && driver.location 
                      ? `${driver.role}, ${driver.location}`
                      : driver.role || `${driver.yearsExperience} Years Experience`}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1.5 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`ri-star-fill text-[10px] ${
                            i < Math.floor(driver.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-600 font-semibold">
                      {driver.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-slate-500">Experience</span>
                      <span className="text-slate-900 font-semibold">{driver.yearsExperience} Years</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-slate-500">Deliveries</span>
                      <span className="text-slate-900 font-semibold">{driver.totalDeliveries.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-slate-500">On-Time Rate</span>
                      <span className="text-slate-900 font-semibold">{driver.onTimeRate}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-theme-primary to-theme-dark text-white text-sm font-semibold rounded-sm hover:from-theme-dark hover:to-theme-darker transition-all whitespace-nowrap cursor-pointer shadow-xl"
          >
            Let us link you up
          </Link>
        </div>
      </div>
    </div>
  );
};
