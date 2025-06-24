import React from 'react';

const PropertyInfo = ({ property }) => {
  return (
    <div id="PropertyInfo_1" className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h1 id="PropertyInfo_2" className="text-3xl font-bold mb-4">{property.title}</h1>
      <div id="PropertyInfo_3" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div id="PropertyInfo_4" className="space-y-4">
          <p id="PropertyInfo_5" className="text-2xl font-semibold text-blue-600">${property.price.toLocaleString()}</p>
          <p id="PropertyInfo_6" className="text-gray-600"><span className="font-semibold">Location:</span> {property.location}</p>
          <p id="PropertyInfo_7" className="text-gray-600"><span className="font-semibold">Type:</span> {property.type}</p>
          <p id="PropertyInfo_8" className="text-gray-600"><span className="font-semibold">Size:</span> {property.size} sqft</p>
        </div>
        <div id="PropertyInfo_9" className="space-y-4">
          <h2 id="PropertyInfo_10" className="text-xl font-semibold">Description</h2>
          <p id="PropertyInfo_11" className="text-gray-700">{property.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;