import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { product, quantity }
    });
    navigate('/cart');
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={() => navigate(-1)}
          className="text-plant-600 hover:text-plant-800 mb-8 flex items-center"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-serif font-bold text-plant-800 mb-4">{product.name}</h1>
            <p className="text-2xl text-plant-600 mb-6">${product.price}</p>
            <p className="text-plant-700 mb-8">{product.description}</p>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-plant-800 mb-4">Benefits</h2>
              <ul className="list-disc list-inside space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="text-plant-600">{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-plant-800 mb-4">Key Ingredients</h2>
              <ul className="list-disc list-inside space-y-2">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-plant-600">{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-plant-800 mb-4">How to Use</h2>
              <p className="text-plant-600">{product.usage}</p>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <label htmlFor="quantity" className="text-plant-800">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-plant-200 rounded-md px-3 py-2 w-20"
              />
            </div>

            <button
              onClick={addToCart}
              className="w-full bg-plant-600 text-white px-8 py-3 rounded-md hover:bg-plant-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;