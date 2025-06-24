import React, { useState } from 'react';
import images from '../assets/images';

const PhotoGallery = ({ images: propertyImages }) => {
  const [activeImage, setActiveImage] = useState(0);

  const galleryImages = propertyImages?.length ? propertyImages : images;

  return (
    <div id="PhotoGallery_1" className="mb-8">
      <div id="PhotoGallery_2" className="relative h-[500px] rounded-lg overflow-hidden">
        <img
          id="PhotoGallery_3"
          src={galleryImages[activeImage]}
          alt={`Property image ${activeImage + 1}`}
          className="w-full h-full object-cover"
        />
        <div id="PhotoGallery_4" className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
          <div id="PhotoGallery_5" className="flex gap-2 overflow-x-auto pb-2">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                id={`PhotoGallery_6_${index}`}
                onClick={() => setActiveImage(index)}
                className={`w-20 h-20 flex-shrink-0 rounded-md overflow-hidden ${activeImage === index ? 'ring-2 ring-blue-500' : ''}`}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;