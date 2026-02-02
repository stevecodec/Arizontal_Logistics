// Company and Personal Details Step
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface CompanyDetailsStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
}

export const CompanyDetailsStep = ({ formData, updateFormData, onNext }: CompanyDetailsStepProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.companyName) newErrors.companyName = 'Company or full name is required';
    if (!formData.street) newErrors.street = 'Street is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div>
      {/* Merged Company & Personal Details */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-1">Company | Personal Details</h2>
        <p className="text-xs text-slate-500 mb-4">* Mandatory field</p>

        <div className="space-y-3">
          {/* Title Selection - At Top, Not Mandatory */}
          <div>
            <div className="flex gap-3">
              <label className="flex items-center px-4 py-2 text-sm border border-slate-300 cursor-pointer hover:bg-slate-50 transition-colors">
                <input
                  type="radio"
                  name="title"
                  value="Ms"
                  checked={formData.title === 'Ms'}
                  onChange={(e) => updateFormData('title', e.target.value)}
                  className="mr-2"
                />
                <span className="text-blue-600 font-medium text-sm">Ms</span>
              </label>
              <label className="flex items-center px-4 py-2 text-sm border border-slate-300 cursor-pointer hover:bg-slate-50 transition-colors">
                <input
                  type="radio"
                  name="title"
                  value="Mr"
                  checked={formData.title === 'Mr'}
                  onChange={(e) => updateFormData('title', e.target.value)}
                  className="mr-2"
                />
                <span className="text-blue-600 font-medium text-sm">Mr</span>
              </label>
            </div>
          </div>

          {/* Company or Full Name */}
          <div>
            <input
              type="text"
              placeholder="Company or full name*"
              value={formData.companyName}
              onChange={(e) => updateFormData('companyName', e.target.value)}
              className={`w-full px-3 py-2 text-sm border ${errors.companyName ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-theme-primary transition-colors`}
            />
            {errors.companyName && <p className="text-red-500 text-xs mt-0.5">{errors.companyName}</p>}
          </div>

          {/* Street */}
          <div>
            <input
              type="text"
              placeholder="Street*"
              value={formData.street}
              onChange={(e) => updateFormData('street', e.target.value)}
              className={`w-full px-3 py-2 text-sm border ${errors.street ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-theme-primary transition-colors`}
            />
            {errors.street && <p className="text-red-500 text-xs mt-0.5">{errors.street}</p>}
          </div>

          {/* Post Code & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                placeholder="Post Code*"
                value={formData.postCode}
                onChange={(e) => updateFormData('postCode', e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 focus:outline-none focus:border-theme-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="City*"
                value={formData.city}
                onChange={(e) => updateFormData('city', e.target.value)}
                className={`w-full px-3 py-2 text-sm border ${errors.city ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-theme-primary transition-colors`}
              />
              {errors.city && <p className="text-red-500 text-xs mt-0.5">{errors.city}</p>}
            </div>
          </div>

          {/* Country - Fixed to United States */}
          <div>
            <input
              type="text"
              value="United States"
              readOnly
              className="w-full px-3 py-2 text-sm border border-slate-300 bg-slate-50 text-slate-600 cursor-not-allowed"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 my-4"></div>

          {/* Phone Number with Library */}
          <div>
            <PhoneInput
              international
              defaultCountry="US"
              value={formData.phoneNumber}
              onChange={(value) => updateFormData('phoneNumber', value)}
              className={`phone-input-custom ${errors.phoneNumber ? 'border-red-500' : ''}`}
              placeholder="Phone Number*"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-0.5">{errors.phoneNumber}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="E-mail address*"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              className={`w-full px-3 py-2 text-sm border ${errors.email ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-theme-primary transition-colors`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleNext}
          className="px-6 py-2 text-sm bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors flex items-center"
        >
          Next
          <i className="ri-arrow-right-line ml-2"></i>
        </button>
      </div>

      <style>{`
        .phone-input-custom .PhoneInputInput {
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          border: 1px solid #cbd5e1;
          outline: none;
          transition: border-color 0.2s;
        }
        .phone-input-custom .PhoneInputInput:focus {
          border-color: #007AFF;
        }
        .phone-input-custom.border-red-500 .PhoneInputInput {
          border-color: #ef4444;
        }
        .phone-input-custom .PhoneInputCountrySelect {
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
};
