import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/LanguageContext';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif font-bold text-plant-800 mb-8">{t.about.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Notre histoire"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-bold text-plant-700 mb-4">{t.about.story.title}</h2>
            <p className="text-plant-600 mb-6">{t.about.story.p1}</p>
            <p className="text-plant-600 mb-6">{t.about.story.p2}</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-plant-700 mb-8">{t.about.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-plant-800 mb-4">{t.about.values.natural.title}</h3>
              <p className="text-plant-600">{t.about.values.natural.description}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-plant-800 mb-4">{t.about.values.sustainability.title}</h3>
              <p className="text-plant-600">{t.about.values.sustainability.description}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-plant-800 mb-4">{t.about.values.transparency.title}</h3>
              <p className="text-plant-600">{t.about.values.transparency.description}</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-plant-700 mb-8">{t.about.quality.title}</h2>
          <p className="text-plant-600 mb-6">{t.about.quality.p1}</p>
          <p className="text-plant-600">{t.about.quality.p2}</p>
        </div>
      </div>
    </div>
  );
};

export default About;