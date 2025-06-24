import React from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import { useLogin } from './useLogin';

const Body = () => {
  const { handleLogin, error, isLoading } = useLogin();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <LoginHeader />
      <div id="Body_2" className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div id="Body_3" className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm handleLogin={handleLogin} error={error} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Body;