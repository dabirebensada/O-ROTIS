import { useLanguage, translations } from '../context/LanguageContext';

const Advice = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-orange-800 mb-6 sm:mb-8 animate-fade-in-up text-shadow">
          {t.advice.title}
        </h1>
        
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md card-hover-effect animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-serif font-bold text-orange-700 mb-4">{t.advice.subtitle}</h2>
          <p className="text-orange-600 mb-6 leading-relaxed">
            {t.advice.description}
          </p>
          
          <a
            href="https://wa.me/22654180810"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-md btn-hover-effect"
          >
            {t.advice.cta}
          </a>
        </div>

        {/* Section des conseils avec animations */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg card-hover-effect animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 animate-pulse-custom">
              <span className="text-white text-xl">🍗</span>
            </div>
            <h3 className="text-xl font-bold text-orange-800 mb-3">
              {language === 'fr' ? 'Conseils de Cuisson' : 'Cooking Tips'}
            </h3>
            <p className="text-orange-600">
              {language === 'fr' 
                ? 'Découvrez nos secrets pour une cuisson parfaite du poulet rôti.'
                : 'Discover our secrets for perfect roasted chicken cooking.'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg card-hover-effect animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 animate-pulse-custom" style={{ animationDelay: '0.5s' }}>
              <span className="text-white text-xl">🥗</span>
            </div>
            <h3 className="text-xl font-bold text-orange-800 mb-3">
              {language === 'fr' ? 'Accompagnements' : 'Side Dishes'}
            </h3>
            <p className="text-orange-600">
              {language === 'fr' 
                ? 'Les meilleurs accompagnements pour sublimer votre poulet rôti.'
                : 'The best side dishes to enhance your roasted chicken.'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg card-hover-effect animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 animate-pulse-custom" style={{ animationDelay: '1s' }}>
              <span className="text-white text-xl">⏰</span>
            </div>
            <h3 className="text-xl font-bold text-orange-800 mb-3">
              {language === 'fr' ? 'Timing Parfait' : 'Perfect Timing'}
            </h3>
            <p className="text-orange-600">
              {language === 'fr' 
                ? 'Apprenez à maîtriser le timing pour une cuisson optimale.'
                : 'Learn to master timing for optimal cooking.'}
            </p>
          </div>
        </div>

        {/* Section contact avec animation */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 p-8 rounded-lg text-white animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'fr' ? 'Besoin d\'Aide ?' : 'Need Help?'}
            </h2>
            <p className="mb-6 opacity-90">
              {language === 'fr' 
                ? 'Notre équipe est là pour vous conseiller et répondre à toutes vos questions.'
                : 'Our team is here to advise you and answer all your questions.'}
            </p>
            <a
              href="https://wa.me/22654180810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-md font-bold btn-hover-effect"
            >
              {language === 'fr' ? 'Contacter nos Experts' : 'Contact our Experts'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advice;