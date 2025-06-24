import React from 'react';
import RegistrationForm from './RegistrationForm';
import useRegistration from './useRegistration';

const Body = () => {
  const { handleRegistration, loading, error } = useRegistration();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-md mx-auto">
        <div id="Body_3" className="text-center mb-8">
          <h2 id="Body_4" className="text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p id="Body_5" className="mt-2 text-sm text-gray-600">
            Join us today and get access to all features
          </p>
        </div>
        <RegistrationForm onSubmit={handleRegistration} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default Body;