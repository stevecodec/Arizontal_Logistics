// Partner Registration Form - Multi-step form
import { useState } from 'react';
import { CompanyDetailsStep } from './CompanyDetailsStep';
import { FleetDetailsStep } from './FleetDetailsStep';
import { DocumentUploadStep } from './DocumentUploadStep';
import { useScrollAnimation } from '../../../../hooks';
import { useToast } from '@/contexts/ToastContext';
import { ValidationErrorList } from '@/components/ValidationErrorList';
import api from '@/services/api';

export const PartnerRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formRef, isVisible] = useScrollAnimation<HTMLDivElement>({ 
    threshold: 0.2, 
    triggerOnce: true 
  });
  const { showToast } = useToast();
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    // Company Details
    companyName: '',
    street: '',
    postCode: '',
    city: '',
    country: 'United States',
    // Personal Details
    title: '',
    phoneNumber: '',
    email: '',
    // Fleet Details
    fleet: {
      standardTractor: 0,
      threeAxleTractor: 0,
      megaTractor: 0,
      megaTractorAdjustable: 0,
      jumboRoadTrain: 0,
      curtainSidedTrailer: 0,
      megaCurtainSidedTrailer: 0,
      boxTrailer: 0,
      frigo: 0,
      coilSkipTrailer: 0,
      paperliner: 0,
      doubleDeckTrailer: 0,
    },
    // Documents
    proofOfIdentity: null as File | null,
    cmrInsurance: null as File | null,
    operatorsLicence: null as File | null,
    agreementAccepted: false,
  });

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateFleetData = (fleetType: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      fleet: {
        ...prev.fleet,
        [fleetType]: value,
      },
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      // Scroll to top of form
      document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    // Handle form submission
    try {
      // Clear previous validation errors
      setValidationErrors([]);

      // Validate required files
      if (!formData.proofOfIdentity || !formData.cmrInsurance || !formData.operatorsLicence) {
        setValidationErrors(['Please upload all required documents']);
        showToast('Please upload all required documents', 'error');
        return;
      }

      if (!formData.agreementAccepted) {
        setValidationErrors(['Please accept the terms and conditions']);
        showToast('Please accept the terms and conditions', 'error');
        return;
      }

      // Build FormData for file upload
      const submitData = new FormData();
      
      // Company details
      submitData.append('companyName', formData.companyName);
      submitData.append('street', formData.street);
      submitData.append('postCode', formData.postCode);
      submitData.append('city', formData.city);
      submitData.append('country', formData.country);
      
      // Personal details
      if (formData.title) {
        submitData.append('title', formData.title);
      }
      submitData.append('phoneNumber', formData.phoneNumber);
      submitData.append('email', formData.email);
      
      // Fleet details - send as nested object
      Object.entries(formData.fleet).forEach(([key, value]) => {
        submitData.append(`fleet[${key}]`, value.toString());
      });
      
      // Document uploads
      submitData.append('proofOfIdentity', formData.proofOfIdentity);
      submitData.append('cmrInsurance', formData.cmrInsurance);
      submitData.append('operatorsLicence', formData.operatorsLicence);
      
      // Agreement
      submitData.append('agreementAccepted', formData.agreementAccepted ? '1' : '0');

      const response = await api.registerPartner(submitData);

      if (response.success) {
        setValidationErrors([]);
        // Reset form after successful submission
        setFormData({
          companyName: '',
          street: '',
          postCode: '',
          city: '',
          country: 'United States',
          title: '',
          phoneNumber: '',
          email: '',
          fleet: {
            standardTractor: 0,
            threeAxleTractor: 0,
            megaTractor: 0,
            megaTractorAdjustable: 0,
            jumboRoadTrain: 0,
            curtainSidedTrailer: 0,
            megaCurtainSidedTrailer: 0,
            boxTrailer: 0,
            frigo: 0,
            coilSkipTrailer: 0,
            paperliner: 0,
            doubleDeckTrailer: 0,
          },
          proofOfIdentity: null,
          cmrInsurance: null,
          operatorsLicence: null,
          agreementAccepted: false,
        });
        setCurrentStep(1);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast('Registration submitted successfully! We will contact you soon.', 'success');
      } else {
        // Display validation errors professionally
        if (response.errorMessages && response.errorMessages.length > 0) {
          setValidationErrors(response.errorMessages);
          showToast(response.message || 'Please correct the errors below', 'error');
          // Scroll to top to show validation errors
          document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          showToast(response.message || 'Submission failed. Please try again.', 'error');
        }
      }
    } catch (error) {
      showToast('There was an error submitting your registration. Please try again or contact us directly.', 'error');
    }
  };

  return (
    <section id="registration-form" className="py-8 sm:py-12 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div 
          ref={formRef}
          className={`bg-white shadow-lg transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-20'
          }`}
        >
          {/* Progress Indicator */}
          <div className="bg-gradient-to-r from-[#d48634]/20 to-[#d48634]/5 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className={`flex items-center ${currentStep >= 1 ? 'text-theme-primary' : 'text-slate-400'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${currentStep >= 1 ? 'bg-theme-primary text-white' : 'bg-slate-300 text-slate-600'}`}>
                  1
                </div>
                <span className="ml-2 text-xs font-semibold hidden sm:inline">Company & Personal</span>
              </div>
              <div className="flex-1 h-0.5 bg-slate-300 mx-3">
                <div className={`h-full transition-all ${currentStep >= 2 ? 'bg-theme-primary' : 'bg-slate-300'}`} style={{ width: currentStep >= 2 ? '100%' : '0%' }}></div>
              </div>
              <div className={`flex items-center ${currentStep >= 2 ? 'text-theme-primary' : 'text-slate-400'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${currentStep >= 2 ? 'bg-theme-primary text-white' : 'bg-slate-300 text-slate-600'}`}>
                  2
                </div>
                <span className="ml-2 text-xs font-semibold hidden sm:inline">Fleet Details</span>
              </div>
              <div className="flex-1 h-0.5 bg-slate-300 mx-3">
                <div className={`h-full transition-all ${currentStep >= 3 ? 'bg-theme-primary' : 'bg-slate-300'}`} style={{ width: currentStep >= 3 ? '100%' : '0%' }}></div>
              </div>
              <div className={`flex items-center ${currentStep >= 3 ? 'text-theme-primary' : 'text-slate-400'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${currentStep >= 3 ? 'bg-theme-primary text-white' : 'bg-slate-300 text-slate-600'}`}>
                  3
                </div>
                <span className="ml-2 text-xs font-semibold hidden sm:inline">Documents</span>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-4 sm:p-6">
            {/* Validation Errors */}
            <ValidationErrorList errors={validationErrors} />

            {currentStep === 1 && (
              <CompanyDetailsStep
                formData={formData}
                updateFormData={updateFormData}
                onNext={nextStep}
              />
            )}
            {currentStep === 2 && (
              <FleetDetailsStep
                fleet={formData.fleet}
                updateFleetData={updateFleetData}
                onNext={nextStep}
                onPrevious={prevStep}
              />
            )}
            {currentStep === 3 && (
              <DocumentUploadStep
                formData={formData}
                updateFormData={updateFormData}
                onPrevious={prevStep}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
