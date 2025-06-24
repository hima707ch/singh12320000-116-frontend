import React from 'react';
import { motion } from 'framer-motion';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#9333EA" d="M45,-78C58.7,-70.9,70.3,-58.8,78.1,-44.2C85.9,-29.7,89.9,-14.8,88.2,-0.9C86.5,12.9,79.1,25.8,71.4,39.2C63.7,52.6,55.7,66.5,43.2,74.3C30.7,82.2,15.3,84,-0.9,85.5C-17.1,87,-34.2,88.2,-47.8,81.2C-61.4,74.2,-71.5,59,-79.2,43.1C-86.9,27.2,-92.2,10.7,-90.3,-5.1C-88.4,-20.9,-79.3,-36,-67.9,-47.7C-56.4,-59.3,-42.6,-67.5,-28.8,-74.8C-14.9,-82.1,-1,-88.5,13.9,-87.8C28.8,-87.1,57.6,-79.4,45,-78Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 id="Hero_2" className="text-5xl md:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                Find Your Dream
              </span>{' '}
              <motion.span
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                Home
              </motion.span>
            </h1>
            <p id="Hero_3" className="text-xl text-gray-600">
              Discover the perfect property that matches your lifestyle and dreams.
            </p>
            <div className="flex space-x-4">
              <button id="Hero_4" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition duration-300">
                Get Started
              </button>
              <button id="Hero_5" className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              id="Hero_6"
              src={images[0] || 'https://via.placeholder.com/600x400'}
              alt="Modern home"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;