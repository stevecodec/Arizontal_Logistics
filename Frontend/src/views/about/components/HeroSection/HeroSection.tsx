// Hero Section Component

export const HeroSection = () => {
  return (
    <section className="relative h-[50vh] flex items-center justify-start">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/50"></div>

      {/* Hero Content */}
      <div className="relative text-white max-w-7xl mx-auto w-full px-6 lg:px-8 z-20 mt-24">
        <p className="text-2xl lg:text-2xl mb-4 drop-shadow-md">Welcome to</p>
        <h1 className="text-5xl lg:text-4xl font-bold mb-2 drop-shadow-lg inline-block relative pb-3">
          Arizontal Logistics
          <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-[#d58630]"></span>
        </h1>
        <p className="text-xl text-white/90 mt-6 drop-shadow-md">Charlotte, NC</p>
      </div>
    </section>
  );
};
