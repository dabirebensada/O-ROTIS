import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Standard } from "@typebot.io/react";
import { MessageCircle, ArrowLeft, Check, Phone, Send } from 'lucide-react';
import { validatePhoneNumber, sanitizeInput, createSecureWhatsAppLink, rateLimiter } from '../utils/security';

const Products = () => {
  const { language } = useLanguage();
  const [showTypebot, setShowTypebot] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleStartOrder = () => {
    setShowTypebot(true);
  };

  const handleBackToOrder = () => {
    setShowTypebot(false);
    setShowInstructions(false);
    setCurrentStep(1);
    setPhoneNumber('');
  };

  const handleOkClick = () => {
    setShowInstructions(true);
  };

  const handlePhoneSubmit = () => {
    setError('');
    
    // Nettoyer l'entrée
    const cleanPhone = sanitizeInput(phoneNumber);
    
    // Valider le numéro
    if (!validatePhoneNumber(cleanPhone)) {
      setError(language === 'fr' 
        ? 'Veuillez entrer un numéro de téléphone valide (ex: +226XXXXXXXX)'
        : 'Please enter a valid phone number (ex: +226XXXXXXXX)'
      );
      return;
    }
    
    // Rate limiting
    if (!rateLimiter.isAllowed('phone-submit', 3, 60000)) {
      setError(language === 'fr'
        ? 'Trop de tentatives. Veuillez patienter avant de réessayer.'
        : 'Too many attempts. Please wait before trying again.'
      );
      return;
    }
    
    setPhoneNumber(cleanPhone);
    setCurrentStep(3);
  };

  const handleFinalSubmit = async () => {
    if (!phoneNumber.trim()) return;
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Rate limiting pour la soumission finale
      if (!rateLimiter.isAllowed('final-submit', 2, 300000)) { // 2 tentatives par 5 minutes
        setError(language === 'fr'
          ? 'Trop de soumissions. Veuillez patienter avant de réessayer.'
          : 'Too many submissions. Please wait before trying again.'
        );
        return;
      }
      
      // Créer un message WhatsApp sécurisé
      const message = `Nouvelle commande O'ROTIS\n\nNuméro du client: ${phoneNumber}\n\n📸 IMPORTANT: Veuillez joindre votre capture d'écran du récapitulatif de commande à ce message.`;
      
      // Créer le lien WhatsApp sécurisé
      const whatsappUrl = createSecureWhatsAppLink('+22654180810', message);
      
      // Ouvrir WhatsApp avec le message
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      // Rediriger vers la page de remerciement après un délai
      setTimeout(() => {
        window.location.href = '/order-success';
      }, 2000);
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setError(language === 'fr'
        ? 'Erreur lors de l\'envoi. Veuillez réessayer.'
        : 'Error sending. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showTypebot) {
    return (
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header avec bouton retour */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handleBackToOrder}
              className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              {language === 'fr' ? 'Retour à la commande' : 'Back to order'}
            </button>
            <h1 className="text-2xl font-serif font-bold text-orange-800">
              {language === 'fr' ? 'Finaliser votre commande' : 'Complete your order'}
            </h1>
          </div>

          {/* Chat Typebot */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            <Standard
              typebot="orotisbf"
              apiHost="https://typebot.co/"
              style={{ width: "100%", height: "600px" }}
            />
          </div>

          {/* Bouton OK pour déclencher les instructions */}
          {!showInstructions && (
            <div className="text-center">
              <button
                onClick={handleOkClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
              >
                <Check size={24} />
                {language === 'fr' ? 'OK, j\'ai fini la discussion' : 'OK, I finished the discussion'}
              </button>
            </div>
          )}

          {/* Instructions successives */}
          {showInstructions && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              {currentStep === 1 && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">
                    {language === 'fr' ? 'Étape 1 : Capture d\'écran' : 'Step 1: Screenshot'}
                  </h3>
                  <p className="text-orange-600 mb-6">
                    {language === 'fr' 
                      ? 'Faites une capture d\'écran du récapitulatif de votre commande affiché dans la conversation ci-dessus. Vous devrez la joindre au message WhatsApp.'
                      : 'Take a screenshot of your order summary displayed in the conversation above. You will need to attach it to the WhatsApp message.'}
                  </p>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    {language === 'fr' ? 'J\'ai fait la capture' : 'I took the screenshot'}
                  </button>
                </div>
              )}

              {currentStep === 2 && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">
                    {language === 'fr' ? 'Étape 2 : Votre numéro de téléphone' : 'Step 2: Your phone number'}
                  </h3>
                  <p className="text-orange-600 mb-6">
                    {language === 'fr' 
                      ? 'Saisissez votre numéro de téléphone pour que nous puissions vous contacter :'
                      : 'Enter your phone number so we can contact you:'}
                  </p>
                  <div className="max-w-md mx-auto">
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        setError(''); // Effacer l'erreur quand l'utilisateur tape
                      }}
                      placeholder={language === 'fr' ? 'Ex: 22670123456' : 'Ex: 22670123456'}
                      className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-center text-lg"
                      maxLength={15}
                    />
                    <p className="text-sm text-orange-500 mt-2">
                      {language === 'fr' 
                        ? 'Commencez par 226 (code pays du Burkina Faso)'
                        : 'Start with 226 (Burkina Faso country code)'}
                    </p>
                    
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mt-4">
                        {error}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handlePhoneSubmit}
                    disabled={!phoneNumber.trim()}
                    className="mt-6 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2 mx-auto"
                  >
                    <Phone size={20} />
                    {language === 'fr' ? 'Continuer' : 'Continue'}
                  </button>
                </div>
              )}

              {currentStep === 3 && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">
                    {language === 'fr' ? 'Étape 3 : Validation finale' : 'Step 3: Final validation'}
                  </h3>
                  <div className="bg-orange-50 p-6 rounded-lg mb-6">
                    <p className="text-orange-700 mb-2">
                      <strong>{language === 'fr' ? 'Numéro de téléphone :' : 'Phone number:'}</strong> {phoneNumber}
                    </p>
                    <p className="text-orange-700">
                      <strong>{language === 'fr' ? 'Capture d\'écran :' : 'Screenshot:'}</strong> {language === 'fr' ? 'À joindre dans WhatsApp' : 'To attach in WhatsApp'}
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-3">
                      📸 {language === 'fr' ? 'Instructions importantes :' : 'Important instructions:'}
                    </h4>
                    <div className="text-blue-700 text-left space-y-2">
                      <p>• {language === 'fr' ? 'Vous serez redirigé vers WhatsApp' : 'You will be redirected to WhatsApp'}</p>
                      <p>• {language === 'fr' ? 'Le message sera pré-rempli avec vos informations' : 'The message will be pre-filled with your information'}</p>
                      <p>• {language === 'fr' ? 'JOIGNEZ votre capture d\'écran au message avant d\'envoyer' : 'ATTACH your screenshot to the message before sending'}</p>
                      <p>• {language === 'fr' ? 'Cliquez sur l\'icône 📎 pour joindre votre capture' : 'Click the 📎 icon to attach your screenshot'}</p>
                    </div>
                  </div>
                  
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                      {error}
                    </div>
                  )}
                  
                  <button
                    onClick={handleFinalSubmit}
                    disabled={isSubmitting}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
                  >
                    <Send size={24} />
                    {isSubmitting 
                      ? (language === 'fr' ? 'Redirection en cours...' : 'Redirecting...')
                      : (language === 'fr' ? 'Aller sur WhatsApp' : 'Go to WhatsApp')
                    }
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-orange-800 mb-4 sm:mb-6 text-shadow">
            {language === 'fr' ? 'Commander votre Poulet Rôtis' : 'Order your Roasted Chicken'}
          </h1>
          <p className="text-lg sm:text-xl text-orange-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {language === 'fr' 
              ? 'Découvrez notre poulet rôtis. Tendre, savoureux et préparé selon nos recettes secrètes.'
              : 'Discover our roasted chicken. Tender, flavorful and prepared according to our secret recipes.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image du produit avec animations */}
          <div className="relative group animate-fade-in-left">
            <img
              src="/images/produits/produitcuit.png"
              alt="Poulet rôtis O'ROTIS"
              className="w-full h-auto rounded-lg shadow-2xl image-hover-effect"
              loading="eager"
            />
            {/* Badge de qualité animé */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold animate-pulse-custom shadow-lg">
              {language === 'fr' ? 'UNIQUE' : 'UNIQUE'}
            </div>
            {/* Effet de brillance au hover */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
          </div>

          {/* Contenu et bouton avec animations */}
          <div className="text-center lg:text-left animate-fade-in-right">
            <h2 className="text-3xl font-serif font-bold text-orange-800 mb-6">
              {language === 'fr' ? 'Poulet Rôtis O\'ROTIS' : 'O\'ROTIS Roasted Chicken'}
            </h2>
            
            <div className="space-y-4 mb-8">
              {[
                language === 'fr' ? '100% naturel et bio' : '100% natural and organic',
                language === 'fr' ? 'Cuit à la perfection' : 'Perfectly cooked',
                language === 'fr' ? 'Recettes Authentiques' : 'Authentic recipes',
                language === 'fr' ? 'Sans conservateurs ni additifs' : 'No preservatives or additives'
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center lg:justify-start animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse-custom" style={{ animationDelay: `${index * 0.2}s` }}></div>
                  <span className="text-orange-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.7s' }}>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg shadow-lg inline-block">
                <div className="text-3xl font-bold">4.000 FCFA</div>
                <div className="text-sm opacity-90">{language === 'fr' ? 'Prix unitaire' : 'Unit price'}</div>
              </div>
            </div>

            {/* Bouton pour lancer le chat avec effet amélioré - Optimisé Mobile */}
            <button
              onClick={handleStartOrder}
              className="w-full lg:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-lg btn-hover-effect shadow-lg hover:shadow-orange-600/30 flex items-center justify-center gap-3 mx-auto lg:mx-0 animate-fade-in-up touch-manipulation"
              style={{ 
                animationDelay: '0.8s',
                minHeight: '48px'
              }}
            >
              <MessageCircle size={20} className="animate-pulse-custom sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-lg">{language === 'fr' ? 'Discuter avec l\'assistant' : 'Chat with our assistant'}</span>
            </button>

            <p className="text-orange-600 mt-4 text-sm animate-fade-in-up" style={{ animationDelay: '1s' }}>
              {language === 'fr' 
                ? '💬 Notre assistant virtuel vous guidera pour finaliser votre commande !'
                : '💬 Our virtual assistant will guide you to complete your order!'}
            </p>
          </div>
        </div>

        {/* Section des avantages avec animations */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center card-hover-effect p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-custom">
              <span className="text-white text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-bold text-orange-800 mb-2">{language === 'fr' ? 'Livraison Rapide' : 'Fast Delivery'}</h3>
            <p className="text-orange-600">{language === 'fr' ? 'Livraison rapidement' : 'Delivery quickly'}</p>
          </div>
          
          <div className="text-center card-hover-effect p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-custom" style={{ animationDelay: '0.5s' }}>
              <span className="text-white text-2xl">🔥</span>
            </div>
            <h3 className="text-xl font-bold text-orange-800 mb-2">{language === 'fr' ? 'Toujours Chaud' : 'Always Hot'}</h3>
            <p className="text-orange-600">{language === 'fr' ? 'Servi à la température parfaite' : 'Served at perfect temperature'}</p>
          </div>
          
          <div className="text-center card-hover-effect p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-custom" style={{ animationDelay: '1s' }}>
              <span className="text-white text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-bold text-orange-800 mb-2">{language === 'fr' ? 'Qualité Premium' : 'Premium Quality'}</h3>
            <p className="text-orange-600">{language === 'fr' ? 'Ingrédients de première qualité' : 'First quality ingredients'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;