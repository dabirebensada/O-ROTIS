import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, MessageCircle, Home } from 'lucide-react';

const OrderSuccess = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Icône de succès avec animation */}
          <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-8 animate-scale-in">
            <CheckCircle className="h-12 w-12 text-green-600 animate-pulse-custom" />
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl font-serif font-bold text-orange-800 mb-6 animate-fade-in-up text-shadow">
            {language === 'fr' 
              ? 'Merci pour votre commande !' 
              : 'Thank you for your order!'}
          </h1>

          {/* Message de confirmation */}
          <p className="text-xl text-orange-600 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {language === 'fr'
              ? 'Votre commande a été envoyée avec succès ! Nous avons bien reçu votre capture d\'écran et votre numéro de téléphone.'
              : 'Your order has been sent successfully! We have received your screenshot and phone number.'}
          </p>

          {/* Instructions pour la suite */}
          <div className="bg-orange-50 p-8 rounded-lg mb-8 card-hover-effect animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold text-orange-800 mb-4">
              {language === 'fr' ? 'Prochaines étapes :' : 'Next steps:'}
            </h2>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              {[
                language === 'fr' 
                  ? 'Nous allons examiner votre commande et vous contacterons dans les plus brefs délais.'
                  : 'We will review your order and contact you as soon as possible.',
                language === 'fr' 
                  ? 'Poursuivez sur WhatsApp pour finaliser les modalités de paiement et de livraison.'
                  : 'Continue on WhatsApp to finalize payment and delivery arrangements.',
                language === 'fr' 
                  ? 'Préparez-vous à déguster notre délicieux poulet rôtis !'
                  : 'Get ready to enjoy our delicious roasted chicken!'
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 animate-pulse-custom" style={{ animationDelay: `${index * 0.5}s` }}>
                    {index + 1}
                  </div>
                  <p className="text-orange-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <a
              href="https://wa.me/22654180810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-bold rounded-lg btn-hover-effect shadow-lg"
            >
              <MessageCircle size={24} className="animate-pulse-custom" />
              {language === 'fr' ? 'Continuer sur WhatsApp' : 'Continue on WhatsApp'}
            </a>
            
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-bold rounded-lg btn-hover-effect shadow-lg"
            >
              <Home size={24} className="animate-pulse-custom" style={{ animationDelay: '0.5s' }} />
              {language === 'fr' ? 'Retour à l\'accueil' : 'Back to homepage'}
            </Link>
          </div>

          {/* Section réseaux sociaux */}
          <div className="mt-12 p-8 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg card-hover-effect animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                {language === 'fr' 
                  ? 'Rejoignez notre communauté !' 
                  : 'Join our community!'}
              </h3>
              <p className="text-orange-700 mb-6">
                {language === 'fr' 
                  ? 'Suivez nos actualités, découvrez nos recettes et partagez vos moments O\'ROTIS'
                  : 'Follow our news, discover our recipes and share your O\'ROTIS moments'}
              </p>
              
              <div className="flex justify-center space-x-6 mb-6">
                <a
                  href="https://www.tiktok.com/@orotis03?_t=ZM-8zTROW8rCRc&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg"
                  title="Suivez-nous sur TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1C4AzHek5E/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg"
                  title="Suivez-nous sur Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              
              <p className="text-orange-600 text-sm animate-pulse-custom">
                {language === 'fr' 
                  ? '📱 Ne ratez aucune de nos actualités quotidiennes'
                  : '📱 Don\'t miss any of our daily news'}
              </p>
            </div>
          </div>

          {/* Message de remerciement final */}
          <div className="mt-8 p-6 bg-gradient-to-r from-orange-200 to-red-200 rounded-lg card-hover-effect animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
            <p className="text-orange-800 text-lg font-medium text-center">
              {language === 'fr' 
                ? '🍗 Merci de nous faire confiance pour votre poulet rôti ! À bientôt chez O\'ROTIS !'
                : '🍗 Thank you for trusting us for your roasted chicken! See you soon at O\'ROTIS!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
