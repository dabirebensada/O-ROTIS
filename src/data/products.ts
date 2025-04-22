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
    name: "Sérum Hydratant Visage",
    description: "Un sérum profondément hydratant qui pénètre les couches de la peau pour apporter une hydratation et une nutrition durables. Formulé avec de l'acide hyaluronique et de la vitamine B5.",
    shortDescription: "Sérum hydratant intense à l'acide hyaluronique",
    price: 58,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    benefits: ["Hydratation profonde", "Repulpe la peau", "Réduit les ridules", "Améliore l'élasticité"],
    ingredients: ["Acide Hyaluronique", "Vitamine B5", "Glycérine", "Aloe Vera"],
    usage: "Appliquer 2-3 gouttes sur la peau propre et humide matin et soir. Suivre avec une crème hydratante."
  },
  {
    id: 2,
    name: "Crème Éclaircissante à la Vitamine C",
    description: "Une crème éclaircissante puissante qui combine de la vitamine C stable avec des extraits naturels pour uniformiser le teint et booster l'éclat.",
    shortDescription: "Crème éclaircissante à la vitamine C stable",
    price: 65,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    benefits: ["Éclaircit le teint", "Uniformise le teint", "Protection antioxydante", "Stimule le collagène"],
    ingredients: ["Vitamine C", "Acide Férulique", "Vitamine E", "Niacinamide"],
    usage: "Appliquer une petite quantité sur la peau propre chaque matin. Toujours suivre avec une protection solaire."
  },
  {
    id: 3,
    name: "Gel Nettoyant Doux",
    description: "Un gel nettoyant doux au pH équilibré qui élimine efficacement les impuretés tout en préservant la barrière d'hydratation naturelle de la peau.",
    shortDescription: "Gel nettoyant doux au pH équilibré",
    price: 38,
    image: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    benefits: ["Nettoyage doux", "Maintient l'équilibre du pH", "Non desséchant", "Convient à tous les types de peau"],
    ingredients: ["Glycérine", "Extrait de Camomille", "Panthénol", "Extrait de Thé Vert"],
    usage: "Masser sur peau humide matin et soir. Rincer abondamment à l'eau tiède."
  },
  {
    id: 4,
    name: "Soin de Nuit au Rétinol",
    description: "Un traitement de nuit avancé contenant du rétinol encapsulé pour favoriser le renouvellement cellulaire et réduire les signes du vieillissement pendant votre sommeil.",
    shortDescription: "Traitement de nuit avancé au rétinol",
    price: 75,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    benefits: ["Favorise le renouvellement cellulaire", "Réduit les rides fines", "Améliore la texture", "Uniformise le teint"],
    ingredients: ["Rétinol", "Peptides", "Céramides", "Squalane"],
    usage: "Appliquer une petite quantité sur peau propre le soir. Commencer par deux fois par semaine et augmenter progressivement la fréquence."
  },
  {
    id: 5,
    name: "Huile Visage Nourrissante",
    description: "Un mélange luxueux d'huiles botaniques qui nourrit profondément et restaure l'éclat naturel de la peau.",
    shortDescription: "Mélange luxueux d'huiles botaniques",
    price: 68,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    benefits: ["Nutrition profonde", "Restaure l'éclat", "Équilibre la production de sébum", "Renforce la barrière cutanée"],
    ingredients: ["Huile de Jojoba", "Huile de Rose Musquée", "Huile de Marula", "Vitamine E"],
    usage: "Appliquer 4-5 gouttes sur peau propre comme dernière étape de votre routine du soir."
  },
  {
    id: 6,
    name: "Masque Apaisant à l'Argile",
    description: "Un masque à l'argile doux qui purifie et apaise les peaux sensibles sans provoquer de dessèchement.",
    shortDescription: "Masque purifiant doux à l'argile",
    price: 45,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    benefits: ["Purifie les pores", "Calme l'inflammation", "Équilibre le sébum", "Exfoliation douce"],
    ingredients: ["Argile Kaolin", "Aloe Vera", "Calendula", "Thé Vert"],
    usage: "Appliquer une couche uniforme sur peau propre. Laisser poser 10-15 minutes, puis rincer. Utiliser 1-2 fois par semaine."
  },
  {
    id: 7,
    name: "Crème Réparatrice Barrière",
    description: "Une crème riche et restauratrice qui renforce la barrière cutanée et procure une hydratation durable.",
    shortDescription: "Crème riche fortifiante pour la barrière cutanée",
    price: 62,
    image: "https://images.unsplash.com/photo-1556228852-6d35a585d566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    benefits: ["Renforce la barrière cutanée", "Hydratation intense", "Réduit la sensibilité", "Favorise la cicatrisation"],
    ingredients: ["Céramides", "Niacinamide", "Panthénol", "Beurre de Karité"],
    usage: "Appliquer sur peau propre matin et soir. Peut être utilisé selon les besoins pour plus d'hydratation."
  }
];