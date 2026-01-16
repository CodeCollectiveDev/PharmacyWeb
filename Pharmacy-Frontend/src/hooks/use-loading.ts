import { useContext } from "react";
import { LoadingContext } from "@/context/LoadingContext";

/**
 * Hook to use loading state across the app
 * Usage: const { isLoading, startLoading, stopLoading } = useLoading();
 */
export const useLoading = () => {
  const context = useContext(LoadingContext);

  if (context === undefined) {
    throw new Error("useLoading must be used within LoadingProvider");
  }

  return {
    isLoading: context.loading.isLoading,
    message: context.loading.message,
    startLoading: context.startLoading,
    stopLoading: context.stopLoading,
  };
};
