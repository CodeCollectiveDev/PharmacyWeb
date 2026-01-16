import { useLoading } from "@/hooks/use-loading";
import { Loader2 } from "lucide-react";

export const LoadingOverlay = () => {
  const { isLoading, message } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center gap-4 max-w-sm">
        <Loader2 className="w-10 h-10 text-green-600 animate-spin" />
        {message && (
          <p className="text-gray-700 font-medium text-center">{message}</p>
        )}
        {!message && (
          <p className="text-gray-600 text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};
