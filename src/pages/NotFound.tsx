import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-xl p-8 md:p-10 transition-all hover:shadow-2xl">
        
        {/* Icon */}
        <div className="mb-6">
          <div className="relative inline-flex">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-green-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
              404
            </div>
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Page Not Found</h1>
        
        {/* Description */}
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for seems to have wandered off into the digital unknown. 
          It might have been moved, deleted, or perhaps you typed something incorrectly.
        </p>
        
        {/* Current Path */}
        <div className="bg-gray-100 rounded-lg p-3 mb-6 text-sm font-mono text-gray-700 overflow-x-auto">
          <span className="text-gray-500">Requested URL:</span> {location.pathname}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleGoBack}
            className="px-5 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
          
          <button
            onClick={handleGoHome}
            className="px-5 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Return Home
          </button>
        </div>
        
        {/* Additional Help */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Need help?</p>
          <div className="flex justify-center space-x-4">
            <a href="/support" className="text-green-500 hover:text-green-700 text-sm">
              Contact Support
            </a>
            <a href="/faq" className="text-green-500 hover:text-green-700 text-sm">
              Visit FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;