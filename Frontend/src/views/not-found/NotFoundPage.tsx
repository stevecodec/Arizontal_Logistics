// Not Found Page View Component

import { useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const location = useLocation();
  
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-4 overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-xl md:text-2xl font-semibold mt-6">Page not found</h1>
      </div>
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0">
        404
      </h1>
    </div>
  );
};

export default NotFoundPage;
