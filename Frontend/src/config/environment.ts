// Environment Configuration
// Validates and provides type-safe access to environment variables

interface EnvironmentConfig {
  BASE_PATH: string;
  IS_PREVIEW: boolean;
  NODE_ENV: 'development' | 'production' | 'test';
  API_BASE_URL: string;
  FORM_API_ENDPOINT: string; // Deprecated - kept for backwards compatibility
}

// Validate and export configuration
const getConfig = (): EnvironmentConfig => {
  const config: EnvironmentConfig = {
    BASE_PATH: __BASE_PATH__ || '/',
    IS_PREVIEW: __IS_PREVIEW__ || false,
    NODE_ENV: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
    // Laravel backend API base URL
    API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
    // Deprecated external form API endpoint - kept for backwards compatibility
    FORM_API_ENDPOINT: 'https://readdy.ai/api/form/d5j9p8pugl990ce152a0',
  };

  // Validation in development
  if (config.NODE_ENV === 'development') {
    console.info('Environment Configuration:', {
      ...config,
      // Don't log sensitive data in production
    });
  }

  return config;
};

export const ENV = getConfig();
