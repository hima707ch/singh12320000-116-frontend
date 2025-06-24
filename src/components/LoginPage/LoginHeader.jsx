import React from 'react';
import images from '../assets/images';

const LoginHeader = () => {
  return (
    <div id="LoginHeader_1" className="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        id="LoginHeader_2"
        className="mx-auto h-12 w-auto"
        src={images[0]}
        alt="Logo"
      />
      <h2 id="LoginHeader_3" className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p id="LoginHeader_4" className="mt-2 text-center text-sm text-gray-600">
        Or{' '}
        <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
          create a new account
        </a>
      </p>
    </div>
  );
};

export default LoginHeader;