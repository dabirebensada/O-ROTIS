//import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const whatsappNumber = '+33078077178';
  const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;
  const { language } = useLanguage();

  const createWhatsAppLink = (message: string) => {
    return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  };

  const translations = {
    fr: {
      about: {
        title: 'À propos de SUMAYA',
        description: 'Des soins haut de gamme à base d\'ingrédients naturels. Découvrez votre routine de soin idéale grâce à notre sélection soignée.'
      },
      quickLinks: {
        title: 'Liens rapides',
        products: 'Tous les Produits',
        aboutUs: 'À propos de nous',
        advice: 'Demandez Conseil'
      },
      customerService: {
        title: 'Service Client',
        contact: 'Contact',
        shipping: 'Livraisons & Retours',
        faq: 'FAQ'
      },
      copyright: '© 2025 SUMAYA COSMETICS. Tous droits réservés.'
    },
    en: {
      about: {
        title: 'About SUMAYA',
        description: 'Premium skincare products made with natural ingredients. Discover your perfect skincare routine with our curated collection.'
      },
      quickLinks: {
        title: 'Quick Links',
        products: 'All Products',
        aboutUs: 'About Us',
        advice: 'Get Advice'
      },
      customerService: {
        title: 'Customer Service',
        contact: 'Contact Us',
        shipping: 'Shipping & Returns',
        faq: 'FAQ'
      },
      copyright: '© 2025 SUMAYA COSMETICS. All rights reserved.'
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-plant-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t.about.title}</h3>
            <p className="text-plant-200">{t.about.description}</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t.quickLinks.title}</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-plant-200 hover:text-white">{t.quickLinks.products}</Link></li>
              <li><Link to="/about" className="text-plant-200 hover:text-white">{t.quickLinks.aboutUs}</Link></li>
              <li><Link to="/advice" className="text-plant-200 hover:text-white">{t.quickLinks.advice}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t.customerService.title}</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={createWhatsAppLink("Hello, I'd like to contact customer service")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-plant-200 hover:text-white"
                >
                  {t.customerService.contact}
                </a>
              </li>
              <li>
                <a 
                  href={createWhatsAppLink("Hello, I have a question about shipping and returns")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-plant-200 hover:text-white"
                >
                  {t.customerService.shipping}
                </a>
              </li>
              <li>
                <a 
                  href={createWhatsAppLink("Hello, I need help with FAQ")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-plant-200 hover:text-white"
                >
                  {t.customerService.faq}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-plant-800">
          <p className="text-center text-plant-200">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;