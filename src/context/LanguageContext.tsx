/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

export type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    nav: {
      about: string;
      products: string;
      advice: string;
      search: string;
      closeSearch: string;
      openSearch: string;
      submitSearch: string;
      searchHint: string;
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
    products: {
      title: string;
      searchResult: string;
      noResults: string;
      clearSearch: string;
    };
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const translations: Translations = {
  fr: {
    nav: {
      about: 'À propos',
      products: 'Produits',
      advice: 'Conseils',
      search: 'Rechercher des produits...',
      closeSearch: 'Fermer la recherche',
      openSearch: 'Ouvrir la recherche',
      submitSearch: 'Rechercher',
      searchHint: 'Appuyez sur Entrée pour rechercher'
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
        p1: "Fondée en 2020, SUMAYA COSMETICS est née d'une passion pour les soins naturels...",
        p2: "Nous croyons que les soins de la peau doivent être à la fois efficaces et doux..."
      },
      values: {
        title: "Nos Valeurs",
        natural: {
          title: "Ingrédients Naturels",
          description: "Nous sélectionnons les ingrédients naturels de la plus haute qualité..."
        },
        sustainability: {
          title: "Durabilité",
          description: "Notre engagement envers l'environnement s'étend de nos ingrédients à nos emballages..."
        },
        transparency: {
          title: "Transparence",
          description: "Nous croyons en la transparence totale concernant nos ingrédients et nos processus..."
        }
      },
      quality: {
        title: "Notre Engagement pour la Qualité",
        p1: "Chaque produit SUMAYA COSMETICS subit des tests rigoureux...",
        p2: "Nous ne faisons jamais de compromis sur la qualité..."
      }
    },
    advice: {
      title: "Conseils Skincare",
      subtitle: "Besoin de conseils personnalisés ?",
      description: "Nos experts en soins de la peau sont là pour vous aider...",
      cta: "Discutez avec un spécialiste"
    },
    products: {
      title: "Nos Produits",
      searchResult: 'Résultats pour "{query}" ({count} articles)',
      noResults: "Aucun produit ne correspond à votre recherche.",
      clearSearch: "Réinitialiser la recherche"
    }
  },
  en: {
    nav: {
      about: 'About',
      products: 'Products',
      advice: 'Advice',
      search: 'Search products...',
      closeSearch: 'Close search',
      openSearch: 'Open search',
      submitSearch: 'Search',
      searchHint: 'Press Enter to search'
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
        description: "We are committed to providing you with the highest quality...",
        cta: "Learn More"
      }
    },
    about: {
      title: "About SUMAYA COSMETICS",
      story: {
        title: "Our Story",
        p1: "Founded in 2020, SUMAYA COSMETICS was born from a passion...",
        p2: "We believe that skincare should be both effective and gentle..."
      },
      values: {
        title: "Our Values",
        natural: {
          title: "Natural Ingredients",
          description: "We source the highest quality natural ingredients..."
        },
        sustainability: {
          title: "Sustainability",
          description: "Our commitment to the environment extends..."
        },
        transparency: {
          title: "Transparency",
          description: "We believe in being completely transparent..."
        }
      },
      quality: {
        title: "Our Commitment to Quality",
        p1: "Every SUMAYA COSMETICS product undergoes rigorous testing...",
        p2: "We never compromise on quality and are committed to innovation..."
      }
    },
    advice: {
      title: "Skincare Advice",
      subtitle: "Need Personalized Advice?",
      description: "Our skincare experts are here to help you...",
      cta: "Chat with a Specialist"
    },
    products: {
      title: "Our Products",
      searchResult: 'Showing results for "{query}" ({count} items)',
      noResults: "No products found matching your search.",
      clearSearch: "Clear search"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};