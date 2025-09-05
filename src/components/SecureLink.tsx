import React from 'react';
import { validateExternalUrl } from '../utils/security';

interface SecureLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
}

const SecureLink: React.FC<SecureLinkProps> = ({ 
  href, 
  children, 
  className = '', 
  title,
  onClick 
}) => {
  const isExternal = href.startsWith('http');
  const isValidExternal = isExternal ? validateExternalUrl(href) : true;
  
  const handleClick = (e: React.MouseEvent) => {
    if (isExternal && !isValidExternal) {
      e.preventDefault();
      console.warn('Tentative d\'accès à une URL non autorisée:', href);
      return;
    }
    
    if (onClick) {
      onClick();
    }
  };
  
  if (isExternal) {
    return (
      <a
        href={isValidExternal ? href : '#'}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        title={title}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <a
      href={href}
      className={className}
      title={title}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default SecureLink;
