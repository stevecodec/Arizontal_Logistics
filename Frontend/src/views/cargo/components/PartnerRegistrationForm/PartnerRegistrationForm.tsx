// Partner Registration Form - Multi-step form
import { useState } from 'react';
import { CompanyDetailsStep } from './CompanyDetailsStep';
import { FleetDetailsStep } from './FleetDetailsStep';
import { DocumentUploadStep } from './DocumentUploadStep';

export const PartnerRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
    // TODO: Implement actual submission logic
  };

  return (
    <section id="registration-form" className="py-8 sm:py-12 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white shadow-lg border-t-4 border-theme-primary">
          {/* Progress Indicator */}
          <div className="bg-slate-100 px-4 py-3">
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
