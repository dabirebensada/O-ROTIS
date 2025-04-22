import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';

interface CheckoutForm {
  firstName: string;
  lastName: string;
  phone: string;
  deliveryMethod: 'pickup' | 'delivery';
  paymentMethod: 'cash' | 'card';
}

const Cart = () => {
  const { state, dispatch } = useCart();
  const [showForm, setShowForm] = useState(false);
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    phone: '',
    deliveryMethod: 'pickup',
    paymentMethod: 'cash'
  });

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleRemoveItem = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderDetails = state.items.map(item =>
        `${item.product.name} x${item.quantity} - ${item.product.price * item.quantity}€`
      ).join('\n');

      const templateParams = {
        to_email: 'sumayacontact.cosmetics@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        delivery_method: formData.deliveryMethod === 'pickup' ? 'Retrait' : 'Livraison',
        payment_method: formData.paymentMethod === 'cash' ? 'Espèces' : 'Carte',
        order_details: orderDetails,
        total_price: `${totalPrice.toFixed(2)}€`
      };

      await emailjs.send(
        'service_hy8wg4b',
        'template_e0g2q8c',
        templateParams,
        '_5RewudLI88MFMsA4'
      );

      dispatch({ type: 'CLEAR_CART' });
      navigate('/order-success');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert(language === 'fr'
        ? 'Une erreur est survenue lors de l\'envoi de la commande. Veuillez réessayer.'
        : 'An error occurred while sending the order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-serif font-bold text-plant-800 mb-8">
            {language === 'fr' ? 'Votre Panier' : 'Your Cart'}
          </h1>
          <div className="text-center py-12">
            <p className="text-plant-600 mb-6">
              {language === 'fr' ? 'Votre panier est vide' : 'Your cart is empty'}
            </p>
            <Link
              to="/products"
              className="inline-block bg-plant-600 text-white px-8 py-3 rounded-md hover:bg-plant-700 transition-colors"
            >
              {language === 'fr' ? 'Continuer mes achats' : 'Continue Shopping'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif font-bold text-plant-800 mb-8">
          {language === 'fr' ? 'Votre Panier' : 'Your Cart'}
        </h1>

        <div className="space-y-8">
          {state.items.map((item) => (
            <div key={item.product.id} className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-sm">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-plant-800">{item.product.name}</h3>
                <p className="text-plant-600">
                  {language === 'fr' ? 'Quantité' : 'Quantity'}: {item.quantity}
                </p>
                <p className="text-plant-800 font-medium">{item.product.price * item.quantity}€</p>
              </div>
              <button
                onClick={() => handleRemoveItem(item.product.id)}
                className="text-plant-600 hover:text-plant-800"
                aria-label={language === 'fr' ? 'Supprimer' : 'Remove'}
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          <div className="border-t border-plant-100 pt-6">
            <div className="flex justify-between items-center text-xl font-medium text-plant-800">
              <span>{language === 'fr' ? 'Total' : 'Total'}</span>
              <span>{totalPrice.toFixed(2)}€</span>
            </div>
          </div>

          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-plant-600 text-white px-8 py-3 rounded-md hover:bg-plant-700 transition-colors"
            >
              {language === 'fr' ? 'Passer la commande' : 'Proceed to Checkout'}
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              {/* Prénom / Nom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-plant-800">
                    {language === 'fr' ? 'Prénom' : 'First Name'}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="mt-1 block w-full rounded-md border-plant-300 shadow-sm focus:border-plant-500 focus:ring-plant-500"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-plant-800">
                    {language === 'fr' ? 'Nom' : 'Last Name'}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="mt-1 block w-full rounded-md border-plant-300 shadow-sm focus:border-plant-500 focus:ring-plant-500"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-plant-800">
                  {language === 'fr' ? 'Numéro de téléphone' : 'Phone Number'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="Ex: 22670123456"
                  className="mt-1 block w-full rounded-md border-plant-300 shadow-sm focus:border-plant-500 focus:ring-plant-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <p className="mt-1 text-sm text-plant-600">
                  {language === 'fr'
                    ? 'Commencez par 226 (code pays du Burkina Faso) suivi de votre numéro'
                    : 'Start with 226 (Burkina Faso country code) followed by your number'}
                </p>
              </div>

              {/* Mode de livraison */}
              <div>
                <label className="block text-sm font-medium text-plant-800 mb-2">
                  {language === 'fr' ? 'Mode de livraison' : 'Delivery Method'}
                </label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="pickup"
                      checked={formData.deliveryMethod === 'pickup'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'pickup' })}
                      className="text-plant-600 focus:ring-plant-500"
                    />
                    <span className="ml-2">{language === 'fr' ? 'Retrait' : 'Pickup'}</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="delivery"
                      checked={formData.deliveryMethod === 'delivery'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'delivery' })}
                      className="text-plant-600 focus:ring-plant-500"
                    />
                    <span className="ml-2">{language === 'fr' ? 'Livraison' : 'Delivery'}</span>
                  </label>
                </div>
              </div>

              {/* Mode de paiement */}
              <div>
                <label className="block text-sm font-medium text-plant-800 mb-2">
                  {language === 'fr' ? 'Mode de paiement' : 'Payment Method'}
                </label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cash' })}
                      className="text-plant-600 focus:ring-plant-500"
                    />
                    <span className="ml-2">{language === 'fr' ? 'Espèces' : 'Cash'}</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className="text-plant-600 focus:ring-plant-500"
                    />
                    <span className="ml-2">
                      {language === 'fr'
                        ? 'Paiement Mobile (OrangeMoney / MoovMoney)'
                        : 'Mobile Payment (OrangeMoney / MoovMoney)'}
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-plant-600 text-white px-8 py-3 rounded-md transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-plant-700'
                }`}
              >
                {isSubmitting
                  ? language === 'fr' ? 'Envoi en cours...' : 'Sending...'
                  : language === 'fr' ? 'Confirmer la commande' : 'Confirm Order'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;