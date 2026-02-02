// API Service for Laravel Backend
// Handles all HTTP requests to the backend API

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: unknown;
  headers?: Record<string, string>;
}

interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
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
        return {
          success: false,
          message: data.message || 'An error occurred',
          errors: data.errors,
        };
      }

      return {
        success: true,
        data: data.data || data,
        message: data.message,
      };
    } catch (error) {
      console.error('API Request Error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  // Contact Form Submission
  async submitContact(data: {
    name: string;
    email: string;
    phone?: string;
    message: string;
  }) {
    return this.request('/contact', {
      method: 'POST',
      body: data,
    });
  }

  // Partner/Carrier Registration
  async registerPartner(data: {
    company_name: string;
    contact_name: string;
    email: string;
    phone: string;
    mc_number?: string;
    dot_number?: string;
    insurance_amount?: string;
    equipment_types?: string[];
    service_areas?: string[];
    message?: string;
  }) {
    return this.request('/partners/register', {
      method: 'POST',
      body: data,
    });
  }

  // Driver Application
  async submitDriverApplication(data: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    license_number: string;
    license_state: string;
    experience_years: number;
    cdl_type?: string;
    endorsements?: string[];
    resume?: File;
  }) {
    // For file uploads, we'll use FormData
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        value.forEach((item) => formData.append(`${key}[]`, item));
      } else if (value !== undefined && value !== null) {
        formData.append(key, value.toString());
      }
    });

    try {
      const response = await fetch(`${this.baseUrl}/careers/apply`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: responseData.message || 'An error occurred',
          errors: responseData.errors,
        };
      }

      return {
        success: true,
        data: responseData.data || responseData,
        message: responseData.message,
      };
    } catch (error) {
      console.error('API Request Error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  // Quote Request
  async requestQuote(data: {
    pickup_location: string;
    delivery_location: string;
    pickup_date?: string;
    delivery_date?: string;
    cargo_type?: string;
    weight?: number;
    dimensions?: string;
    special_requirements?: string;
    contact_name: string;
    contact_email: string;
    contact_phone: string;
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
