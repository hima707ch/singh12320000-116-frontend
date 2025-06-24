import React from 'react';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 id="Footer_2" className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">We help people find their dream homes and make the property journey smooth and enjoyable.</p>
          </div>
          <div>
            <h3 id="Footer_3" className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Properties</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 id="Footer_4" className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Main Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
          <div>
            <h3 id="Footer_5" className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;