// Document Upload Step
import { useState } from 'react';

interface DocumentUploadStepProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  onPrevious: () => void;
  onSubmit: () => void;
}

export const DocumentUploadStep = ({ formData, updateFormData, onPrevious, onSubmit }: DocumentUploadStepProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFileChange = (field: string, files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      // Validate file size (10 MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, [field]: 'File size must be less than 10 MB' }));
        return;
      }
      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, [field]: 'Only PDF, JPG, JPEG, and PNG files are allowed' }));
        return;
      }
      updateFormData(field, file);
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.proofOfIdentity) {
      newErrors.proofOfIdentity = 'Proof of identity is required';
    }
    if (!formData.cmrInsurance) {
      newErrors.cmrInsurance = 'CMR insurance policy is required';
    }
    if (!formData.operatorsLicence) {
      newErrors.operatorsLicence = 'Operators licence is required';
    }
    if (!formData.agreementAccepted) {
      newErrors.agreementAccepted = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit();
    }
  };

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <button
            onClick={onPrevious}
            className="text-blue-600 hover:text-blue-800 flex items-center text-xs font-medium"
          >
            <i className="ri-arrow-left-line mr-1"></i>
            Previous page
          </button>
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-1">Upload Documents</h2>
        <p className="text-xs text-slate-600 mb-2">
          Upload the following documents (scanned or photographed). Make sure they are legible.
        </p>
        <p className="text-xs text-slate-500">* Mandatory field</p>
      </div>

      {/* Copy of CDL */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-1">Copy of CDL*</h3>
        <p className="text-xs text-slate-600 mb-2">
          Commercial Driver's License
        </p>
        <div className="border-2 border-dashed border-slate-300 p-4 text-center">
          <label className="cursor-pointer">
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange('proofOfIdentity', e.target.files)}
              className="hidden"
            />
            <div className="flex flex-col items-center">
              <i className="ri-upload-2-line text-2xl text-blue-700 mb-1"></i>
              <span className="text-blue-700 font-semibold text-sm">Select file</span>
              {formData.proofOfIdentity && (
                <p className="text-xs text-green-600 mt-1">
                  ✓ {formData.proofOfIdentity.name}
                </p>
              )}
            </div>
          </label>
          <div className="mt-2 space-y-0">
            <p className="text-xs text-slate-500">Maximum file size: 10 MB</p>
            <p className="text-xs text-slate-500">Max documents: 2</p>
            <p className="text-xs text-slate-500">Formats: PDF, JPG, JPEG, PNG</p>
          </div>
        </div>
        {errors.proofOfIdentity && (
          <p className="text-red-500 text-xs mt-1">{errors.proofOfIdentity}</p>
        )}
      </div>

      {/* Motor Vehicle Record (MVR) */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-1">Motor Vehicle Record (MVR)*</h3>
        <div className="border-2 border-dashed border-slate-300 p-4 text-center">
          <label className="cursor-pointer">
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange('cmrInsurance', e.target.files)}
              className="hidden"
            />
            <div className="flex flex-col items-center">
              <i className="ri-upload-2-line text-2xl text-blue-700 mb-1"></i>
              <span className="text-blue-700 font-semibold text-sm">Select file</span>
              {formData.cmrInsurance && (
                <p className="text-xs text-green-600 mt-1">
                  ✓ {formData.cmrInsurance.name}
                </p>
              )}
            </div>
          </label>
          <div className="mt-2 space-y-0">
            <p className="text-xs text-slate-500">Maximum file size: 10 MB</p>
            <p className="text-xs text-slate-500">Max documents: 2</p>
            <p className="text-xs text-slate-500">Formats: PDF, JPG, JPEG, PNG</p>
          </div>
        </div>
        {errors.cmrInsurance && (
          <p className="text-red-500 text-xs mt-1">{errors.cmrInsurance}</p>
        )}
      </div>

      {/* Truck Lease or Finance Agreement */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-1">Truck Lease or Finance Agreement (if applicable)</h3>
        <div className="border-2 border-dashed border-slate-300 p-4 text-center">
          <label className="cursor-pointer">
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange('operatorsLicence', e.target.files)}
              className="hidden"
            />
            <div className="flex flex-col items-center">
              <i className="ri-upload-2-line text-2xl text-blue-700 mb-1"></i>
              <span className="text-blue-700 font-semibold text-sm">Select file</span>
              {formData.operatorsLicence && (
                <p className="text-xs text-green-600 mt-1">
                  ✓ {formData.operatorsLicence.name}
                </p>
              )}
            </div>
          </label>
          <div className="mt-2 space-y-0">
            <p className="text-xs text-slate-500">Maximum file size: 10 MB</p>
            <p className="text-xs text-slate-500">Max documents: 2</p>
            <p className="text-xs text-slate-500">Formats: PDF, JPG, JPEG, PNG</p>
          </div>
        </div>
        {errors.operatorsLicence && (
          <p className="text-red-500 text-xs mt-1">{errors.operatorsLicence}</p>
        )}
      </div>

      {/* Agreement Checkbox */}
      <div className="mb-6">
        <div className="border border-slate-300 p-4 bg-slate-50">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={formData.agreementAccepted || false}
              onChange={(e) => updateFormData('agreementAccepted', e.target.checked)}
              className="mt-0.5 mr-3 w-4 h-4 text-blue-700 border-slate-300 focus:ring-blue-500"
            />
            <span className="text-xs text-slate-700">
              I agree to the terms and conditions of the partnership agreement and confirm that all information provided is accurate and complete.*
            </span>
          </label>
        </div>
        {errors.agreementAccepted && (
          <p className="text-red-500 text-xs mt-1">{errors.agreementAccepted}</p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={onPrevious}
          className="px-6 py-2 text-sm border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 text-sm bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors flex items-center"
        >
          Submit Request
          <i className="ri-check-line ml-2"></i>
        </button>
      </div>
    </div>
  );
};
