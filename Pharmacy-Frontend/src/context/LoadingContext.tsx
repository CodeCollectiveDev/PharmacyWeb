import React, { createContext, useState, useCallback, ReactNode } from "react";

interface LoadingState {
  isLoading: boolean;
  message?: string;
}

interface LoadingContextType {
  loading: LoadingState;
  startLoading: (message?: string) => void;
  stopLoading: () => void;
  setLoading: (state: LoadingState) => void;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState<LoadingState>({
    isLoading: false,
    message: undefined,
  });

  const startLoading = useCallback((message?: string) => {
    setLoading({ isLoading: true, message });
  }, []);

  const stopLoading = useCallback(() => {
    setLoading({ isLoading: false, message: undefined });
  }, []);

  const value: LoadingContextType = {
    loading,
    startLoading,
    stopLoading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
