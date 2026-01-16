import { useState, useCallback } from "react";
import {
  validateForm,
  validateField,
  ValidationError,
  ValidationRules,
  ValidationRule,
} from "@/lib/validation";

interface UseFormReturn<T> {
  data: T;
  errors: ValidationError[];
  setFieldValue: (field: keyof T, value: any) => void;
  setFieldError: (field: string, message: string) => void;
  clearFieldError: (field: string) => void;
  validate: () => boolean;
  reset: () => void;
  isValid: boolean;
  getFieldError: (field: string) => string | undefined;
}

/**
 * Custom hook for form validation and state management
 * Usage: const { data, errors, setFieldValue, validate } = useFormValidation(initialData, validationRules);
 */
export const useFormValidation = <T extends Record<string, any>>(
  initialData: T,
  rules: ValidationRules
): UseFormReturn<T> => {
  const [data, setData] = useState<T>(initialData);
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const setFieldValue = useCallback((field: keyof T, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));

    // Real-time validation for the field
    if (rules[String(field)]) {
      const error = validateField(String(field), value, rules[String(field)]);
      setErrors((prev) =>
        error
          ? [
              ...prev.filter((e) => e.field !== String(field)),
              { field: String(field), message: error },
            ]
          : prev.filter((e) => e.field !== String(field))
      );
    }
  }, [rules]);

  const setFieldError = useCallback((field: string, message: string) => {
    setErrors((prev) => [
      ...prev.filter((e) => e.field !== field),
      { field, message },
    ]);
  }, []);

  const clearFieldError = useCallback((field: string) => {
    setErrors((prev) => prev.filter((e) => e.field !== field));
  }, []);

  const validate = useCallback((): boolean => {
    const newErrors = validateForm(data, rules);
    setErrors(newErrors);
    return newErrors.length === 0;
  }, [data, rules]);

  const reset = useCallback(() => {
    setData(initialData);
    setErrors([]);
  }, [initialData]);

  const isValid = errors.length === 0;

  const getFieldError = useCallback(
    (field: string): string | undefined => {
      return errors.find((error) => error.field === field)?.message;
    },
    [errors]
  );

  return {
    data,
    errors,
    setFieldValue,
    setFieldError,
    clearFieldError,
    validate,
    reset,
    isValid,
    getFieldError,
  };
};
