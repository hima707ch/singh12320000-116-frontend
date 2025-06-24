import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 id="CTA_2" className="text-4xl font-bold mb-8">
            Ready to Find Your Dream Home?
          </h2>
          <p id="CTA_3" className="text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect property through us.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Start Your Search Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;