import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
        setUser(data.user);
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img id="Header_2" src={images[0]} alt="Logo" className="h-10 w-10 mr-2" />
              <span className="text-white text-xl font-bold">PropertyHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link id="Header_3" to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
            <Link id="Header_4" to="/propertylistingpage" className="text-white hover:text-gray-200 transition duration-300">Properties</Link>
            {isAuthenticated && (
              <Link id="Header_5" to="/dashboardpage" className="text-white hover:text-gray-200 transition duration-300">Dashboard</Link>
            )}
            {user?.isAdmin && (
              <Link id="Header_6" to="/adminpanel" className="text-white hover:text-gray-200 transition duration-300">Admin</Link>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <Link id="Header_7" to="/loginpage" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">Login</Link>
                <Link id="Header_8" to="/registrationpage" className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">Register</Link>
              </>
            ) : (
              <button
                id="Header_9"
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="Header_10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link id="Header_11" to="/" className="block text-white py-2 hover:bg-blue-700 px-4 rounded">Home</Link>
            <Link id="Header_12" to="/propertylistingpage" className="block text-white py-2 hover:bg-blue-700 px-4 rounded">Properties</Link>
            {isAuthenticated && (
              <Link id="Header_13" to="/dashboardpage" className="block text-white py-2 hover:bg-blue-700 px-4 rounded">Dashboard</Link>
            )}
            {user?.isAdmin && (
              <Link id="Header_14" to="/adminpanel" className="block text-white py-2 hover:bg-blue-700 px-4 rounded">Admin</Link>
            )}
            {!isAuthenticated ? (
              <>
                <Link id="Header_15" to="/loginpage" className="block text-white py-2 hover:bg-blue-700 px-4 rounded">Login</Link>
                <Link id="Header_16" to="/registrationpage" className="block text-white py-2 hover:bg-blue-700 px-4 rounded">Register</Link>
              </>
            ) : (
              <button
                id="Header_17"
                onClick={handleLogout}
                className="block w-full text-left text-white py-2 hover:bg-blue-700 px-4 rounded"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;