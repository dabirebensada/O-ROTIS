import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/LanguageContext';
import { useEffect } from 'react';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Animation au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-orange-800 mb-6 sm:mb-8 animate-fade-in-up text-shadow">
          {t.about.title}
        </h1>
        
        {/* Section Histoire avec animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 scroll-reveal">
          <div className="relative group">
            <img
              src="images/produits/histoire.png"
              alt="Notre histoire"
              className="rounded-lg shadow-lg w-full h-auto image-hover-effect"
              loading="lazy"
            />
            {/* Overlay décoratif */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="animate-fade-in-right">
            <h2 className="text-2xl font-serif font-bold text-orange-700 mb-4">{t.about.story.title}</h2>
            <p className="text-orange-600 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t.about.story.p1}
            </p>
            <p className="text-orange-600 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {t.about.story.p2}
            </p>
          </div>
        </div>

        {/* Section Valeurs avec animations */}
        <div className="mt-16 scroll-reveal">
          <h2 className="text-2xl font-serif font-bold text-orange-700 mb-8 animate-fade-in-up">
            {t.about.values.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover-effect animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 animate-pulse-custom">
                <span className="text-white text-xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-4">{t.about.values.natural.title}</h3>
              <p className="text-orange-600">{t.about.values.natural.description}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover-effect animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 animate-pulse-custom" style={{ animationDelay: '0.5s' }}>
                <span className="text-white text-xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-4">{t.about.values.sustainability.title}</h3>
              <p className="text-orange-600">{t.about.values.sustainability.description}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover-effect animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 animate-pulse-custom" style={{ animationDelay: '1s' }}>
                <span className="text-white text-xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-4">{t.about.values.transparency.title}</h3>
              <p className="text-orange-600">{t.about.values.transparency.description}</p>
            </div>
          </div>
        </div>

        {/* Section Qualité avec animations */}
        <div className="mt-16 scroll-reveal">
          <h2 className="text-2xl font-serif font-bold text-orange-700 mb-8 animate-fade-in-up">
            {t.about.quality.title}
          </h2>
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-lg card-hover-effect">
            <p className="text-orange-600 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t.about.quality.p1}
            </p>
            <p className="text-orange-600 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {t.about.quality.p2}
            </p>
          </div>
        </div>

        {/* Section équipe avec animations */}
        <div className="mt-16 scroll-reveal">
          <h2 className="text-2xl font-serif font-bold text-orange-700 mb-8 animate-fade-in-up">
            {language === 'fr' ? 'Notre Engagement' : 'Our Commitment'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover-effect animate-fade-in-left">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4 animate-pulse-custom">
                  <span className="text-white text-lg">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-bold text-orange-800">
                  {language === 'fr' ? 'Personnel Expérimenté' : 'Experienced Personnel'}
                </h3>
              </div>
              <p className="text-orange-600">
                {language === 'fr' 
                  ? 'Notre équipe maîtrise parfaitement l\'art de la cuisson traditionnelle du poulet rôti.'
                  : 'Our team perfectly masters the art of traditional roasted chicken cooking.'}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-hover-effect animate-fade-in-right">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4 animate-pulse-custom" style={{ animationDelay: '0.5s' }}>
                  <span className="text-white text-lg">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-orange-800">
                  {language === 'fr' ? 'Excellence Garantie' : 'Guaranteed Excellence'}
                </h3>
              </div>
              <p className="text-orange-600">
                {language === 'fr' 
                  ? 'Chaque commande est préparée avec soin et attention pour garantir votre satisfaction.'
                  : 'Every order is prepared with care and attention to guarantee your satisfaction.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;