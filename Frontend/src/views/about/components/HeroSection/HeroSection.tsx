// Hero Section Component

export const HeroSection = () => {
  return (
    <section className="relative h-[50vh] sm:h-[55vh] flex items-center justify-start">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/50"></div>

      {/* Hero Content */}
      <div className="relative text-white max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-20 mt-16 sm:mt-24">
        <p className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 drop-shadow-md">Welcome to</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 drop-shadow-lg inline-block relative pb-3">
          Arizontal Logistics
          <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-[#d58630]"></span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-white/90 mt-4 sm:mt-6 drop-shadow-md">Charlotte, NC</p>
      </div>
    </section>
  );
};
