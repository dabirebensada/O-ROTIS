import DOMPurify from 'dompurify';

/**
 * Utilitaires de sécurité pour l'application
 */

// Validation des numéros de téléphone
export const validatePhoneNumber = (phone: string): boolean => {
  // Format international: +226XXXXXXXX ou 226XXXXXXXX
  const phoneRegex = /^(\+226|226)?[0-9]{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Nettoyage et validation des entrées utilisateur
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  // Supprimer les caractères dangereux
  return input
    .trim()
    .replace(/[<>]/g, '') // Supprimer < et >
    .replace(/javascript:/gi, '') // Supprimer javascript:
    .replace(/on\w+=/gi, '') // Supprimer les event handlers
    .substring(0, 1000); // Limiter la longueur
};

// Nettoyage HTML avec DOMPurify
export const sanitizeHTML = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
    ALLOWED_ATTR: []
  });
};

// Validation des URLs externes
export const validateExternalUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    const allowedDomains = [
      'wa.me',
      'whatsapp.com',
      'facebook.com',
      'tiktok.com',
      'typebot.io'
    ];
    
    return allowedDomains.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
};

// Création sécurisée de liens WhatsApp
export const createSecureWhatsAppLink = (phone: string, message: string): string => {
  // Valider le numéro de téléphone
  if (!validatePhoneNumber(phone)) {
    throw new Error('Numéro de téléphone invalide');
  }
  
  // Nettoyer le message
  const cleanMessage = sanitizeInput(message);
  
  // Créer l'URL sécurisée
  const cleanPhone = phone.replace(/\D/g, ''); // Garder seulement les chiffres
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(cleanMessage)}`;
};

// Validation des données de formulaire
export const validateFormData = (data: Record<string, any>): boolean => {
  const requiredFields = ['phoneNumber'];
  
  for (const field of requiredFields) {
    if (!data[field] || typeof data[field] !== 'string') {
      return false;
    }
  }
  
  return validatePhoneNumber(data.phoneNumber);
};

// Protection contre les attaques par injection
export const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// Validation des paramètres d'URL
export const validateUrlParams = (params: URLSearchParams): boolean => {
  const allowedParams = ['lang', 'step', 'ref'];
  
  for (const [key] of params) {
    if (!allowedParams.includes(key)) {
      return false;
    }
  }
  
  return true;
};

// Rate limiting côté client (basique)
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  
  isAllowed(key: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Nettoyer les tentatives anciennes
    const recentAttempts = attempts.filter(time => now - time < windowMs);
    
    if (recentAttempts.length >= maxAttempts) {
      return false;
    }
    
    recentAttempts.push(now);
    this.attempts.set(key, recentAttempts);
    return true;
  }
}

// Instance globale du rate limiter
export const rateLimiter = new RateLimiter();
