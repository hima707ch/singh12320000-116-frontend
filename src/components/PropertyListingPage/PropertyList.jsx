import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  return (
    <div id="PropertyList_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
      {properties.length === 0 && (
        <div id="PropertyList_2" className="col-span-full text-center py-8 text-gray-500">
          No properties found matching your criteria
        </div>
      )}
    </div>
  );
};

export default PropertyList;