// Loading Fallback Component
export const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-200 border-t-theme-primary mx-auto mb-4"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="ri-truck-line text-2xl text-theme-primary"></i>
        </div>
      </div>
      <p className="text-slate-600 text-sm font-medium">Loading...</p>
    </div>
  </div>
);
