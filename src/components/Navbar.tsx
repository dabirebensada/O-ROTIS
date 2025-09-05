import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/about', label: t.nav.about },
    { to: '/products', label: t.nav.products },
    { to: '/advice', label: t.nav.advice }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-orange-200/50' 
        : 'bg-white/80 backdrop-blur-md border-b border-orange-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo avec animation */}
          <Link 
            to="/" 
            className="flex-shrink-0 group"
          >
            <h1 className="text-2xl font-serif font-bold text-red-700 transition-all duration-300 group-hover:scale-105 group-hover:text-red-600 animate-fade-in-left">
              O'ROTIS
            </h1>
          </Link>
          
          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-orange-800 hover:text-orange-600 transition-all duration-300 transform hover:scale-105 animate-fade-in-up ${
                  location.pathname === link.to 
                    ? 'text-orange-600 font-semibold' 
                    : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-600 animate-scale-in"></span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Menu mobile toggle - Optimisé Touch */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-orange-800 hover:text-orange-600 transition-all duration-300 transform hover:scale-110 p-2 -m-2 touch-manipulation"
              aria-label="Toggle mobile menu"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Language selector */}
          <div className="flex items-center space-x-6 animate-fade-in-right">
            <LanguageSelector />
          </div>
        </div>

        {/* Menu mobile - Optimisé Touch */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-orange-200/50">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-orange-800 hover:text-orange-600 transition-all duration-300 transform hover:translate-x-2 py-3 px-4 rounded-lg touch-manipulation ${
                  location.pathname === link.to 
                    ? 'text-orange-600 font-semibold bg-orange-50' 
                    : 'hover:bg-orange-50'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;