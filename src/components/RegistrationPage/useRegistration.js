import { useState } from 'react';

const useRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegistration = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      alert('Registration successful!');
      // You might want to redirect the user or clear the form here
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleRegistration,
    loading,
    error
  };
};

export default useRegistration;