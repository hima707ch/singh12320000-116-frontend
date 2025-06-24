import { useState, useEffect } from 'react';

export const usePropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1
  });

  const fetchProperties = async () => {
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams({
        ...filters,
        page: pagination.currentPage
      });

      const response = await fetch(`/api/properties/search?${queryParams}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch properties');
      }

      setProperties(data.properties);
      setPagination(prev => ({
        ...prev,
        totalPages: Math.ceil(data.total / 10)
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [filters, pagination.currentPage]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
    setPagination(prev => ({
      ...prev,
      currentPage: 1
    }));
  };

  const handlePageChange = (page) => {
    setPagination(prev => ({
      ...prev,
      currentPage: page
    }));
  };

  return {
    properties,
    filters,
    pagination,
    loading,
    error,
    handleFilterChange,
    handlePageChange
  };
};