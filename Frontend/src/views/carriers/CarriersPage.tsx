// Careers Page View Component

import { useEffect, useState, FormEvent } from 'react';
import { Header } from '@/views/shared/Header';
import { Footer } from '@/views/shared/Footer';
import { CONTACT_INFO } from '@/constants';
import { getImageUrl } from '@/data/services/imageService';

const CAREER_BENEFITS = [
  {
    title: 'Competitive pay',
    description: 'Strong compensation packages with predictable, steady miles.',
    icon: 'ri-briefcase-4-line',
  },
  {
    title: 'Flexible home time',
    description: 'Routes and schedules that respect your time on and off the road.',
    icon: 'ri-calendar-check-line',
  },
  {
    title: 'Health & wellness',
    description: 'Supportive benefits and a safety-first culture you can trust.',
    icon: 'ri-heart-pulse-line',
  },
  {
    title: 'Modern equipment',
    description: 'Well-maintained trucks and equipment standards you can count on.',
    icon: 'ri-truck-line',
  },
  {
    title: 'Safety support',
    description: 'Clear compliance guidance and proactive operations support.',
    icon: 'ri-shield-check-line',
  },
  {
    title: 'Strong community',
    description: 'A professional team that values drivers and communication.',
    icon: 'ri-team-line',
  },
];

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [addressQuery, setAddressQuery] = useState('');
  const [addressSuggestions, setAddressSuggestions] = useState<
    { place_id: number; display_name: string; address: Record<string, string> }[]
  >([]);
  const [isAddressLoading, setIsAddressLoading] = useState(false);

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
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formElement = e.currentTarget;
      const formDataToSend = new FormData(formElement);

      const response = await fetch('https://readdy.ai/api/form/d5j9p8pugl990ce152a0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
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
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
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

          <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
            <div className="bg-white text-slate-900 shadow-xl border border-slate-100 px-8 py-10 lg:px-12 lg:py-12 max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-4">
                Careers at Arizontal Logistics
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Build what the road needs.</h1>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We move freight with precision, care, and accountability. If you&apos;re ready to drive with a
                team that values safety, communication, and consistency, we&apos;d love to meet you.
              </p>
              <a
                href="#application"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-theme-primary rounded-md hover:bg-theme-dark transition-colors"
              >
                See open roles
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                Supported by exceptional benefits
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                Our team keeps the freight moving, and we invest in the people who keep it on time.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {CAREER_BENEFITS.map((benefit) => (
                <div key={benefit.title} className="border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 text-theme-primary">
                    <i className={`${benefit.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="application" className="-mt-10 pb-16 bg-slate-50 relative z-10">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                Driver application
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                Share a few details and our recruiting team will contact you with the next steps.
              </p>
            </div>

            <div className="bg-white border border-slate-100 shadow-lg p-8 lg:p-10">
              {submitStatus !== 'idle' && (
                <div className={`mb-6 rounded-md border px-4 py-3 text-sm ${
                  submitStatus === 'success'
                    ? 'border-green-200 bg-green-50 text-green-800'
                    : 'border-red-200 bg-red-50 text-red-800'
                }`}>
                  {submitStatus === 'success'
                    ? 'Application received. Our team will reach out shortly.'
                    : 'There was an error submitting your application. Please try again.'}
                </div>
              )}

              <form onSubmit={handleSubmit} data-readdy-form id="driver-application" className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
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
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
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
                              onClick={() => {
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

                <div className="grid gap-6 md:grid-cols-2">
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

                <div className="grid gap-6 md:grid-cols-2">
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

                <div className="grid gap-6 md:grid-cols-2">
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
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
