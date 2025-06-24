import React from 'react';

const FilterPanel = ({ filters, onFilterChange }) => {
  return (
    <div id="FilterPanel_1" className="w-full lg:w-64 bg-white p-4 rounded-lg shadow-md">
      <h2 id="FilterPanel_2" className="text-xl font-semibold mb-4">Filters</h2>
      
      <div id="FilterPanel_3" className="space-y-4">
        <div id="FilterPanel_4">
          <label className="block text-gray-700 mb-2">Location</label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter location"
          />
        </div>

        <div id="FilterPanel_5">
          <label className="block text-gray-700 mb-2">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => onFilterChange('minPrice', e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Min"
            />
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Max"
            />
          </div>
        </div>

        <div id="FilterPanel_6">
          <label className="block text-gray-700 mb-2">Property Type</label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;