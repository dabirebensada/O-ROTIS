import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import PageTransition from './components/PageTransition';

// Chargement paresseux des composants
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Advice = lazy(() => import('./pages/Advice'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-orange-50">
            <Navbar />
            <Suspense fallback={<LoadingSpinner />}>
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/advice" element={<Advice />} />
                  <Route path="/order-success" element={<OrderSuccess />} />
                </Routes>
              </PageTransition>
            </Suspense>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;