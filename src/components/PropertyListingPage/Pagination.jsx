import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div id="Pagination_1" className="flex justify-center items-center space-x-2 mt-8">
      <button
        id="Pagination_2"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
      >
        Previous
      </button>
      
      <div id="Pagination_3" className="flex space-x-1">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`w-8 h-8 rounded-full ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        id="Pagination_4"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;