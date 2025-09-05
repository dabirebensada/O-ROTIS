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

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const translations: Translations = {
  fr: {
    nav: {
      about: 'À propos',
      products: 'Commander',
      advice: 'Conseils',
      search: 'Rechercher...',
      closeSearch: 'Fermer la recherche',
      openSearch: 'Ouvrir la recherche',
      submitSearch: 'Rechercher',
      searchHint: 'Appuyez sur Entrée pour rechercher'
    },
    home: {
      hero: {
        title: "Bienvenue dans notre Univers",
        subtitle: "Découvrez notre poulet rôtis, tendre et savoureux, préparé selon nos recettes secrètes",
        cta: "Commander Maintenant"
      },
      promise: {
        title: "Notre Promesse",
        description: "Nous nous engageons à vous fournir le poulet rôtis le plus tendre et savoureux, cuit a la perfection.",
        cta: "En Savoir Plus"
      }
    },
    about: {
      title: "À propos d'O'ROTIS",
      story: {
        title: "Notre Histoire",
        p1: "Fondée en 2025, O'ROTIS est née d'une passion pour l'innovation gustative et le poulet rôtis.",
        p2: "Nous croyons que la qualité du poulet rôtis dépend de la sélection des ingrédients et de la méthode de cuisson."
      },
      values: {
        title: "Nos Valeurs",
        natural: {
          title: "Ingrédients Naturels",
          description: "Nous sélectionnons uniquement des poulets fermiers élevés en plein air, nourris naturellement."
        },
        sustainability: {
          title: "Tradition",
          description: "Notre engagement envers la perfection s'étend de nos méthodes de cuisson hors du commun et à nos recettes secrètes."
        },
        transparency: {
          title: "Transparence",
          description: "Nous croyons en la transparence totale concernant nos ingrédients et nos processus de cuisson."
        }
      },
      quality: {
        title: "Notre Engagement pour la Qualité",
        p1: "Chaque poulet O'ROTIS est sélectionné avec soin et cuit selon nos standards rigoureux.",
        p2: "Nous ne faisons jamais de compromis sur la qualité et nous nous engageons à maintenir l'excellence."
      }
    },
    advice: {
      title: "Conseils Culinaires",
      subtitle: "Besoin de conseils pour déguster ?",
      description: "Nos experts culinaires sont là pour vous aider à tirer le meilleur parti de votre poulet rôtis.",
      cta: "Discuter avec un spécialiste"
    }
  },
  en: {
    nav: {
      about: 'About',
      products: 'Order',
      advice: 'Advice',
      search: 'Search...',
      closeSearch: 'Close search',
      openSearch: 'Open search',
      submitSearch: 'Search',
      searchHint: 'Press Enter to search'
    },
    home: {
      hero: {
        title: "Welcome to our Universe",
        subtitle: "Discover our roasted chicken, tender and flavorful, prepared according to our secret recipes",
        cta: "Order Now"
      },
      promise: {
        title: "Our Promise",
        description: "We are committed to providing you with the most tender and flavorful roasted chicken, cooked at perfection",
        cta: "Learn More"
      }
    },
    about: {
      title: "About O'ROTIS",
      story: {
        title: "Our Story",
        p1: "Founded in 2025, O'ROTIS was born from a passion for gustative innovation and roasted chicken.",
        p2: "We believe that the quality of roasted chicken depends on ingredient selection and cooking method."
      },
      values: {
        title: "Our Values",
        natural: {
          title: "Natural Ingredients",
          description: "We select only free-range farm chickens, naturally fed and raised in open spaces."
        },
        sustainability: {
          title: "Tradition",
          description: "Our commitment to perfection extends from our cooking methods to our secret recipes."
        },
        transparency: {
          title: "Transparency",
          description: "We believe in being completely transparent about our ingredients and cooking processes."
        }
      },
      quality: {
        title: "Our Commitment to Quality",
        p1: "Every O'ROTIS chicken is carefully selected and cooked according to our rigorous standards.",
        p2: "We never compromise on quality and are committed to maintaining excellence."
      }
    },
    advice: {
      title: "Culinary Advice",
      subtitle: "Need advice on how to enjoy?",
      description: "Our culinary experts are here to help you get the most out of your roasted chicken.",
      cta: "Chat with a Specialist"
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