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
                <h3 className="flex items-center gap-3 mt-1 text-plant-800 bg-white/50 p-3 rounded-md border border-plant-100 hover:bg-white transition-colors">{item.product.name}</h3>
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
              className="w-full bg-plant-600 text-white px-8 py-3 rounded-md hover:bg-plant-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 flex items-center justify-center gap-2 shadow-md hover:shadow-plant-600/20"
            >
              {language === 'fr' ? 'Passer la commande' : 'Proceed to Checkout'}
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-md border border-plant-100">
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
                    className="mt-1 block w-full rounded-md border border-plant-300 bg-white/90 shadow-sm focus:border-plant-500 focus:ring-2 focus:ring-plant-200 px-4 py-2 text-plant-800 placeholder-plant-400 transition-all duration-200"
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
                    className="mt-1 block w-full rounded-md border border-plant-300 bg-white/90 shadow-sm focus:border-plant-500 focus:ring-2 focus:ring-plant-200 px-4 py-2 text-plant-800 placeholder-plant-400 transition-all duration-200"
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
                  className="mt-1 block w-full rounded-md border border-plant-300 bg-white/90 shadow-sm focus:border-plant-500 focus:ring-2 focus:ring-plant-200 px-4 py-2 text-plant-800 placeholder-plant-400 transition-all duration-200"
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
                  <div key="pickup" className="flex items-center">
                    <input
                      id="pickup"
                      name="deliveryMethod"
                      type="radio"
                      className="h-4 w-4 text-plant-600 focus:ring-2 focus:ring-plant-200 border-plant-300"
                      checked={formData.deliveryMethod === 'pickup'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'pickup' })}
                    />
                    <label htmlFor="pickup" className="ml-3 block text-sm font-medium text-plant-700">
                      {language === 'fr' ? 'Retrait en magasin' : 'Store Pickup'}
                    </label>
                  </div>
                  <div key="delivery" className="flex items-center">
                    <input
                      id="delivery"
                      name="deliveryMethod"
                      type="radio"
                      className="h-4 w-4 text-plant-600 focus:ring-2 focus:ring-plant-200 border-plant-300"
                      checked={formData.deliveryMethod === 'delivery'}
                      onChange={() => setFormData({ ...formData, deliveryMethod: 'delivery' })}
                    />
                    <label htmlFor="delivery" className="ml-3 block text-sm font-medium text-plant-700">
                      {language === 'fr' ? 'Livraison' : 'Delivery'}
                    </label>
                  </div>
                </div>
              </div>

              {/* Mode de paiement */}
              <div>
                <label className="block text-sm font-medium text-plant-800 mb-2">
                  {language === 'fr' ? 'Mode de paiement' : 'Payment Method'}
                </label>
                <div className="space-x-4">
                  <div key="cash" className="flex items-center">
                    <input
                      id="cash"
                      name="paymentMethod"
                      type="radio"
                      className="h-4 w-4 text-plant-600 focus:ring-2 focus:ring-plant-200 border-plant-300"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cash' })}
                    />
                    <label htmlFor="cash" className="ml-3 block text-sm font-medium text-plant-700">
                      {language === 'fr' ? 'Paiement à la livraison' : 'Cash on Delivery'}
                    </label>
                  </div>
                  <div key="card" className="flex items-center">
                    <input
                      id="card"
                      name="paymentMethod"
                      type="radio"
                      className="h-4 w-4 text-plant-600 focus:ring-2 focus:ring-plant-200 border-plant-300"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    />
                    <label htmlFor="card" className="ml-3 block text-sm font-medium text-plant-700">
                      {language === 'fr'
                        ? 'Paiement Mobile (OrangeMoney / MoovMoney)'
                        : 'Mobile Payment (OrangeMoney / MoovMoney)'}
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-plant-600 text-white px-8 py-3 rounded-md hover:bg-plant-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 flex items-center justify-center gap-2 shadow-md hover:shadow-plant-600/20 mt-4"
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