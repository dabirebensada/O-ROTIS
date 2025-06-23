export interface Product {
  id: number;
  name: string;
  description: {
    fr: string;
    en: string;
  };
  shortDescription: {
    fr: string;
    en: string;
  };
  price: number;
  image: string;
  benefits: {
    fr: string[];
    en: string[];
  };
  ingredients: string[];
  usage: {
    fr: string;
    en: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "DOUCEUR DE MIEL",
    description: {
      fr: "Un masque purifiant naturel qui combine le pouvoir du miel et des épices pour une peau éclatante et nette",
      en: "A natural purifying mask that combines the power of honey and spices for radiant and clear skin"
    },
    shortDescription: {
      fr: "Masque purifiant visage (Homme et Femme)",
      en: "Purifying face mask (Men and Women)"
    },
    price: 58,
    image: "/images/produits/douceurdemiel.png",
    benefits: {
      fr: ["Révélateur d'éclat", "Nourrissant", "Anti-taches et boutons", "Antiseptique"],
      en: ["Radiance revealing", "Nourishing", "Anti-spots and pimples", "Antiseptic"]
    },
    ingredients: ["Miel", "Curcuma", "Clou de Girofle", "Citron"],
    usage: {
      fr: "Appliquez le masque sur le visage propre et sec, laisser poser pendant 20 minutes et rincer",
      en: "Apply the mask on clean and dry face, leave for 20 minutes and rinse"
    }
  },
  {
    id: 2,
    name: "EAU CRYSTAL",
    description: {
      fr: "Une solution rafraîchissante pour une hygiène corporelle optimale",
      en: "A refreshing solution for optimal body hygiene"
    },
    shortDescription: {
      fr: "Soin Corporel (Homme et Femme)",
      en: "Body Care (Men and Women)"
    },
    price: 65,
    image: "/images/produits/eaucrystal.png",
    benefits: {
      fr: ["Élimine toutes les odeurs corporelles", "Élimine les boutons d'après rasage"],
      en: ["Eliminates all body odors", "Eliminates post-shave bumps"]
    },
    ingredients: ["A faire"],
    usage: {
      fr: "A faire",
      en: "To be done"
    }
  },
  {
    id: 3,
    name: "ELIXIR",
    description: {
      fr: "Une huile précieuse pour illuminer et revitaliser le contour des yeux",
      en: "A precious oil to illuminate and revitalize the eye contour"
    },
    shortDescription: {
      fr: "Huile Contour des yeux (Homme et Femme)",
      en: "Eye Contour Oil (Men and Women)"
    },
    price: 38,
    image: "/images/produits/elixir.png",
    benefits: {
      fr: ["Éclaircit le contour des yeux", "Estompe les signes de fatigue"],
      en: ["Brightens eye contour", "Fades signs of fatigue"]
    },
    ingredients: ["A faire"],
    usage: {
      fr: "A faire",
      en: "To be done"
    }
  },
  {
    id: 4,
    name: "GOLD",
    description: {
      fr: "Une huile luxueuse pour une peau rayonnante et protégée",
      en: "A luxurious oil for radiant and protected skin"
    },
    shortDescription: {
      fr: "Huile Satinante Corps et Visage (Homme et Femme)",
      en: "Satin Body and Face Oil (Men and Women)"
    },
    price: 75,
    image: "/images/produits/gold.png",
    benefits: {
      fr: ["Combat vergetures, rides et acnés", "Protège des rayons UV", "Scelle l'hydratation et satine la peau"],
      en: ["Fights stretch marks, wrinkles and acne", "Protects from UV rays", "Seals hydration and makes skin satiny"]
    },
    ingredients: ["A Faire"],
    usage: {
      fr: "A faire",
      en: "To be done"
    }
  },
  {
    id: 5,
    name: "SANIA",
    description: {
      fr: "Une mousse douce et efficace pour une peau purifiée en profondeur",
      en: "A gentle and effective foam for deeply purified skin"
    },
    shortDescription: {
      fr: "Mousse Purifiante Visage (Homme et Femme)",
      en: "Purifying Face Foam (Men and Women)"
    },
    price: 68,
    image: "/images/produits/sania.png",
    benefits: {
      fr: ["Exfoliation Douce", "Pureté et Éclat", "Prévient les boutons", "Antiseptique"],
      en: ["Gentle Exfoliation", "Purity and Radiance", "Prevents pimples", "Antiseptic"]
    },
    ingredients: ["Savon noir", "Vetiver", "Clou de Girofle"],
    usage: {
      fr: "A faire",
      en: "To be done"
    }
  },
  {
    id: 6,
    name: "SIROP DE BAIN",
    description: {
      fr: "Un soin lavant doux et nourrissant pour une expérience de bain luxueuse",
      en: "A gentle and nourishing cleansing care for a luxurious bath experience"
    },
    shortDescription: {
      fr: "Soin Lavant corps et visage (Homme et Femme)",
      en: "Cleansing Care for body and face (Men and Women)"
    },
    price: 45,
    image: "/images/produits/siropdebain.png",
    benefits: {
      fr: ["Exfoliant", "Nourrissant", "Raviveur d'éclat", "Antiseptique"],
      en: ["Exfoliating", "Nourishing", "Radiance booster", "Antiseptic"]
    },
    ingredients: ["A Faire"],
    usage: {
      fr: "A faire",
      en: "To be done"
    }
  },
  {
    id: 7,
    name: "SMOOTHIE",
    description: {
      fr: "Un gommage doux et efficace pour une peau lisse et éclatante",
      en: "A gentle and effective scrub for smooth and radiant skin"
    },
    shortDescription: {
      fr: "Gommage visage et corps (Homme et Femme)",
      en: "Face and body scrub (Men and Women)"
    },
    price: 62,
    image: "/images/produits/smoothie.png",
    benefits: {
      fr: ["Élimine les peaux mortes", "Élimine les points noirs et blancs", "Laisse la peau très douce et éclatante"],
      en: ["Removes dead skin", "Eliminates blackheads and whiteheads", "Leaves skin very soft and radiant"]
    },
    ingredients: ["Sel", "Curcuma", "Miel"],
    usage: {
      fr: "Corps : Appliquez sur la peau, masser et rincer. Visage : Appliquez sur le visage humide, faire des mouvements circulaires sans frotter et rincer.",
      en: "Body: Apply to skin, massage and rinse. Face: Apply to damp face, make circular movements without rubbing and rinse."
    }
  }
];