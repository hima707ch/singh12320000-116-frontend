import React from 'react';
import PropertyList from './PropertyList';
import FilterPanel from './FilterPanel';
import Pagination from './Pagination';
import { usePropertyListing } from './usePropertyListing';

const Body = () => {
  const {
    properties,
    filters,
    pagination,
    loading,
    error,
    handleFilterChange,
    handlePageChange
  } = usePropertyListing();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold mb-8 text-gray-800">Property Listings</h1>
      
      <div id="Body_3" className="flex flex-col lg:flex-row gap-8">
        <FilterPanel
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        
        <div id="Body_4" className="flex-1">
          {loading && (
            <div id="Body_5" className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {error && (
            <div id="Body_6" className="text-red-500 p-4 bg-red-50 rounded">
              {error}
            </div>
          )}
          
          {!loading && !error && (
            <>
              <PropertyList properties={properties} />
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;