// Requirements Section Component

import { getImageUrl } from '@/data/services/imageService';

const requirements = [
  'Hold active operating authority or lease on under Arizontal Transportation',
  'Maintain valid CDL and medical certification',
  'Carry equipment that meets FMCSA and company safety standards',
  'Maintain required insurance coverage',
  'Operate in compliance with all federal and state regulations',
];

export const RequirementsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 order-2 lg:order-1">
            <img
              src={getImageUrl('truck3')}
              alt="Safety Standards"
              className="w-full h-full object-cover shadow-xl"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 bg-theme-primary/10 border-l-4 border-theme-primary mb-6">
              <span className="text-sm font-semibold text-theme-primary">OUR EXPECTATIONS</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Safety & Service Standards
            </h2>
            <p className="text-slate-600 mb-6">
              To maintain service and safety standards, partnering owner-operators must:
            </p>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-bold text-xs">
                    {index + 1}
                  </div>
                  <span className="text-slate-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
