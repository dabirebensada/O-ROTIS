import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'eager' | 'lazy';
  imgClassName?: string;
  webpSrc?: string; // Source WebP optionnelle
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',

  width,
  height,
  loading = 'lazy',
  imgClassName = '',
  webpSrc,
}) => {
  // Vérifier si l'extension est .webp
  const isWebP = src.endsWith('.webp');
  
  // Si c'est déjà une image WebP, on l'utilise directement
  if (isWebP) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`${imgClassName || ''} ${className}`}
        width={width}
        height={height}
        style={{
          width: width ? (typeof width === 'number' ? `${width}px` : width) : 'auto',
          height: height ? (typeof height === 'number' ? `${height}px` : height) : 'auto',
        }}
      />
    );
  }

  // Pour les images non-WebP, on peut essayer de fournir une version WebP
  return (
    <picture className={className}>
      {/* Version WebP si disponible */}
      {webpSrc && (
        <source 
          srcSet={webpSrc} 
          type="image/webp"
        />
      )}
      
      {/* Version originale comme fallback */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={imgClassName}
        width={width}
        height={height}
        style={{
          width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
          height: height ? (typeof height === 'number' ? `${height}px` : height) : 'auto',
        }}
      />
    </picture>
  );
};

export default ResponsiveImage;
