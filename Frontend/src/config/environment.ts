// Environment Configuration
// Validates and provides type-safe access to environment variables

interface EnvironmentConfig {
  BASE_PATH: string;
  IS_PREVIEW: boolean;
  NODE_ENV: 'development' | 'production' | 'test';
  API_BASE_URL: string;
  FORM_API_ENDPOINT: string; 
}

// Validate and export configuration
const getConfig = (): EnvironmentConfig => {
  // API base URL with environment-specific defaults
  const getApiBaseUrl = (): string => {
    const envUrl = import.meta.env.VITE_API_BASE_URL;
    
    if (envUrl) {
      // In production, enforce HTTPS
      if (import.meta.env.PROD && envUrl.startsWith('http://')) {
        console.error('SECURITY WARNING: API URL must use HTTPS in production');
        throw new Error('Invalid API URL configuration: HTTPS required in production');
      }
      return envUrl;
    }
    
    // Default URLs by environment
    return import.meta.env.PROD 
      ? 'https://api.arizontal.com/api'  
      : 'http://localhost:8000/api';            
  };

  const config: EnvironmentConfig = {
    BASE_PATH: __BASE_PATH__ || '/',
    IS_PREVIEW: __IS_PREVIEW__ || false,
    NODE_ENV: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
    API_BASE_URL: getApiBaseUrl(),
    // Deprecated external form API endpoint - should be moved to env variable
    FORM_API_ENDPOINT: import.meta.env.VITE_FORM_API_ENDPOINT || 'https://readdy.ai/api/form/d5j9p8pugl990ce152a0',
  };

  // Validation in development
  if (config.NODE_ENV === 'development') {
    console.info('Environment Configuration:', {
      ...config,
    });
  }

  return config;
};

export const ENV = getConfig();
