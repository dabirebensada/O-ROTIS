import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
      {/* Spinner principal avec animation améliorée */}
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-200 border-t-orange-600"></div>
        <div className="absolute inset-0 animate-spin rounded-full h-16 w-16 border-4 border-transparent border-r-red-600" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      
      {/* Texte de chargement avec animation */}
      <div className="text-center">
        <p className="text-orange-600 font-medium animate-pulse-custom">
          Chargement<span className="loading-dots"></span>
        </p>
        <div className="flex space-x-1 mt-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
