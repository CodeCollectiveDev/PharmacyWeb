/**
 * Form Validation Utilities
 * Provides validation rules and helpers for forms
 */

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationRule {
  validate: (value: any) => boolean;
  message: string;
}

export interface ValidationRules {
  [fieldName: string]: ValidationRule[];
}

/**
 * Common validation rules
 */
export const validators = {
  required: (fieldName: string): ValidationRule => ({
    validate: (value: string) => value && value.trim().length > 0,
    message: `${fieldName} is required`,
  }),

  email: (): ValidationRule => ({
    validate: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
    message: "Please enter a valid email address",
  }),

  phone: (): ValidationRule => ({
    validate: (value: string) => {
      // Accepts various phone formats
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      return phoneRegex.test(value) && value.replace(/\D/g, "").length >= 10;
    },
    message: "Please enter a valid phone number",
  }),

  minLength: (min: number): ValidationRule => ({
    validate: (value: string) => value && value.length >= min,
    message: `Must be at least ${min} characters`,
  }),

  maxLength: (max: number): ValidationRule => ({
    validate: (value: string) => !value || value.length <= max,
    message: `Must not exceed ${max} characters`,
  }),

  minValue: (min: number): ValidationRule => ({
    validate: (value: number) => value >= min,
    message: `Must be at least ${min}`,
  }),

  maxValue: (max: number): ValidationRule => ({
    validate: (value: number) => value <= max,
    message: `Must not exceed ${max}`,
  }),

  url: (): ValidationRule => ({
    validate: (value: string) => {
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    },
    message: "Please enter a valid URL",
  }),

  match: (fieldName: string, matchValue: any): ValidationRule => ({
    validate: (value: any) => value === matchValue,
    message: `Does not match ${fieldName}`,
  }),

  pattern: (regex: RegExp, description: string): ValidationRule => ({
    validate: (value: string) => regex.test(value),
    message: `Invalid ${description}`,
  }),
};

/**
 * Validate form data against rules
 */
export const validateForm = (
  data: Record<string, any>,
  rules: ValidationRules
): ValidationError[] => {
  const errors: ValidationError[] = [];

  for (const [fieldName, fieldRules] of Object.entries(rules)) {
    const value = data[fieldName];

    for (const rule of fieldRules) {
      if (!rule.validate(value)) {
        errors.push({
          field: fieldName,
          message: rule.message,
        });
        break; // Stop at first error for this field
      }
    }
  }

  return errors;
};

/**
 * Validate a single field
 */
export const validateField = (
  fieldName: string,
  value: any,
  rules: ValidationRule[]
): string | null => {
  for (const rule of rules) {
    if (!rule.validate(value)) {
      return rule.message;
    }
  }
  return null;
};

/**
 * Check if form has errors
 */
export const hasErrors = (errors: ValidationError[]): boolean => {
  return errors.length > 0;
};

/**
 * Get error message for a specific field
 */
export const getFieldError = (
  fieldName: string,
  errors: ValidationError[]
): string | undefined => {
  return errors.find((error) => error.field === fieldName)?.message;
};

/**
 * Contact form validation rules
 */
export const contactFormRules: ValidationRules = {
  name: [
    validators.required("Name"),
    validators.minLength(2),
    validators.maxLength(50),
  ],
  email: [validators.required("Email"), validators.email()],
  phone: [validators.required("Phone"), validators.phone()],
  message: [
    validators.required("Message"),
    validators.minLength(10),
    validators.maxLength(500),
  ],
};

/**
 * Newsletter subscription validation rules
 */
export const newsletterRules: ValidationRules = {
  email: [validators.required("Email"), validators.email()],
};

/**
 * Prescription refill validation rules
 */
export const prescriptionRules: ValidationRules = {
  prescriptionNumber: [
    validators.required("Prescription Number"),
    validators.minLength(3),
  ],
  patientName: [validators.required("Patient Name"), validators.minLength(2)],
  phone: [validators.required("Phone"), validators.phone()],
};
