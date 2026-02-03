// Error Handling Utilities
// Professional error handling and formatting for API validation errors

/**
 * Format Laravel validation errors into user-friendly messages
 * @param errors - Record of field names to error message arrays
 * @returns Formatted error message(s)
 */
export const formatValidationErrors = (errors?: Record<string, string[]>): string[] => {
  if (!errors) return [];
  
  const messages: string[] = [];
  
  Object.entries(errors).forEach(([field, fieldErrors]) => {
    // Convert camelCase or snake_case field names to readable format
    const fieldName = field
      .replace(/([A-Z])/g, ' $1')
      .replace(/_/g, ' ')
      .toLowerCase()
      .trim()
      .replace(/^./, (str) => str.toUpperCase());
    
    fieldErrors.forEach((error) => {
      messages.push(`${fieldName}: ${error}`);
    });
  });
  
  return messages;
};

/**
 * Get a single error message from validation errors (first error only)
 * @param errors - Record of field names to error message arrays
 * @returns First validation error message
 */
export const getFirstValidationError = (errors?: Record<string, string[]>): string => {
  if (!errors) return '';
  
  const firstField = Object.keys(errors)[0];
  if (!firstField || !errors[firstField]?.[0]) return '';
  
  const fieldName = firstField
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .toLowerCase()
    .trim()
    .replace(/^./, (str) => str.toUpperCase());
  
  return `${fieldName}: ${errors[firstField][0]}`;
};

/**
 * Get a summary message for multiple validation errors
 * @param errors - Record of field names to error message arrays
 * @param maxDisplay - Maximum number of errors to display in detail (default: 3)
 * @returns Summary message
 */
export const getValidationErrorSummary = (
  errors?: Record<string, string[]>,
  maxDisplay: number = 3
): string => {
  if (!errors) return '';
  
  const allMessages = formatValidationErrors(errors);
  
  if (allMessages.length === 0) return '';
  if (allMessages.length === 1) return allMessages[0];
  
  const displayMessages = allMessages.slice(0, maxDisplay);
  const remaining = allMessages.length - maxDisplay;
  
  let summary = displayMessages.join('\n');
  
  if (remaining > 0) {
    summary += `\n... and ${remaining} more ${remaining === 1 ? 'error' : 'errors'}`;
  }
  
  return summary;
};

/**
 * Get validation error for a specific field
 * @param errors - Record of field names to error message arrays
 * @param fieldName - Field name to get error for
 * @returns Error message for the field or undefined
 */
export const getFieldError = (
  errors?: Record<string, string[]>,
  fieldName?: string
): string | undefined => {
  if (!errors || !fieldName) return undefined;
  return errors[fieldName]?.[0];
};

/**
 * Check if a specific field has an error
 * @param errors - Record of field names to error message arrays
 * @param fieldName - Field name to check
 * @returns True if field has an error
 */
export const hasFieldError = (
  errors?: Record<string, string[]>,
  fieldName?: string
): boolean => {
  if (!errors || !fieldName) return false;
  return Boolean(errors[fieldName] && errors[fieldName].length > 0);
};

/**
 * Get total count of validation errors
 * @param errors - Record of field names to error message arrays
 * @returns Total number of errors
 */
export const getErrorCount = (errors?: Record<string, string[]>): number => {
  if (!errors) return 0;
  return Object.values(errors).reduce((count, fieldErrors) => count + fieldErrors.length, 0);
};
