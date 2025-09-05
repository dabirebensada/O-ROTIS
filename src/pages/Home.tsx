import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
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
    <div>
      {/* Section Héro avec image d'arrière-plan */}
      <div className="relative overflow-hidden h-[90vh] min-h-[600px] max-h-[800px] w-full">
        {/* Image d'arrière-plan avec effet parallaxe */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/produits/hooome.png"
            alt="Poulet rôtis traditionnel"
            className="w-full h-full object-cover object-center image-hover-effect"
            loading="eager"
            width="100%"
            height="100%"
          />
          {/* Overlay animé pour améliorer la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-red-900/30 animate-fade-in-up" />
        </div>
        
        {/* Contenu texte avec animations */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
            <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight text-shadow animate-fade-in-up">
                {t.home.hero.title}
              </h1>
              <p className="mt-6 text-xl text-white/90 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {t.home.hero.subtitle}
              </p>
              <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Link
                  to="/products"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-medium rounded-md btn-hover-effect animate-pulse-custom"
                >
                  {t.home.hero.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Éléments décoratifs flottants */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-orange-500/20 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-red-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Section Promesse avec animations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-orange-50 to-orange-100 scroll-reveal">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-orange-800 mb-4 animate-fade-in-up text-shadow">
            {t.home.promise.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto animate-scale-in"></div>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative group animate-fade-in-left">
            <img
              src="/images/produits/promesse.png"
              alt="Poulet rôtis traditionnel"
              className="rounded-lg shadow-2xl w-full h-auto image-hover-effect"
              loading="lazy"
            />
            {/* Badge flottant */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse-custom shadow-lg">
              {language === 'fr' ? 'QUALITÉ' : 'QUALITY'}
            </div>
            {/* Overlay décoratif */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="mt-10 lg:mt-0 animate-fade-in-right">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <p className="text-xl text-orange-700 mb-8 leading-relaxed">
                {t.home.promise.description}
              </p>
              
              {/* Points clés */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse-custom"></div>
                  <span className="text-orange-700 font-medium">
                    {language === 'fr' ? 'Ingrédients 100% naturels' : '100% natural ingredients'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse-custom" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-orange-700 font-medium">
                    {language === 'fr' ? 'Cuisson parfaite' : 'Perfect cooking'}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse-custom" style={{ animationDelay: '1s' }}></div>
                  <span className="text-orange-700 font-medium">
                    {language === 'fr' ? 'Recettes uniques' : 'Unique recipes'}
                  </span>
                </div>
              </div>
              
              <Link
                to="/about"
                className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg btn-hover-effect font-bold text-lg shadow-lg"
              >
                {t.home.promise.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section de statistiques avec animations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center card-hover-effect p-6 rounded-lg bg-orange-50">
            <div className="text-4xl font-bold text-orange-600 mb-2 animate-pulse-custom">100%</div>
            <div className="text-orange-800 font-semibold">{language === 'fr' ? 'Naturel' : 'Natural'}</div>
          </div>
          <div className="text-center card-hover-effect p-6 rounded-lg bg-orange-50">
            <div className="text-orange-800 font-semibold">{language === 'fr' ? 'Disponible' : 'Available'}</div>
            <div className="text-4xl font-bold text-orange-600 mb-2 animate-pulse-custom" style={{ animationDelay: '0.5s' }}>Du Mardi au Dimanche de 18h à 23h</div>
          </div>
          <div className="text-center card-hover-effect p-6 rounded-lg bg-orange-50">
            <div className="text-4xl font-bold text-orange-600 mb-2 animate-pulse-custom" style={{ animationDelay: '1s' }}>5★</div>
            <div className="text-orange-800 font-semibold">{language === 'fr' ? 'Satisfaction' : 'Satisfaction'}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;