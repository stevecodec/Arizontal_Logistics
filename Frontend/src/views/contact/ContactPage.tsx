// Contact Page View Component

import { useState, useEffect, FormEvent } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TopBar } from '@/views/shared/TopBar';
import { Header } from '@/views/shared/Header';
import { Footer } from '@/views/shared/Footer';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants';
import { useToast } from '@/contexts/ToastContext';
import { ValidationErrorList } from '@/components/ValidationErrorList';
import api from '@/services/api';
import { useSEO } from '@/hooks';
import { SEO_CONFIG } from '@/constants/seo';

// Custom marker icon for office location
const officeMarkerIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
});

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

// FAQ Item Component
interface FAQItemProps {
  question: string;
  answer: string;
  number: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, number, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div 
      className={`rounded-none overflow-hidden mb-4 transition-colors duration-300 ${
        isOpen ? 'bg-[#d48634]' : 'bg-gray-700'
      }`}
    >
      <div className="px-6 sm:px-8 py-5">
        <button
          onClick={onToggle}
          className="w-full flex items-start gap-4"
        >
          <span className="flex-shrink-0 text-white text-xl sm:text-2xl font-bold">
            {number}
          </span>
          <span className="flex-1 text-left text-base sm:text-lg font-semibold text-white pr-4">
            {question}
          </span>
          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-white text-2xl font-light">
            {isOpen ? '−' : '+'}
          </span>
        </button>
        {isOpen && (
          <div className="mt-4 pl-8 sm:pl-10">
            <p className="text-sm sm:text-base text-white leading-relaxed">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ContactPage = () => {
  useSEO(SEO_CONFIG.contact);

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    state: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous validation errors
    setValidationErrors([]);

    const requiredFields = [
      formData.fullName,
      formData.company,
      formData.state,
      formData.phone,
      formData.email,
      formData.message,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      setValidationErrors(['Please fill in all required fields']);
      showToast('Please fill in all required fields', 'error');
      return;
    }

    if (formData.message.length > 500) {
      setValidationErrors(['Message must be 500 characters or less']);
      showToast('Message must be 500 characters or less', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.submitContact({
        fullName: formData.fullName,
        company: formData.company,
        state: formData.state,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      });

      if (response.success) {
        showToast('Thank you for your message! We will get back to you soon.', 'success');
        setValidationErrors([]);
        setFormData({
          fullName: '',
          company: '',
          state: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        // Display validation errors professionally
        if (response.errorMessages && response.errorMessages.length > 0) {
          setValidationErrors(response.errorMessages);
          showToast(response.message || 'Please correct the errors below', 'error');
        } else {
          showToast(response.message || 'There was an error submitting your message. Please try again.', 'error');
        }
      }
    } catch (error) {
      showToast('Network error. Please check your connection and try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-1">
        {/* Hero Section - Compact Professional */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden pt-20 sm:pt-24 md:pt-20">
          {/* Subtle overlay pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light bg-[radial-gradient(circle_at_top,_rgba(213,134,48,0.32)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9)_0,_transparent_65%)]" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
            <div className="text-center max-w-3xl mx-auto">         

              {/* Contact highlights - horizontal row */}
              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
                {/* Phone */}
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">
                    <i className="ri-phone-line text-base" />
                  </span>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="font-semibold text-amber-200 hover:text-amber-100"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">
                    <i className="ri-mail-send-line text-base" />
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-semibold text-amber-200 hover:text-amber-100"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-2">
                  {SOCIAL_LINKS.facebook && (
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-amber-200 hover:bg-amber-300 hover:text-slate-900 transition-colors"
                    >
                      <i className="ri-facebook-fill text-lg" />
                    </a>
                  )}
                  {SOCIAL_LINKS.twitter && (
                    <a
                      href={SOCIAL_LINKS.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-amber-200 hover:bg-amber-300 hover:text-slate-900 transition-colors"
                    >
                      <i className="ri-twitter-x-line text-lg" />
                    </a>
                  )}
                  {SOCIAL_LINKS.instagram && (
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-amber-200 hover:bg-amber-300 hover:text-slate-900 transition-colors"
                    >
                      <i className="ri-instagram-fill text-lg" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map + Form Section */}
        <section className="bg-gray-50 py-8 sm:py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
            <div className="grid gap-6 sm:gap-6 lg:gap-6 lg:grid-cols-[1.2fr_1fr] items-stretch">
              {/* Left: Map */}
              <div className="order-2 lg:order-1 lg:ml-4">
                <div className="relative overflow-hidden rounded lg:rounded-l-none shadow-xl h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[500px] z-0">
                  <MapContainer
                    center={[35.2271, -80.8431]} // Charlotte, NC - Office location
                    zoom={15}
                    scrollWheelZoom={false}
                    dragging={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    touchZoom={true}
                    attributionControl={false}
                    style={{ height: '100%', width: '100%', position: 'relative', zIndex: 0 }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker 
                      position={[35.2271, -80.8431]} 
                      icon={officeMarkerIcon}
                      eventHandlers={{
                        click: () => {
                          window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`, '_blank');
                        },
                      }}
                    >
                      <Tooltip 
                        direction="top" 
                        offset={[0, -35]}
                        opacity={0.95}
                        permanent={true}
                      >
                        <div className="text-xs font-semibold cursor-pointer">
                          <div>Arizontal</div>
                          <div className="text-[10px] font-normal text-slate-600">{CONTACT_INFO.address}</div>
                          <div className="text-[9px] text-blue-600 mt-0.5">Click to open in Google Maps</div>
                        </div>
                      </Tooltip>
                    </Marker>
                  </MapContainer>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="order-1 lg:order-2 lg:mr-4">
                <div className="bg-white rounded shadow-xl p-4 sm:p-6 h-auto flex flex-col max-w-lg mx-auto lg:mx-0 w-full">
                  <div className="mb-3 sm:mb-4">
                    <h2 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-0.5">
                      Online Contact Form
                    </h2>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 mb-2">We will respond as soon as possible</p>
                    <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#d58630] to-amber-400"></div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    data-readdy-form
                    id="contact-form"
                    className="space-y-2.5 sm:space-y-3 flex flex-col"
                  >
                    {/* Validation Errors */}
                    <ValidationErrorList errors={validationErrors} />

                    {/* Full Name */}
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Full Name*"
                      className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-50 border-0 rounded-sm focus:outline-none focus:bg-gray-100 text-xs placeholder:text-theme-primary"
                    />

                    {/* Company */}
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name*"
                      className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-50 border-0 rounded-sm focus:outline-none focus:bg-gray-100 text-xs placeholder:text-theme-primary"
                    />

                    {/* State */}
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-50 border-0 rounded-sm focus:outline-none focus:bg-gray-100 text-xs text-theme-primary"
                    >
                      {US_STATES.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      ))}
                    </select>

                    {/* Phone */}
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="Phone Number*"
                      className="phone-input-custom"
                    />
                    <input
                      type="hidden"
                      name="phone"
                      value={formData.phone || ''}
                    />

                    {/* Email */}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address*"
                      className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-50 border-0 rounded-sm focus:outline-none focus:bg-gray-100 text-xs placeholder:text-theme-primary"
                    />

                    {/* Message */}
                    <div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        maxLength={500}
                        placeholder="Your message...*"
                        rows={5}
                        className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-50 border-0 rounded-sm focus:outline-none focus:bg-gray-100 text-xs resize-none placeholder:text-theme-primary"
                      />
                      <p className="mt-0.5 text-[10px] text-gray-400">
                        {formData.message.length}/500
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || formData.message.length > 500}
                      className="self-start px-5 sm:px-6 py-2 bg-gradient-to-r from-[#d58630] to-theme-primary text-white text-xs font-semibold rounded-sm hover:from-[#b86f28] hover:to-theme-dark transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Frequently asked questions
              </h2>
            </div>

            {/* FAQ Items */}
            <div>
              <FAQItem
                number={1}
                question="What types of freight do you transport?"
                answer="We specialize in full truckload (FTL), less-than-truckload (LTL), intermodal, and specialized freight transportation. Our fleet is equipped to handle a wide variety of cargo, including temperature-controlled, oversized, and time-sensitive shipments across the United States."
                isOpen={openFAQIndex === 1}
                onToggle={() => setOpenFAQIndex(openFAQIndex === 1 ? null : 1)}
              />
              <FAQItem
                number={2}
                question="What areas do you service?"
                answer="We provide transportation services across all 48 contiguous United States. Our network of carriers and strategic partnerships enable us to offer comprehensive coverage from coast to coast, with expedited service available for time-critical shipments."
                isOpen={openFAQIndex === 2}
                onToggle={() => setOpenFAQIndex(openFAQIndex === 2 ? null : 2)}
              />
              <FAQItem
                number={3}
                question="How do I get a quote?"
                answer="You can request a quote by filling out the contact form above, calling us directly at our phone number, or emailing us. We typically respond to quote requests within 2-4 business hours. For faster service, having your shipment details ready (origin, destination, weight, dimensions) will help us provide an accurate quote quickly."
                isOpen={openFAQIndex === 3}
                onToggle={() => setOpenFAQIndex(openFAQIndex === 3 ? null : 3)}
              />
              <FAQItem
                number={4}
                question="Do you offer real-time tracking?"
                answer="Yes, we provide real-time GPS tracking for all shipments. Once your freight is picked up, you'll receive tracking credentials that allow you to monitor your shipment's location and estimated delivery time 24/7 through our online portal."
                isOpen={openFAQIndex === 4}
                onToggle={() => setOpenFAQIndex(openFAQIndex === 4 ? null : 4)}
              />
              <FAQItem
                number={5}
                question="What are your payment terms?"
                answer="We offer flexible payment terms based on your business needs. New customers typically start with prepayment or COD terms. After establishing a relationship, we can extend net-30 terms to qualified accounts. We accept all major payment methods including credit cards, ACH transfers, and checks."
                isOpen={openFAQIndex === 5}
                onToggle={() => setOpenFAQIndex(openFAQIndex === 5 ? null : 5)}
              />
              <FAQItem
                number={6}
                question="How do I become a carrier partner?"
                answer="If you're interested in becoming a carrier partner, please visit our Carriers page or contact our carrier relations team. We look for reliable carriers with proper insurance, safety ratings, and equipment to join our network. Our team will guide you through the application and onboarding process."
                isOpen={openFAQIndex === 6}
                onToggle={() => setOpenFAQIndex(openFAQIndex === 6 ? null : 6)}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
