import React from 'react';
import images from '../assets/images';

const PropertyCard = ({ property }) => {
  return (
    <div id="PropertyCard_1" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        id="PropertyCard_2"
        src={property.image || images[0]}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div id="PropertyCard_3" className="p-4">
        <h3 id="PropertyCard_4" className="text-xl font-semibold text-gray-800 mb-2">
          {property.title}
        </h3>
        <p id="PropertyCard_5" className="text-gray-600 mb-2">
          {property.location}
        </p>
        <div id="PropertyCard_6" className="flex justify-between items-center">
          <span id="PropertyCard_7" className="text-blue-600 font-bold">
            ${property.price.toLocaleString()}
          </span>
          <span id="PropertyCard_8" className="text-sm text-gray-500">
            {property.type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;