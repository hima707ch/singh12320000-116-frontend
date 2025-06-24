import { useState, useEffect } from 'react';

const usePropertyDetails = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const propertyId = new URLSearchParams(window.location.search).get('id');
        const response = await fetch(`/api/properties/${propertyId}`);
        if (!response.ok) throw new Error('Failed to fetch property details');
        const data = await response.json();
        setProperty(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, []);

  const handleInquirySubmit = async (inquiryData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send inquiry');
    }

    return await response.json();
  };

  return { property, loading, error, handleInquirySubmit };
};

export default usePropertyDetails;