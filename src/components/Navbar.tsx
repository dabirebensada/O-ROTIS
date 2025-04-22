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
      navigate('/products');
    }
  };

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
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-plant-800 hover:text-plant-600"
              >
                {showSearch ? <X size={20} /> : <Search size={20} />}
              </button>
              
              {showSearch && (
                <form onSubmit={handleSearch} className="absolute right-0 top-full mt-2 w-72">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t.nav.search}
                      className="w-full pl-4 pr-10 py-2 border border-plant-200 rounded-md focus:outline-none focus:ring-1 focus:ring-plant-500"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-plant-400 hover:text-plant-600"
                    >
                      <Search size={16} />
                    </button>
                  </div>
                </form>
              )}
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