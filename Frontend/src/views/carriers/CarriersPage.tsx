// Careers Page View Component

import { useEffect, useState, FormEvent } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { TopBar } from '@/views/shared/TopBar';
import { Header } from '@/views/shared/Header';
import { Footer } from '@/views/shared/Footer';
import { CompanyLogos } from '@/views/home/components/CompanyLogos';
import { CONTACT_INFO } from '@/constants';
import { getImageUrl } from '@/data/services/imageService';
import { useToast } from '@/contexts/ToastContext';
import { ValidationErrorList } from '@/components/ValidationErrorList';
import api from '@/services/api';


const US_STATES = [
  { value: '', label: 'Select a state' },
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

const CareersPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    experience: '',
    cdlType: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addressQuery, setAddressQuery] = useState('');
  const [addressSuggestions, setAddressSuggestions] = useState<
    { place_id: number; display_name: string; address: Record<string, string> }[]
  >([]);
  const [isAddressLoading, setIsAddressLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const { showToast } = useToast();

  const handlePhoneChange = (value?: string) => {
    const digits = (value || '').replace(/\D/g, '');
    setFormData((prev) => {
      const prevDigits = (prev.phone || '').replace(/\D/g, '');
      if (digits.length > 15 && prevDigits.length >= 15) {
        return prev;
      }
      const limited = digits.slice(0, 15);
      return {
        ...prev,
        phone: limited ? `+${limited}` : '',
      };
    });
  };

  useEffect(() => {
    if (!addressQuery.trim() || addressQuery.trim().length < 3) {
      setAddressSuggestions([]);
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(async () => {
      setIsAddressLoading(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=6&countrycodes=us&q=${encodeURIComponent(
            addressQuery.trim()
          )}`,
          { signal: controller.signal, headers: { Accept: 'application/json' } }
        );
        const data = await response.json();
        setAddressSuggestions(Array.isArray(data) ? data : []);
      } catch (error) {
        if ((error as { name?: string }).name !== 'AbortError') {
          setAddressSuggestions([]);
        }
      } finally {
        setIsAddressLoading(false);
      }
    }, 350);

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [addressQuery]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous validation errors
    setValidationErrors([]);

    const requiredFields = [
      formData.fullName,
      formData.phone,
      formData.email,
      formData.experience,
      formData.cdlType,
      formData.addressLine1,
      formData.city,
      formData.state,
      formData.zip,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      setValidationErrors(['Please fill in all required fields']);
      showToast('Please fill in all required fields', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.submitDriverApplication({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        experience: formData.experience,
        cdlType: formData.cdlType,
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        message: formData.message,
      });

      if (response.success) {
        showToast('Application received. Our team will reach out shortly.', 'success');
        setValidationErrors([]);
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          experience: '',
          cdlType: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          zip: '',
          message: '',
        });
      } else {
        // Display validation errors professionally
        if (response.errorMessages && response.errorMessages.length > 0) {
          setValidationErrors(response.errorMessages);
          showToast(response.message || 'Please correct the errors below', 'error');
          // Scroll to top to show validation errors
          document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          showToast(response.message || 'There was an error submitting your application. Please try again.', 'error');
        }
      }
    } catch (error) {
      showToast('Network error. Please check your connection and try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-1 pt-16">
        <section className="relative overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0">
            <img
              src={getImageUrl('overlay1')}
              alt="Professional drivers"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/85"></div>
          </div>
          <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-32 lg:py-40"></div>
        </section>

        <section id="application" className="relative z-20 -mt-36 -mb-16 bg-transparent">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="bg-white border border-slate-100 shadow-lg p-6 lg:p-8 max-w-3xl mx-auto">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3 text-center">
                Careers at Arizontal Logistics
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 text-center">
                Driver application
              </h2>
              <p className="text-sm text-slate-600 mb-6 text-center max-w-2xl mx-auto">
                Share a few details and our recruiting team will contact you with the next steps.
              </p>

              {/* Validation Errors */}
              <ValidationErrorList errors={validationErrors} />

              <form onSubmit={handleSubmit} id="driver-application" className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-2">
                      Full name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="phone-input-custom"
                    />
                    <input
                      type="hidden"
                      name="phone"
                      value={formData.phone || ''}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="addressLine1" className="block text-sm font-semibold text-slate-900 mb-2">
                      Address
                    </label>
                    <input
                      id="addressLine1"
                      name="addressLine1"
                      type="text"
                      value={formData.addressLine1}
                      onChange={(e) => {
                        const nextValue = e.target.value;
                        setFormData({ ...formData, addressLine1: nextValue });
                        setAddressQuery(nextValue);
                      }}
                      className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                      placeholder="Street address"
                      autoComplete="street-address"
                    />
                    {(isAddressLoading || addressSuggestions.length > 0) && (
                      <div className="absolute z-20 mt-2 w-full rounded-md border border-slate-200 bg-white shadow-lg">
                        {isAddressLoading && (
                          <div className="px-4 py-2 text-xs text-slate-500">Searching addresses...</div>
                        )}
                        {!isAddressLoading && addressSuggestions.length === 0 && (
                          <div className="px-4 py-2 text-xs text-slate-500">No matches found.</div>
                        )}
                        {!isAddressLoading &&
                          addressSuggestions.map((suggestion) => (
                            <button
                              type="button"
                              key={suggestion.place_id}
                              onMouseDown={(event) => {
                                event.preventDefault();
                                const address = suggestion.address || {};
                                const city =
                                  address.city ||
                                  address.town ||
                                  address.village ||
                                  address.hamlet ||
                                  address.county ||
                                  '';
                                const stateLabel = address.state || '';
                                const stateValue =
                                  US_STATES.find(
                                    (state) => state.label.toLowerCase() === stateLabel.toLowerCase()
                                  )?.value || '';
                                const street = [address.house_number, address.road]
                                  .filter(Boolean)
                                  .join(' ')
                                  .trim();
                                const line1 = street || suggestion.display_name.split(',')[0];

                                setFormData({
                                  ...formData,
                                  addressLine1: line1,
                                  city,
                                  state: stateValue,
                                  zip: address.postcode || '',
                                });
                                setAddressQuery(line1);
                                setAddressSuggestions([]);
                              }}
                              className="block w-full px-4 py-2 text-left text-xs text-slate-700 hover:bg-slate-100"
                            >
                              {suggestion.display_name}
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="addressLine2" className="block text-sm font-semibold text-slate-900 mb-2">
                      Address line 2
                    </label>
                    <input
                      id="addressLine2"
                      name="addressLine2"
                      type="text"
                      value={formData.addressLine2}
                      onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                      className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                      placeholder="Apartment, suite, unit"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-slate-900 mb-2">
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-slate-900 mb-2">
                      State
                    </label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full border border-slate-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                    >
                      {US_STATES.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-semibold text-slate-900 mb-2">
                      ZIP code
                    </label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-slate-900 mb-2">
                      Years of experience
                    </label>
                    <input
                      id="experience"
                      name="experience"
                      type="text"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                      placeholder="e.g. 5 years"
                    />
                  </div>
                  <div>
                    <label htmlFor="cdlType" className="block text-sm font-semibold text-slate-900 mb-2">
                      CDL type
                    </label>
                    <select
                      id="cdlType"
                      name="cdlType"
                      value={formData.cdlType}
                      onChange={(e) => setFormData({ ...formData, cdlType: e.target.value })}
                      className="w-full border border-slate-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="Class A">Class A</option>
                      <option value="Class B">Class B</option>
                      <option value="Class C">Class C</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Additional details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                    placeholder="Tell us about your preferred lanes, equipment, or schedule."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                  <p className="text-xs text-slate-500">
                    Need help? Call {CONTACT_INFO.phone} or email {CONTACT_INFO.email}.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-gradient-to-r from-theme-primary to-theme-dark text-white text-sm font-semibold rounded-md hover:from-theme-dark hover:to-theme-darker transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <div className="mt-24">
          <CompanyLogos />
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
