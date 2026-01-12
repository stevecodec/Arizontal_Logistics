// Quote Form ViewModel

import { useState, useRef, useEffect } from 'react';
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
      // TODO: Replace with actual API call
      // const response = await submitQuoteRequest(formData);
      
      // Simulate API call with proper cleanup
      await new Promise<void>((resolve) => {
        timeoutRef.current = setTimeout(() => {
          resolve();
        }, 1000);
      });
      
      // Reset form after successful submission
      setFormData({
        originCity: '',
        destinationCity: '',
        equipmentType: EQUIPMENT_TYPES[0] as string,
        weight: '',
      });
    } catch (error) {
      // Error handling - in production, use proper error logging service
      if (process.env.NODE_ENV === 'development') {
        console.error('Error submitting quote:', error);
      }
      // TODO: Show user-friendly error message
    } finally {
      setIsSubmitting(false);
      timeoutRef.current = null;
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
