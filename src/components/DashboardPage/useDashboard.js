import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch properties and inquiries data here
        // For demonstration, using mock data
        const mockProperties = [
          { id: 1, title: 'Luxury Villa', price: 500000 },
          { id: 2, title: 'City Apartment', price: 250000 }
        ];
        const mockInquiries = [
          {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Interested in viewing the property',
            date: new Date(),
            propertyTitle: 'Luxury Villa'
          }
        ];
        setProperties(mockProperties);
        setInquiries(mockInquiries);
      } catch (err) {
        setError('Failed to fetch dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePropertyDelete = async (id) => {
    try {
      // API call to delete property
      setProperties(properties.filter(p => p.id !== id));
    } catch (err) {
      setError('Failed to delete property');
    }
  };

  const handlePropertyUpdate = async (id, updatedData) => {
    try {
      // API call to update property
      setProperties(properties.map(p => 
        p.id === id ? { ...p, ...updatedData } : p
      ));
    } catch (err) {
      setError('Failed to update property');
    }
  };

  return {
    properties,
    inquiries,
    loading,
    error,
    handlePropertyDelete,
    handlePropertyUpdate
  };
};
