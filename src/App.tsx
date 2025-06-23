import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Advice from './pages/Advice';
import OrderSuccess from './pages/OrderSuccess';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <SearchProvider>
          <Router>
            <div className="min-h-screen bg-white">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/advice" element={<Advice />} />
                <Route path="/order-success" element={<OrderSuccess />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </SearchProvider>
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;