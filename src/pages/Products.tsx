import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useSearch } from '../context/SearchContext';
import { useLanguage, translations } from '../context/LanguageContext';


const Products = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const { language } = useLanguage();
  const t = translations[language];

  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
      .trim();
  };

  const filteredProducts = products.filter((product) => {
    if (!searchQuery.trim()) return true;
    
    const searchTerm = normalizeText(searchQuery);
    const searchWords = searchTerm.split(/\s+/); // Divise la recherche en mots
    
    // Vérifie chaque mot de recherche
    return searchWords.every(word => {
      // Vérifie dans le nom du produit (sans accent et insensible à la casse)
      if (normalizeText(product.name).includes(word)) return true;
      
      // Vérifie dans la description et la description courte pour les deux langues
      if (normalizeText(product.description.fr).includes(word) || 
          normalizeText(product.description.en).includes(word) ||
          normalizeText(product.shortDescription.fr).includes(word) || 
          normalizeText(product.shortDescription.en).includes(word)) {
        return true;
      }
      
      // Vérifie dans les ingrédients (qui sont les mêmes pour les deux langues)
      if (product.ingredients.some(ingredient => 
        normalizeText(ingredient).includes(word)
      )) {
        return true;
      }
      
      // Vérifie dans les bénéfices pour les deux langues
      if (product.benefits.fr.some(benefit => normalizeText(benefit).includes(word)) ||
          product.benefits.en.some(benefit => normalizeText(benefit).includes(word))) {
        return true;
      }
      
      return false;
    });
  });

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-plant-800">
            {t.products.title}
          </h1>
          {searchQuery && (
            <p className="text-plant-600">
              {t.products.searchResult
                .replace('{query}', searchQuery)
                .replace('{count}', filteredProducts.length.toString())}
            </p>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-plant-600">{t.products.noResults}</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-plant-600 hover:text-plant-800 underline"
            >
              {t.products.clearSearch}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-plant-800 mb-2">{product.name}</h3>
                  <p className="text-plant-600 mb-4">
                    {product.shortDescription[language]}
                  </p>
                  <p className="text-xl font-semibold text-plant-800">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;