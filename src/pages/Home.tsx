//import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      {/* Section Héro avec image d'arrière-plan */}
      <div className="relative overflow-hidden h-[90vh] min-h-[600px] max-h-[800px] w-full">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 w-full h-full">
          <img
            className="w-full h-full object-cover object-center"
            src="/images/produits/marque.png"
            alt="Produits de soin"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%'
            }}
          />
          {/* Overlay pour améliorer la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-r from-plant-900/70 to-plant-900/30" />
        </div>
        
        {/* Contenu texte */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                {t.home.hero.title}
              </h1>
              <p className="mt-6 text-xl text-white/90 max-w-2xl">
                {t.home.hero.subtitle}
              </p>
              <div className="mt-10">
                <Link
                  to="/products"
                  className="inline-block bg-plant-600 hover:bg-plant-700 text-white px-8 py-4 text-lg font-medium rounded-md transition-all duration-300 transform hover:scale-105"
                >
                  {t.home.hero.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Produits Vedettes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-plant-800 mb-4">
            {t.home.featured}
          </h2>
          <div className="w-24 h-1 bg-plant-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.slice(0, 3).map((product) => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id} 
              className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="relative overflow-hidden h-80 w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-plant-800 mb-2 line-clamp-2 h-14 flex items-center">
                  {product.name}
                </h3>
                <p className="text-plant-600 text-lg font-medium">
                  {product.price.toFixed(2)} €
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center text-plant-600 group-hover:text-plant-800 transition-colors">
                    {language === 'fr' ? 'Découvrir' : 'Discover'}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block border-2 border-plant-600 text-plant-600 hover:bg-plant-600 hover:text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
          >
            {language === 'fr' ? 'Voir tous les produits' : 'View all products'}
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-plant-50">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <img
              src="images/produits/groupe.jpeg"
              alt="Soins naturels"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-10 lg:mt-0 lg:pl-8">
            <h2 className="text-3xl font-serif font-bold text-plant-800 mb-4">{t.home.promise.title}</h2>
            <p className="text-lg text-plant-700 mb-6">
              {t.home.promise.description}
            </p>
            <Link
              to="/about"
              className="inline-block bg-plant-600 text-white px-8 py-3 rounded-md hover:bg-plant-700 transition-colors"
            >
              {t.home.promise.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;