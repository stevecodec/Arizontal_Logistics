// Validation Error List Component
// Displays validation errors in a professional, user-friendly format

import React from 'react';

interface ValidationErrorListProps {
  errors?: string[];
  className?: string;
  maxDisplay?: number;
}

export const ValidationErrorList: React.FC<ValidationErrorListProps> = ({ 
  errors, 
  className = '',
  maxDisplay = 5
}) => {
  if (!errors || errors.length === 0) return null;

  const displayErrors = errors.slice(0, maxDisplay);
  const remaining = errors.length - maxDisplay;

  return (
    <div className={`bg-red-50 border-l-4 border-red-400 p-4 mb-4 ${className}`} role="alert">
      <div className="flex">
        <div className="flex-shrink-0">
          <i className="ri-error-warning-line text-red-400 text-xl"></i>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-semibold text-red-800 mb-2">
            {errors.length === 1 ? 'Validation Error' : `${errors.length} Validation Errors`}
          </h3>
          <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
            {displayErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
            {remaining > 0 && (
              <li className="text-red-600 font-medium">
                ... and {remaining} more {remaining === 1 ? 'error' : 'errors'}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ValidationErrorList;
