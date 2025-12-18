
import React, { useState } from 'react';
import { PRODUCT_IMAGES } from '../constants.tsx';

const ProductGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState(PRODUCT_IMAGES[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-lg shadow-sm">
        <img
          src={activeImage.url}
          alt={activeImage.alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="text-xs font-bold uppercase tracking-widest text-black">New Arrival</span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {PRODUCT_IMAGES.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(img)}
            className={`flex-shrink-0 w-20 h-24 rounded-md overflow-hidden border-2 transition-all ${
              activeImage.url === img.url ? 'border-black' : 'border-transparent'
            }`}
          >
            <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
