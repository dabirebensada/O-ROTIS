import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ProductAvailabilityProps {
  available: boolean;
}

const ProductAvailability: React.FC<ProductAvailabilityProps> = ({ available }) => {
  const { language } = useLanguage();

  if (available) {
    return (
      <div className="flex items-center text-green-600 mt-2">
        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-sm font-medium">
          {language === 'fr' ? 'Disponible en stock très limité' : 'Available in limited stock'}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center text-red-600 mt-2">
      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
      <span className="text-sm font-medium">
        {language === 'fr' ? 'Non disponible pour le moment car victime de son succès' : 'Currently unavailable'}
      </span>
    </div>
  );
};

export default ProductAvailability;
