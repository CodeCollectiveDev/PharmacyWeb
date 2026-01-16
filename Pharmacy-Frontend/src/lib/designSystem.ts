/**
 * Design System - Tailwind-based constants and utilities
 * This file centralizes all design tokens for consistency
 */

// Color Palette
export const colors = {
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#145231',
  },
  secondary: {
    blue: '#0ea5e9',
    green: '#10b981',
    purple: '#8b5cf6',
    orange: '#f97316',
    red: '#ef4444',
  },
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};

// Spacing Scale
export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '2.5rem', // 40px
  '3xl': '3rem',   // 48px
  '4xl': '4rem',   // 64px
};

// Typography
export const typography = {
  heading: {
    h1: 'text-5xl md:text-6xl font-bold tracking-tight',
    h2: 'text-4xl md:text-5xl font-bold tracking-tight',
    h3: 'text-3xl font-bold tracking-tight',
    h4: 'text-2xl font-bold',
    h5: 'text-xl font-bold',
    h6: 'text-lg font-bold',
  },
  body: {
    large: 'text-lg leading-relaxed',
    base: 'text-base leading-relaxed',
    small: 'text-sm leading-relaxed',
    xs: 'text-xs leading-relaxed',
  },
};

// Button Variants
export const buttonVariants = {
  primary: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
  outline: 'border-2 border-green-500 text-green-600 hover:bg-green-50',
  ghost: 'hover:bg-gray-100 text-gray-700',
};

// Card Styles
export const cardStyles = {
  base: 'bg-white rounded-2xl border border-gray-100/50 shadow-md',
  hover: 'hover:shadow-2xl transition-all duration-300 hover:-translate-y-2',
  interactive: 'cursor-pointer hover:shadow-xl transition-all duration-300',
};

// Focus States
export const focusStyles = 'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2';

// Transition Speeds
export const transitions = {
  fast: 'transition-all duration-200',
  normal: 'transition-all duration-300',
  slow: 'transition-all duration-500',
};

// Gradient Backgrounds
export const gradients = {
  primaryGradient: 'bg-gradient-to-r from-green-600 to-green-500',
  heroGradient: 'bg-gradient-to-br from-green-50 via-white to-green-50',
  darkGradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
  statsGradient: 'bg-gradient-to-r from-green-600 to-green-500',
};

// Utility Classes
export const utilities = {
  containerPadding: 'px-4',
  maxWidth: 'max-w-7xl',
  centerContent: 'flex items-center justify-center',
  animateIn: 'animate-fade-in-up',
};

// Accessible Component Classes
export const a11y = {
  focusRing: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded',
  srOnly: 'sr-only',
  requiredIndicator: 'text-red-500',
};
