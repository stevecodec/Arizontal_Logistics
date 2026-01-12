// Quick Quote Component (View Layer)

import { useQuoteViewModel } from '@/viewmodels/home/useQuoteViewModel';
import { SECTION_IDS } from '@/constants';

export const QuickQuote = () => {
  const { formData, isSubmitting, equipmentTypes, updateFormField, handleSubmit } = useQuoteViewModel();

  return (
    <section id={SECTION_IDS.QUICK_QUOTE} className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="relative -mt-32 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Form */}
              <div className="p-10 lg:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <i className="ri-file-list-3-line text-lg text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Quick Quote</h3>
                    <p className="text-xs text-slate-600">Get instant pricing for your shipment</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Origin City</label>
                      <input 
                        type="text" 
                        placeholder="Los Angeles, CA"
                        value={formData.originCity}
                        onChange={(e) => updateFormField('originCity', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-orange-500 text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Destination City</label>
                      <input 
                        type="text" 
                        placeholder="New York, NY"
                        value={formData.destinationCity}
                        onChange={(e) => updateFormField('destinationCity', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-orange-500 text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Equipment Type</label>
                      <select 
                        value={formData.equipmentType}
                        onChange={(e) => updateFormField('equipmentType', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-orange-500 text-sm"
                        required
                      >
                        {equipmentTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Weight (lbs)</label>
                      <input 
                        type="text" 
                        placeholder="40,000"
                        value={formData.weight}
                        onChange={(e) => updateFormField('weight', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-orange-500 text-sm"
                        required
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-sm hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Instant Quote'}
                  </button>
                </form>
              </div>

              {/* Right Side - Benefits */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 lg:p-12 text-white">
                <h4 className="text-lg font-bold mb-6">Why Ship With Us?</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-shield-check-line text-base text-orange-400"></i>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold mb-1">Fully Insured</h5>
                      <p className="text-xs text-slate-300">$100K cargo insurance on every shipment</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-time-line text-base text-orange-400"></i>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold mb-1">On-Time Delivery</h5>
                      <p className="text-xs text-slate-300">98.5% on-time delivery rate nationwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-base text-orange-400"></i>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold mb-1">Real-Time Tracking</h5>
                      <p className="text-xs text-slate-300">Track your shipment every step of the way</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-customer-service-2-line text-base text-orange-400"></i>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold mb-1">24/7 Support</h5>
                      <p className="text-xs text-slate-300">Dedicated team available around the clock</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <p className="text-xs text-slate-400">Need help? Call us at</p>
                  <a href="tel:1-800-ARIZONTAL" className="text-lg font-bold text-orange-400 hover:text-orange-300 transition-colors">
                    1-800-ARIZONTAL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
