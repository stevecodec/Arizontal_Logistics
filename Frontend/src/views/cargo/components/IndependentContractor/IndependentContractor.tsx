// Independent Contractor Statement Component
import { useScrollAnimation } from '../../../../hooks';

export const IndependentContractor = () => {
  const [cardRef, isVisible] = useScrollAnimation<HTMLDivElement>({ 
    threshold: 0.3, 
    triggerOnce: true 
  });

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={cardRef}
          className={`bg-white border-l-4 border-slate-900 p-6 sm:p-8 shadow-sm relative overflow-hidden transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          {/* Sparkle Effects */}
          {isVisible && (
            <>
              <span className="absolute top-4 right-8 w-2 h-2 bg-[#d48634] rounded-full animate-sparkle-1"></span>
              <span className="absolute top-8 right-16 w-1.5 h-1.5 bg-[#d48634] rounded-full animate-sparkle-2"></span>
              <span className="absolute top-12 right-12 w-1 h-1 bg-[#d48634] rounded-full animate-sparkle-3"></span>
              <span className="absolute top-6 right-24 w-1 h-1 bg-[#d48634] rounded-full animate-sparkle-4"></span>
              <span className="absolute bottom-8 left-12 w-2 h-2 bg-[#d48634] rounded-full animate-sparkle-5"></span>
              <span className="absolute bottom-12 left-20 w-1.5 h-1.5 bg-[#d48634] rounded-full animate-sparkle-6"></span>
            </>
          )}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
            Independent Contractor Statement
          </h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Owner-operators partnering with Arizontal Transportation are independent contractors, not employees. They retain control over their equipment, routes, and business decisions, subject only to applicable safety, legal, and regulatory requirements.
          </p>
        </div>
      </div>
    </section>
  );
};
