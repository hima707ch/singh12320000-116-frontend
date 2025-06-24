import React from 'react';

const Settings = () => {
  return (
    <div id="Settings_1">
      <h2 id="Settings_2" className="text-2xl font-semibold mb-4">Settings</h2>
      <div id="Settings_3" className="space-y-6">
        <div id="Settings_4" className="bg-white p-6 rounded-lg shadow-sm">
          <h3 id="Settings_5" className="text-lg font-medium mb-4">General Settings</h3>
          <div id="Settings_6" className="space-y-4">
            <div id="Settings_7" className="flex items-center justify-between">
              <span>Enable Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div id="Settings_8" className="flex items-center justify-between">
              <span>Dark Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div id="Settings_9" className="bg-white p-6 rounded-lg shadow-sm">
          <h3 id="Settings_10" className="text-lg font-medium mb-4">Security Settings</h3>
          <div id="Settings_11" className="space-y-4">
            <div id="Settings_12" className="flex items-center justify-between">
              <span>Two-Factor Authentication</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <button
              id="Settings_13"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;