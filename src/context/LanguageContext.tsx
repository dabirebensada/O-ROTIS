import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    nav: {
      about: string;
      products: string;
      advice: string;
      search: string;
    };
    home: {
      hero: {
        title: string;
        subtitle: string;
        cta: string;
      };
      featured: string;
      promise: {
        title: string;
        description: string;
        cta: string;
      };
    };
    about: {
      title: string;
      story: {
        title: string;
        p1: string;
        p2: string;
      };
      values: {
        title: string;
        natural: {
          title: string;
          description: string;
        };
        sustainability: {
          title: string;
          description: string;
        };
        transparency: {
          title: string;
          description: string;
        };
      };
      quality: {
        title: string;
        p1: string;
        p2: string;
      };
    };
    advice: {
      title: string;
      subtitle: string;
      description: string;
      cta: string;
    };
  };
}

export const translations: Translations = {
  fr: {
    nav: {
      about: 'À propos',
      products: 'Produits',
      advice: 'Conseils',
      search: 'Rechercher des produits...'
    },
    home: {
      hero: {
        title: "Produits de Soin Naturels",
        subtitle: "Découvrez notre sélection de produits de soin naturels et biologiques",
        cta: "Acheter"
      },
      featured: "Produits Vedettes",
      promise: {
        title: "Notre Promesse",
        description: "Nous nous engageons à vous fournir des produits de soin naturels de la plus haute qualité, sourcés de manière responsable et fabriqués avec amour.",
        cta: "En Savoir Plus"
      }
    },
    about: {
      title: "À propos de SUMAYA COSMETICS",
      story: {
        title: "Notre Histoire",
        p1: "Fondée en 2020, SUMAYA COSMETICS est née d'une passion pour les soins naturels et d'un engagement à créer des produits qui fonctionnent en harmonie avec votre peau. Notre fondatrice, Sarah Sumaya, a passé des années à rechercher les ingrédients naturels et leurs bienfaits avant de lancer notre première collection.",
        p2: "Nous croyons que les soins de la peau doivent être à la fois efficaces et doux, utilisant le pouvoir de la nature combiné à l'innovation scientifique pour offrir des résultats réels."
      },
      values: {
        title: "Nos Valeurs",
        natural: {
          title: "Ingrédients Naturels",
          description: "Nous sélectionnons les ingrédients naturels de la plus haute qualité, garantissant que chaque produit est à la fois efficace et doux pour votre peau."
        },
        sustainability: {
          title: "Durabilité",
          description: "Notre engagement envers l'environnement s'étend de nos ingrédients à nos emballages, choisissant des options écologiques chaque fois que possible."
        },
        transparency: {
          title: "Transparence",
          description: "Nous croyons en la transparence totale concernant nos ingrédients et nos processus, vous permettant de savoir exactement ce que vous appliquez sur votre peau."
        }
      },
      quality: {
        title: "Notre Engagement pour la Qualité",
        p1: "Chaque produit SUMAYA COSMETICS subit des tests rigoureux et un contrôle qualité. Nous travaillons avec des dermatologues et des experts en soins de la peau pour garantir que nos formulations sont à la fois efficaces et sûres pour tous les types de peau.",
        p2: "Nous ne faisons jamais de compromis sur la qualité et nous nous engageons à innover continuellement dans les soins naturels, en restant toujours fidèles à nos principes fondateurs d'utilisation d'ingrédients propres et efficaces qui donnent des résultats réels."
      }
    },
    advice: {
      title: "Conseils Skincare",
      subtitle: "Besoin de conseils personnalisés ?",
      description: "Nos experts en soins de la peau sont là pour vous aider à trouver les produits adaptés à votre type de peau et à vos besoins. Cliquez sur le bouton ci-dessous pour discuter avec l'un de nos spécialistes sur WhatsApp.",
      cta: "Discutez avec un spécialiste"
    }
  },
  en: {
    nav: {
      about: 'About',
      products: 'Products',
      advice: 'Advice',
      search: 'Search products...'
    },
    home: {
      hero: {
        title: "Natural Care Products",
        subtitle: "Discover our selection of natural and organic care products",
        cta: "Shop Now"
      },
      featured: "Featured Products",
      promise: {
        title: "Our Promise",
        description: "We are committed to providing you with the highest quality natural care products, sourced responsibly and made with love.",
        cta: "Learn More"
      }
    },
    about: {
      title: "About SUMAYA COSMETICS",
      story: {
        title: "Our Story",
        p1: "Founded in 2020, SUMAYA COSMETICS was born from a passion for natural skincare and a commitment to creating products that work in harmony with your skin. Our founder, Sarah Sumaya, spent years researching natural ingredients and their benefits before launching our first collection.",
        p2: "We believe that skincare should be both effective and gentle, using the power of nature combined with scientific innovation to deliver real results."
      },
      values: {
        title: "Our Values",
        natural: {
          title: "Natural Ingredients",
          description: "We source the highest quality natural ingredients, ensuring each product is both effective and gentle on your skin."
        },
        sustainability: {
          title: "Sustainability",
          description: "Our commitment to the environment extends from our ingredients to our packaging, choosing eco-friendly options whenever possible."
        },
        transparency: {
          title: "Transparency",
          description: "We believe in being completely transparent about our ingredients and processes, ensuring you know exactly what you're putting on your skin."
        }
      },
      quality: {
        title: "Our Commitment to Quality",
        p1: "Every SUMAYA COSMETICS product undergoes rigorous testing and quality control. We work with leading dermatologists and skincare experts to ensure our formulations are both effective and safe for all skin types.",
        p2: "We never compromise on quality and are committed to continuous innovation in natural skincare, always staying true to our founding principles of using clean, effective ingredients that deliver real results."
      }
    },
    advice: {
      title: "Skincare Advice",
      subtitle: "Need Personalized Advice?",
      description: "Our skincare experts are here to help you find the right products for your skin type and needs. Click the button below to chat with one of our specialists on WhatsApp.",
      cta: "Chat with a Specialist"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};