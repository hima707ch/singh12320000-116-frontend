import React from 'react';
import PropertyList from './PropertyList';
import InquiryViewer from './InquiryViewer';
import { useDashboard } from './useDashboard';

const Body = () => {
  const { properties, inquiries, loading, error, handlePropertyDelete, handlePropertyUpdate } = useDashboard();

  if (loading) return <div id="Body_1" className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-3xl font-bold mb-8">Dashboard</h1>
      <div id="Body_5" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section id="Body_6" className="bg-white rounded-lg shadow p-6">
          <h2 id="Body_7" className="text-2xl font-semibold mb-6">My Properties</h2>
          <PropertyList 
            properties={properties}
            onDelete={handlePropertyDelete}
            onUpdate={handlePropertyUpdate}
          />
        </section>
        <section id="Body_8" className="bg-white rounded-lg shadow p-6">
          <h2 id="Body_9" className="text-2xl font-semibold mb-6">Recent Inquiries</h2>
          <InquiryViewer inquiries={inquiries} />
        </section>
      </div>
    </div>
  );
};

export default Body;