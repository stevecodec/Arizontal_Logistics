// Quote Form ViewModel

import { useState } from 'react';
import { QuoteFormData } from '@/models/types';
import { EQUIPMENT_TYPES } from '@/constants/home';

/**
 * ViewModel for Quick Quote Form
 * Handles form state and submission logic
 */
export const useQuoteViewModel = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    originCity: '',
    destinationCity: '',
    equipmentType: EQUIPMENT_TYPES[0] as string,
    weight: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormField = <K extends keyof QuoteFormData>(
    field: K,
    value: QuoteFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Future: API call to submit quote request
      console.log('Submitting quote:', formData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      setFormData({
        originCity: '',
        destinationCity: '',
        equipmentType: EQUIPMENT_TYPES[0] as string,
        weight: '',
      });
    } catch (error) {
      console.error('Error submitting quote:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    equipmentTypes: EQUIPMENT_TYPES,
    updateFormField,
    handleSubmit,
  };
};
