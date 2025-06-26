import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  loading?: 'eager' | 'lazy';
  placeholderSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}


const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  placeholderSrc = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdC94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGw6I2YwZjBmMDsiIC8+PC9zdmc+',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback pour les navigateurs qui ne supportent pas IntersectionObserver
      return;
    }


    if (imgRef.current) {
      const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            if (observerRef.current) {
              observerRef.current.unobserve(img);
            }
          }
        });
      };


      observerRef.current = new IntersectionObserver(handleIntersect, {
        rootMargin: '200px',
        threshold: 0.01,
      });

      observerRef.current.observe(imgRef.current);
    }


    return () => {
      if (observerRef.current && imgRef.current) {
        observerRef.current.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setHasError(true);
    if (onError) onError();
  };

  // Si l'image a une erreur, on affiche l'image de remplacement
  if (hasError) {
    return (
      <img
        {...props}
        ref={imgRef}
        src={placeholderSrc}
        alt={alt}
        width={width}
        height={height}
        className={`${className} bg-gray-100`}
        loading={loading}
      />
    );
  }

  return (
    <div className="relative overflow-hidden" style={{ width, height }}>
      {!isLoaded && (
        <img
          src={placeholderSrc}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
        />
      )}
      <img
        {...props}
        ref={imgRef}
        src={loading === 'lazy' ? undefined : src}
        data-src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default OptimizedImage;

