// app/components/home/HeroCarousel.tsx
import { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { collections } from '~/data/collections';
import { CollectionCard } from './CollectionCard';

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const maxVisibleCards = 5;
  const maxIndex = collections.length - maxVisibleCards;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  const scroll = useCallback(
    (direction: 'left' | 'right') => {
      if (direction === 'left') {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      } else {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
      }
    },
    [maxIndex]
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, maxIndex]);

  return (
    <section 
      className="w-full bg-white py-8 border-y border-gray-200"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6 px-4">
          <h2 className="text-2xl font-medium text-black mb-1">Trending</h2>
          <p className="text-sm text-gray-600">
            Find Your Vibe at Nocturn Clothing!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-8">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className={`absolute -left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white 
              shadow-md hover:bg-gray-50 transition-colors
              ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll('right')}
            className={`absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white 
              shadow-md hover:bg-gray-50 transition-colors
              ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 244}px)`, // 240px card + 4px gap
              }}
            >
              {collections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}