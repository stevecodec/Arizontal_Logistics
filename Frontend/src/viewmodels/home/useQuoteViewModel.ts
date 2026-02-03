// Quote Form ViewModel

import { useState } from 'react';
import { QuoteFormData } from '@/models/types';
import { EQUIPMENT_TYPES } from '@/constants/home';
import api, { ApiResponse } from '@/services/api';

/**
 * ViewModel for Quick Quote Form
 * Handles form state and submission logic
 */
export const useQuoteViewModel = (showToast: (message: string, type: 'success' | 'error' | 'info' | 'warning') => void) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    originCity: '',
    destinationCity: '',
    equipmentType: EQUIPMENT_TYPES[0] as string,
    weight: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const updateFormField = <K extends keyof QuoteFormData>(
    field: K,
    value: QuoteFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous validation errors
    setValidationErrors([]);
    
    // Validate form
    if (!formData.originCity || !formData.destinationCity) {
      setValidationErrors(['Please enter both origin and destination cities']);
      showToast('Please enter both origin and destination cities', 'error');
      return;
    }

    if (!formData.weight) {
      setValidationErrors(['Please enter the weight']);
      showToast('Please enter the weight', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.requestQuote({
        originCity: formData.originCity,
        destinationCity: formData.destinationCity,
        equipmentType: formData.equipmentType,
        weight: formData.weight,
      });

      if (response.success) {
        showToast('Quote request submitted successfully! We will contact you soon.', 'success');
        setValidationErrors([]);
        // Reset form after successful submission
        setFormData({
          originCity: '',
          destinationCity: '',
          equipmentType: EQUIPMENT_TYPES[0] as string,
          weight: '',
        });
      } else {
        // Display validation errors professionally
        if (response.errorMessages && response.errorMessages.length > 0) {
          setValidationErrors(response.errorMessages);
          showToast(response.message || 'Please correct the errors below', 'error');
        } else {
          showToast(response.message || 'Failed to submit quote request. Please try again.', 'error');
        }
      }
    } catch (error) {
      showToast('Network error. Please check your connection and try again.', 'error');
      if (process.env.NODE_ENV === 'development') {
        console.error('Error submitting quote:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    validationErrors,
    equipmentTypes: EQUIPMENT_TYPES,
    updateFormField,
    handleSubmit,
  };
};
