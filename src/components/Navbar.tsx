import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const { state } = useCart();
  const { searchQuery, setSearchQuery } = useSearch();
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Ferme la barre de recherche après la soumission
      setShowSearch(false);
      // Ne navigue que si nous ne sommes pas déjà sur la page des produits
      if (!window.location.pathname.includes('/products')) {
        navigate('/products');
      }
    }
  };

  // Gère la fermeture de la recherche lors du clic en dehors
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showSearch && !target.closest('.search-container')) {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch]);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-plant-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-plant-800">SUMAYA COSMETICS</h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-plant-800 hover:text-plant-600">{t.nav.about}</Link>
            <Link to="/products" className="text-plant-800 hover:text-plant-600">{t.nav.products}</Link>
            <Link to="/advice" className="text-plant-800 hover:text-plant-600">{t.nav.advice}</Link>
          </div>

          <div className="flex items-center space-x-6">
            <LanguageSelector />
            <div className="relative search-container">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-plant-800 hover:text-plant-600 transition-colors"
                aria-label={showSearch ? t.nav.closeSearch : t.nav.openSearch}
              >
                {showSearch ? <X size={20} /> : <Search size={20} />}
              </button>
              
              <div className={`absolute right-0 transition-all duration-300 ease-in-out ${showSearch ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <form 
                  onSubmit={handleSearch} 
                  className="relative w-72 bg-white shadow-lg rounded-md overflow-hidden mt-2"
                >
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t.nav.search}
                      className="w-full pl-4 pr-10 py-3 border border-plant-200 rounded-md focus:outline-none focus:ring-2 focus:ring-plant-500 focus:border-transparent"
                      autoFocus={showSearch}
                      aria-label={t.nav.search}
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-plant-500 hover:text-plant-700 transition-colors"
                      aria-label={t.nav.submitSearch}
                    >
                      <Search size={18} />
                    </button>
                  </div>
                  {searchQuery && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-md border border-t-0 border-plant-200 p-2 text-sm text-plant-600">
                      {t.nav.searchHint}
                    </div>
                  )}
                </form>
              </div>
            </div>
            
            <Link to="/cart" className="text-plant-800 hover:text-plant-600 relative">
              <ShoppingBag size={20} />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-plant-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;