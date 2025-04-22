import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const whatsappNumber = '+22672062582'; // Replace with actual number
  const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;

  const createWhatsAppLink = (message: string) => {
    return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <footer className="bg-plant-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About SUMAYA</h3>
            <p className="text-plant-200">
              Premium skincare products made with natural ingredients. Discover your perfect skincare routine with our curated collection.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-plant-200 hover:text-white">All Products</Link></li>
              <li><Link to="/about" className="text-plant-200 hover:text-white">About Us</Link></li>
              <li><Link to="/advice" className="text-plant-200 hover:text-white">Get Advice</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={createWhatsAppLink("Hello, I'd like to contact customer service")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-plant-200 hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href={createWhatsAppLink("Hello, I have a question about shipping and returns")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-plant-200 hover:text-white"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a 
                  href={createWhatsAppLink("Hello, I need help with FAQ")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-plant-200 hover:text-white"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-plant-800">
          <p className="text-center text-plant-200">&copy; 2025 SUMAYA COSMETICS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;