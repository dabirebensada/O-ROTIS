import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Chargement paresseux des composants
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Advice = lazy(() => import('./pages/Advice'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <SearchProvider>
          <Router>
            <div className="min-h-screen bg-white">
              <Navbar />
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/advice" element={<Advice />} />
                  <Route path="/order-success" element={<OrderSuccess />} />
                </Routes>
              </Suspense>
              <Footer />
            </div>
          </Router>
        </SearchProvider>
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;