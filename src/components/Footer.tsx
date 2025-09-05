//import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const whatsappNumber = '+22654180810';
  const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;
  const { language } = useLanguage();

  const createWhatsAppLink = (message: string) => {
    return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  };

  const translations = {
    fr: {
      about: {
        title: 'À propos d\'O\'ROTIS',
        description: 'Poulet rôtis traditionnel, tendre et savoureux. Découvrez notre recette secrète travaillée a la perfection.'
      },
      quickLinks: {
        title: 'Liens rapides',
        products: 'Commander',
        aboutUs: 'À propos de nous',
        advice: 'Demandez Conseil'
      },
      customerService: {
        title: 'Service Client',
        contact: 'Contact',
        shipping: 'Livraisons & Retours',
        faq: 'FAQ'
      },
      socialMedia: {
        title: 'Rejoignez notre communauté',
        subtitle: 'Suivez nos actualités et découvrez nos recettes',
        followUs: 'Suivez-nous'
      },
      copyright: '© 2025 O\'ROTIS. Tous droits réservés.'
    },
    en: {
      about: {
        title: 'About O\'ROTIS',
        description: 'Traditional wood-fired roasted chicken, tender and flavorful. Discover our secret recipe worked on perfection.'
      },
      quickLinks: {
        title: 'Quick Links',
        products: 'Order',
        aboutUs: 'About Us',
        advice: 'Get Advice'
      },
      customerService: {
        title: 'Customer Service',
        contact: 'Contact Us',
        shipping: 'Shipping & Returns',
        faq: 'FAQ'
      },
      socialMedia: {
        title: 'Join our community',
        subtitle: 'Follow our news and discover our recipes',
        followUs: 'Follow us'
      },
      copyright: '© 2025 O\'ROTIS. All rights reserved.'
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-orange-900 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-red-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section À propos */}
          <div className="animate-fade-in-up">
            <h3 className="text-white text-lg font-bold mb-4 text-shadow">{t.about.title}</h3>
            <p className="text-orange-200 leading-relaxed">{t.about.description}</p>
          </div>
          
          {/* Liens rapides */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-white text-lg font-bold mb-4 text-shadow">{t.quickLinks.title}</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/products" 
                  className="text-orange-200 hover:text-white transition-all duration-300 transform hover:translate-x-2 flex items-center group"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {t.quickLinks.products}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-orange-200 hover:text-white transition-all duration-300 transform hover:translate-x-2 flex items-center group"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {t.quickLinks.aboutUs}
                </Link>
              </li>
              <li>
                <Link 
                  to="/advice" 
                  className="text-orange-200 hover:text-white transition-all duration-300 transform hover:translate-x-2 flex items-center group"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {t.quickLinks.advice}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Service client */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-white text-lg font-bold mb-4 text-shadow">{t.customerService.title}</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={createWhatsAppLink("Bonjour, j'aimerais contacter le service client")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-200 hover:text-white transition-all duration-300 transform hover:translate-x-2 flex items-center group"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {t.customerService.contact}
                </a>
              </li>
              <li>
                <a 
                  href={createWhatsAppLink("Bonjour, j'ai une question sur les livraisons et retours")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-200 hover:text-white transition-all duration-300 transform hover:translate-x-2 flex items-center group"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {t.customerService.shipping}
                </a>
              </li>
              <li>
                <a 
                  href={createWhatsAppLink("Bonjour, j'ai besoin d'aide avec la FAQ")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-200 hover:text-white transition-all duration-300 transform hover:translate-x-2 flex items-center group"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  {t.customerService.faq}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Réseaux sociaux */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-white text-lg font-bold mb-4 text-shadow">{t.socialMedia.title}</h3>
            <p className="text-orange-200 text-sm mb-6 leading-relaxed">{t.socialMedia.subtitle}</p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.tiktok.com/@orotis03?_t=ZM-8zTROW8rCRc&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl"
                title="Suivez-nous sur TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1C4AzHek5E/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl"
                title="Suivez-nous sur Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <p className="text-orange-300 text-xs animate-pulse-custom">{t.socialMedia.followUs}</p>
          </div>
        </div>
        
        {/* Ligne de séparation avec animation */}
        <div className="mt-8 pt-8 border-t border-orange-800 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          <p className="text-center text-orange-200 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;