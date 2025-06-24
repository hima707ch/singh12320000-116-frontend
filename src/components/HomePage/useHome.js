import { useState, useEffect } from 'react';

const useHome = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchProperties = async () => {
    try {
      setLoading(true);
      const queryString = new URLSearchParams(searchParams).toString();
      const response = await fetch(`/api/properties/search?${queryString}`);
      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error);
      
      setProperties(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchProperties();
  }, []);

  return {
    searchParams,
    setSearchParams,
    properties,
    loading,
    error,
    searchProperties
  };
};

export default useHome;