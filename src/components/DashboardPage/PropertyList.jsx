import React, { useState } from 'react';
import images from '../assets/images';

const PropertyList = ({ properties, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (property) => {
    setEditingId(property.id);
    setEditForm(property);
  };

  const handleSave = (id) => {
    onUpdate(id, editForm);
    setEditingId(null);
  };

  return (
    <div id="PropertyList_1" className="space-y-4">
      {properties.map((property) => (
        <div id={`PropertyList_${property.id}`} key={property.id} className="border rounded-lg p-4">
          {editingId === property.id ? (
            <div id="PropertyList_2" className="space-y-2">
              <input
                type="text"
                value={editForm.title}
                onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                className="w-full p-2 border rounded"
              />
              <input
                type="number"
                value={editForm.price}
                onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                className="w-full p-2 border rounded"
              />
              <div id="PropertyList_3" className="flex gap-2">
                <button
                  onClick={() => handleSave(property.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div id="PropertyList_4" className="flex justify-between items-center">
              <div id="PropertyList_5">
                <h3 className="font-semibold">{property.title}</h3>
                <p className="text-gray-600">${property.price}</p>
              </div>
              <div id="PropertyList_6" className="flex gap-2">
                <button
                  onClick={() => handleEdit(property)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(property.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PropertyList;