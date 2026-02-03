// API Service for Laravel Backend
// Handles all HTTP requests to the backend API

import { formatValidationErrors, getValidationErrorSummary } from '@/utils/errorHandling';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: unknown;
  headers?: Record<string, string>;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
  /** Formatted error messages for display */
  errorMessages?: string[];
}

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T = unknown>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const { method = 'GET', body, headers = {} } = options;

    const config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...headers,
      },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, config);
      const data = await response.json();

      if (!response.ok) {
        const errors = data.errors;
        const errorMessages = formatValidationErrors(errors);
        
        return {
          success: false,
          message: data.message || (errorMessages.length > 0 ? 'Please fix the following errors:' : 'An error occurred'),
          errors,
          errorMessages,
        };
      }

      return {
        success: true,
        data: data.data || data,
        message: data.message,
      };
    } catch (error) {
      // Log only in development
      if (import.meta.env.DEV) {
        console.error('API Request Error:', error);
      }
      // TODO: Send to error tracking service (Sentry) in production
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  // Contact Form Submission
  async submitContact(data: {
    fullName: string;
    company: string;
    state: string;
    phone: string;
    email: string;
    message: string;
  }) {
    return this.request('/contact', {
      method: 'POST',
      body: data,
    });
  }

  // Partner/Carrier Registration
  async registerPartner(data: FormData) {
    try {
      const response = await fetch(`${this.baseUrl}/partners/register`, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
          // Don't set Content-Type for FormData - browser will set it with boundary
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        const errors = responseData.errors;
        const errorMessages = formatValidationErrors(errors);
        
        return {
          success: false,
          message: responseData.message || (errorMessages.length > 0 ? 'Please fix the following errors:' : 'An error occurred'),
          errors,
          errorMessages,
        };
      }

      return {
        success: true,
        data: responseData.data || responseData,
        message: responseData.message,
      };
    } catch (error) {
      // Log only in development
      if (import.meta.env.DEV) {
        console.error('API Request Error:', error);
      }
      // TODO: Send to error tracking service (Sentry) in production
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  // Driver Application
  async submitDriverApplication(data: {
    fullName: string;
    phone: string;
    email: string;
    experience: string;
    cdlType: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zip: string;
    message?: string;
  }) {
    return this.request('/careers/apply', {
      method: 'POST',
      body: data,
    });
  }

  // Quote Request
  async requestQuote(data: {
    originCity: string;
    destinationCity: string;
    equipmentType: string;
    weight: string;
  }) {
    return this.request('/quotes/request', {
      method: 'POST',
      body: data,
    });
  }

  // Get Available Loads
  async getLoads(params?: {
    page?: number;
    per_page?: number;
    origin?: string;
    destination?: string;
    equipment_type?: string;
  }) {
    const queryString = params ? '?' + new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null) {
          acc[key] = value.toString();
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString() : '';

    return this.request(`/loads${queryString}`);
  }

  // Get Load Count
  async getLoadCount() {
    return this.request<{ count: number }>('/loads/count');
  }
}

// Export singleton instance
export const api = new ApiService(API_BASE_URL);
export default api;
