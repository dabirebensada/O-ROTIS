
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const OrderSuccess = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-plant-800 mb-6">
            {language === 'fr' 
              ? 'Merci pour votre commande !' 
              : 'Thank you for your order!'}
          </h1>
          <p className="text-lg text-plant-600 mb-8">
            {language === 'fr'
              ? 'Votre commande a été enregistrée et reçue sur notre adresse email. Nous vous contacterons sur WhatsApp pour la suite du processus.'
              : 'Your order has been recorded and received at our email address. We will contact you on WhatsApp for the rest of the process.'}
          </p>
          <Link
            to="/"
            className="inline-block bg-plant-600 text-white px-8 py-3 rounded-md hover:bg-plant-700 transition-colors"
          >
            {language === 'fr' 
              ? 'Retour à la page d\'accueil'
              : 'Return to homepage'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;