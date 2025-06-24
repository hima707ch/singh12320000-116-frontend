import React from 'react';
import UserManagement from './UserManagement';
import PropertyManagement from './PropertyManagement';
import Settings from './Settings';
import { useAdmin } from './useAdmin';

const Body = () => {
  const { activeTab, setActiveTab } = useAdmin();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-100 p-4">
      <div id="Body_2" className="max-w-7xl mx-auto">
        <h1 id="Body_3" className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
        
        <div id="Body_4" className="flex space-x-4 mb-6">
          <button
            id="Body_5"
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'users' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
          >
            User Management
          </button>
          <button
            id="Body_6"
            onClick={() => setActiveTab('properties')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'properties' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
          >
            Property Management
          </button>
          <button
            id="Body_7"
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'settings' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
          >
            Settings
          </button>
        </div>

        <div id="Body_8" className="bg-white rounded-lg shadow-lg p-6">
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'properties' && <PropertyManagement />}
          {activeTab === 'settings' && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default Body;