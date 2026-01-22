// Partnership Overview Component

import { useEffect, useRef, useState } from 'react';

const partnershipSteps = [
  {
    number: '1',
    title: 'Fill Out Application',
  },
  {
    number: '2',
    title: 'Submit Documents',
  },
  {
    number: '3',
    title: 'Get Approved',
  },
  {
    number: '4',
    title: 'Start Hauling',
  },
];

export const PartnershipOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div ref={sectionRef}>
            <div className={`inline-block px-3 sm:px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-4 sm:mb-6 ${isVisible ? 'animate-scroll-fly-up' : 'opacity-0'}`}>
              <span className="text-xs sm:text-sm font-semibold text-theme-primary">PARTNERSHIP OVERVIEW</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 ${isVisible ? 'animate-scroll-fly-up-delay-1' : 'opacity-0'}`}>
              Independent Contractors, Professional Support
            </h2>
            <p className={`text-sm sm:text-base text-slate-600 mb-4 leading-relaxed ${isVisible ? 'animate-scroll-fly-up-delay-2' : 'opacity-0'}`}>
              Owner-operators who partner with Arizontal Transportation operate as independent contractors, maintaining full ownership and control of their equipment and business operations.
            </p>
            <p className={`text-sm sm:text-base text-slate-600 leading-relaxed ${isVisible ? 'animate-scroll-fly-up-delay-3' : 'opacity-0'}`}>
              Our role is to provide consistent freight opportunities, professional dispatch support, and clear communication—allowing owner-operators to focus on safe and efficient transportation.
            </p>
          </div>
          
          {/* Partnership Steps Card */}
          <div 
            className="rounded-lg p-6 lg:p-8 shadow-xl animate-fly-up border-2"
            style={{
              background: 'linear-gradient(135deg, #007AFF 0%, #46AFFF 50%, #d58630 100%)',
              borderColor: 'rgba(255, 255, 255, 0.3)'
            }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-6 text-white">Quick Steps to Partner</h3>
            <div className="space-y-4">
              {partnershipSteps.map((step, index) => (
                <div 
                  key={step.number} 
                  className="flex gap-4 items-center transform transition-all duration-300 hover:translate-x-2"
                  style={{ 
                    animation: `flyUpStagger 0.6s ease-out ${index * 0.15}s both` 
                  }}
                >
                  <div className="flex-shrink-0">
                    <div 
                      className="w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center font-bold text-base transition-all duration-300 hover:scale-110 hover:shadow-lg" 
                      style={{ 
                        borderColor: '#d58630', 
                        color: '#d58630' 
                      }}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm sm:text-base">
                      {step.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <style>{`
            @keyframes flyUpStagger {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes flyUp {
              from {
                opacity: 0;
                transform: translateY(50px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes scrollFlyUp {
              from {
                opacity: 0;
                transform: translateY(40px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            .animate-fly-up {
              animation: flyUp 0.8s ease-out;
            }
            
            .animate-scroll-fly-up {
              animation: scrollFlyUp 0.8s ease-out forwards;
            }
            
            .animate-scroll-fly-up-delay-1 {
              animation: scrollFlyUp 0.8s ease-out 0.1s forwards;
            }
            
            .animate-scroll-fly-up-delay-2 {
              animation: scrollFlyUp 0.8s ease-out 0.2s forwards;
            }
            
            .animate-scroll-fly-up-delay-3 {
              animation: scrollFlyUp 0.8s ease-out 0.3s forwards;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};
