import React from 'react';
import { useLanguage, translations } from '../context/LanguageContext';

const Advice = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif font-bold text-plant-800 mb-8">{t.advice.title}</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif font-bold text-plant-700 mb-4">{t.advice.subtitle}</h2>
          <p className="text-plant-600 mb-6">
            {t.advice.description}
          </p>
          
          <a
            href="https://wa.me/22672062582"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-plant-600 text-white px-8 py-3 rounded-md hover:bg-plant-700 transition-colors"
          >
            {t.advice.cta}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advice;