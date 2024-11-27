import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col">
      <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={mainImage}
          alt="Product main view"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
              mainImage === image ? 'ring-2 ring-indigo-500' : ''
            }`}
          >
            <img
              src={image}
              alt={`View ${index + 1}`}
              className="w-full h-full object-center object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
} 