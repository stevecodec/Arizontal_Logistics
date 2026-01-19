// Contact Page View Component

import { useState, FormEvent, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Header } from '@/views/shared/Header';
import { Footer } from '@/views/shared/Footer';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants';
import posterImage from '@/assets/images/Arizontal_poster1.jpg';

// US States list
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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    state: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  // Auto-dismiss notification after 5 seconds
  useEffect(() => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredFields = [
      formData.fullName,
      formData.company,
      formData.state,
      formData.phone,
      formData.email,
      formData.message,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      setSubmitStatus('error');
      return;
    }

    if (formData.message.length > 500) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formElement = e.currentTarget;
      const formDataToSend = new FormData(formElement);
      
      // Phone number is already in international format from PhoneInput (e.g., +1234567890)

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
          company: '',
          state: '',
          phone: '',
          email: '',
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
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Notification Toast - Fixed at Top */}
      {(submitStatus === 'success' || submitStatus === 'error') && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-slide-down">
          <div className={`p-4 rounded-md shadow-lg min-w-[300px] max-w-md ${
            submitStatus === 'success' 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            <p className={`text-xs text-center ${
              submitStatus === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {submitStatus === 'success' 
                ? 'Thank you for your message! We will get back to you soon.' 
                : 'There was an error submitting your message. Please try again.'}
            </p>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section - Dark Blue Background */}
        <section className="bg-gradient-to-t from-[#2C4A6D] to-slate-100 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center py-12">
            <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-slate-900">Contact Us</h1>
            <p className="text-sm mb-12 leading-relaxed text-slate-700">
              Arizontal Logistics would like to do business with you! Let us know where we can pick your loads and we will get back to you with a quote. Thank you in advance!
            </p>

            {/* Contact Method Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* By Mail */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <i className="ri-mail-line text-5xl text-[#2C4A6D]"></i>
                </div>
                <h3 className="font-bold text-base mb-2 text-slate-900">By Mail</h3>
                <p className="text-xs text-slate-700">{CONTACT_INFO.address}</p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <i className="ri-phone-line text-5xl text-[#2C4A6D]"></i>
                </div>
                <h3 className="font-bold text-base mb-2 text-slate-900">Phone</h3>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-xs hover:underline text-slate-700"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <i className="ri-mail-send-line text-5xl text-[#2C4A6D]"></i>
                </div>
                <h3 className="font-bold text-base mb-2 text-slate-900">Email</h3>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-theme-primary hover:text-theme-dark cursor-pointer transition-colors text-xs"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6">
              {SOCIAL_LINKS.facebook && (
                <a 
                  href={SOCIAL_LINKS.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 flex items-center justify-center hover:opacity-80 cursor-pointer transition-opacity"
                >
                  <i className="ri-facebook-fill text-3xl text-[#2C4A6D]"></i>
                </a>
              )}
              {SOCIAL_LINKS.twitter && (
                <a 
                  href={SOCIAL_LINKS.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 flex items-center justify-center hover:opacity-80 cursor-pointer transition-opacity"
                >
                  <i className="ri-twitter-x-line text-3xl text-[#2C4A6D]"></i>
                </a>
              )}
              {SOCIAL_LINKS.instagram && (
                <a 
                  href={SOCIAL_LINKS.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 flex items-center justify-center hover:opacity-80 cursor-pointer transition-opacity"
                >
                  <i className="ri-instagram-fill text-3xl text-[#2C4A6D]"></i>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Form Section - Light Background */}
        <section className="bg-white py-12">
          <div className="w-full">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-stretch">
              <div className="order-2 lg:order-1 px-0">
                <div className="relative overflow-hidden h-full shadow-lg">
                  <img
                    src={posterImage}
                    alt="Arizontal Logistics"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 h-full flex flex-col px-6 lg:px-10">
                <div className="mb-8">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 text-center lg:text-left">
                    Online Contact Form
                  </h2>
                  <div className="w-1/4 h-0.5 bg-theme-primary"></div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  data-readdy-form
                  id="contact-form"
                  className="p-6 flex-1 w-full max-w-md"
                >
              {/* Full Name Field */}
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent text-xs"
                />
              </div>

              {/* Company Field */}
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent text-xs"
                />
              </div>

              {/* State Field */}
              <div className="mb-6">
                <label htmlFor="state" className="block text-sm font-semibold text-gray-900 mb-2">
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent text-xs bg-white"
                >
                  {US_STATES.map((state) => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone Field */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
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

              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent text-xs"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent text-xs resize-none"
                  placeholder="Please share your comments, feedback, or questions..."
                />
                <p className="mt-2 text-xs text-gray-500">
                  {formData.message.length}/500 characters
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full px-6 py-3 bg-gradient-to-r from-theme-primary to-theme-dark text-white text-xs font-semibold rounded-md hover:from-theme-dark hover:to-theme-darker transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
