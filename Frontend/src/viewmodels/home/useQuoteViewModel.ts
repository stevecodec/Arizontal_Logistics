// Quote Form ViewModel

import { useState } from 'react';
import { QuoteFormData } from '@/models/types';
import { EQUIPMENT_TYPES } from '@/constants/home';
import api from '@/services/api';

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

  const updateFormField = <K extends keyof QuoteFormData>(
    field: K,
    value: QuoteFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent, contactInfo: { name: string; email: string; phone: string }) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.originCity || !formData.destinationCity) {
      showToast('Please enter both origin and destination cities', 'error');
      return;
    }

    if (!contactInfo.name || !contactInfo.email || !contactInfo.phone) {
      showToast('Please provide your contact information', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.requestQuote({
        pickup_location: formData.originCity,
        delivery_location: formData.destinationCity,
        cargo_type: formData.equipmentType,
        weight: formData.weight ? parseFloat(formData.weight) : undefined,
        contact_name: contactInfo.name,
        contact_email: contactInfo.email,
        contact_phone: contactInfo.phone,
      });

      if (response.success) {
        showToast('Quote request submitted successfully! We will contact you soon.', 'success');
        // Reset form after successful submission
        setFormData({
          originCity: '',
          destinationCity: '',
          equipmentType: EQUIPMENT_TYPES[0] as string,
          weight: '',
        });
      } else {
        showToast(response.message || 'Failed to submit quote request. Please try again.', 'error');
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
    equipmentTypes: EQUIPMENT_TYPES,
    updateFormField,
    handleSubmit,
  };
};
