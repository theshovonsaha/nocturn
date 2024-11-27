// app/components/home/CollectionCard.tsx
import { useState, useRef, useEffect } from 'react';
import type { Collection } from '../../utils/types';

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.preload = 'metadata';
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative flex-none w-[240px] mx-2 rounded-lg overflow-hidden bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[3/4] w-full">
        {collection.tag && (
          <div className="absolute top-2 left-2 z-20">
            <span className="px-2 py-1 text-xs font-medium bg-black text-white rounded">
              {collection.tag}
            </span>
          </div>
        )}

        <div className="absolute inset-0">
          <img
            src={collection.coverImage}
            alt={collection.title}
            className={`absolute inset-0 w-full h-full object-cover will-change-transform
              ${isHovered ? 'opacity-0' : 'opacity-100'} 
              transition-opacity duration-200`}
            loading="lazy"
          />
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover will-change-transform
              ${isHovered ? 'opacity-100' : 'opacity-0'} 
              transition-opacity duration-200`}
            src={collection.videoUrl}
            playsInline
            muted
            loop
          />
        </div>

        {/* Thumbnails */}
        <div
          className={`absolute bottom-0 left-0 right-0 flex gap-1 p-2 bg-white/90
            transform transition-transform duration-300 ease-out
            ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
        >
          {collection.thumbnails.map((thumbnail, idx) => (
            <div key={idx} className="w-8 h-12 rounded overflow-hidden">
              <img
                src={thumbnail}
                alt={`${collection.title} view ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Title and Subtitle */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900">{collection.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{collection.subtitle}</p>
      </div>
    </div>
  );
}