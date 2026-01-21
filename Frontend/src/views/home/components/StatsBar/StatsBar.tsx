// Stats Bar Component (View Layer)

import { STATS } from '@/constants/home';

export const StatsBar = () => {
  return (
    <div className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-theme-primary/20 rounded-xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                <i className={`${stat.icon} text-lg sm:text-xl text-theme-secondary`}></i>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-300 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
