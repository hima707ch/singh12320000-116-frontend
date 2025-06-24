import React, { useState } from 'react';

const UserManagement = () => {
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
  ]);

  return (
    <div id="UserManagement_1">
      <h2 id="UserManagement_2" className="text-2xl font-semibold mb-4">User Management</h2>
      <div id="UserManagement_3" className="overflow-x-auto">
        <table id="UserManagement_4" className="min-w-full divide-y divide-gray-200">
          <thead id="UserManagement_5" className="bg-gray-50">
            <tr>
              <th id="UserManagement_6" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th id="UserManagement_7" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th id="UserManagement_8" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
              <th id="UserManagement_9" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody id="UserManagement_10" className="bg-white divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.id}>
                <td id="UserManagement_11" className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td id="UserManagement_12" className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td id="UserManagement_13" className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td id="UserManagement_14" className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;