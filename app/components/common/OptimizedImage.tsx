import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function OptimizedImage({ src, alt, className, width, height }: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      width={width}
      height={height}
      loading="lazy"
    />
  );
} 