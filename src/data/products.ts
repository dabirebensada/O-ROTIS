export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "DOUCEUR DE MIEL",
    description: " A faire ",
    shortDescription: "Masque purifante visage (Homme et Femme)",
    price: 58,
    image: "/images/produits/douceurdemiel_1.jpeg",
    benefits: ["Révélateur d'éclat", "Nourissant", "Anti-taches et boutons", "Antiseptique"],
    ingredients: ["Miel", "Curcuma", "Clou de Girofle", "Citron"],
    usage: " Appliquez le masque sur le visage propre et sec, laisser poser pendant 20 minutes et rincer"
  },
  {
    id: 2,
    name: "EAU CRYSTAL",
    description: " A FAIRE ",
    shortDescription: "Soin Corporel (Homme et Femme)",
    price: 65,
    image: "/images/produits/eaucrystal.jpeg",
    benefits: ["Élimine toutes les odeurs corporelles", "Élimine les boutons d'après rasage"],
    ingredients: ["A faire "],
    usage: "A Faire"
  },
  {
    id: 3,
    name: "ELIXIR",
    description: " A faire ",
    shortDescription: "Huile Contour des yeux (Homme et Femme) ",
    price: 38,
    image: "/images/produits/elixir.jpeg",
    benefits: ["Eclaircit le contour des yeux", "Estompe les signes de fatigue"],
    ingredients: [" A faire"],
    usage: " A faire "
  },
  {
    id: 4,
    name: "GOLD",
    description: " A faire ",
    shortDescription: "Huile Satinante Corps et Visage (Homme et Femme)",
    price: 75,
    image: "/images/produits/gold.jpeg",
    benefits: ["Combat vergetures, rides et acnés", "Protège des rayons UV", "Scelle l'hydratation et satine la peau"],
    ingredients: ["A Faire"],
    usage: "A Faire"
  },
  {
    id: 5,
    name: "SANIA",
    description: " A Faire",
    shortDescription: "Mousse Purifiante Visage (Homme et Femme)",
    price: 68,
    image: "/images/produits/sania.jpeg",
    benefits: ["Exfoliation Douce", "Pureté et Éclat", "Prévient les boutons", "Antiseptique"],
    ingredients: ["Savon noir", "Vetiver", "Clou de Girofle"],
    usage: "A Faire"
  },
  {
    id: 6,
    name: "SIROP DE BAIN",
    description: " A faire ",
    shortDescription: "Soin Lavant corps et visage (Homme et Femme)",
    price: 45,
    image: "/images/produits/siropdebain.jpeg",
    benefits: ["Exfoliant", "Nourissant", "Raviveur d'éclat", "Antiseptique"],
    ingredients: ["A Faire"],
    usage: " A faire "
  },
  {
    id: 7,
    name: "SMOOTHIE",
    description: " A faire ",
    shortDescription: "Gommage visage et corps (Homme et Femme)",
    price: 62,
    image: "/images/produits/smoothie.jpeg",
    benefits: ["Élimine les peaux mortes", "Élimine les points noirs et blancs", "Laisse la peau très douce et claquante"],
    ingredients: ["Sel", "Curcuma", "Miel"],
    usage: " - Corps : Appliquez sur la peau, masser et rincer. -Visage : Appliquez sue le visage humide, faire des mouvements circulaires sans frotter et rincer."
  }
];