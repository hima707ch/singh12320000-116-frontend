import React, { useState } from 'react';
import images from '../assets/images';

const PropertyManagement = () => {
  const [properties] = useState([
    { id: 1, title: 'Luxury Villa', location: 'Beverly Hills', price: '$5,000,000', status: 'Active' },
    { id: 2, title: 'Modern Apartment', location: 'New York', price: '$1,200,000', status: 'Pending' },
  ]);

  return (
    <div id="PropertyManagement_1">
      <h2 id="PropertyManagement_2" className="text-2xl font-semibold mb-4">Property Management</h2>
      <div id="PropertyManagement_3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map(property => (
          <div key={property.id} id="PropertyManagement_4" className="bg-white rounded-lg shadow p-4">
            <img
              id="PropertyManagement_5"
              src={images[0]}
              alt={property.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 id="PropertyManagement_6" className="text-lg font-semibold">{property.title}</h3>
            <p id="PropertyManagement_7" className="text-gray-600">{property.location}</p>
            <p id="PropertyManagement_8" className="text-gray-800 font-bold mt-2">{property.price}</p>
            <div id="PropertyManagement_9" className="mt-4 flex justify-between items-center">
              <span id="PropertyManagement_10" className={`px-2 py-1 rounded ${property.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {property.status}
              </span>
              <div id="PropertyManagement_11" className="space-x-2">
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyManagement;