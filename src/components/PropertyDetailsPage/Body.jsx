import React from 'react';
import PropertyInfo from './PropertyInfo';
import PhotoGallery from './PhotoGallery';
import InquiryForm from './InquiryForm';
import usePropertyDetails from './usePropertyDetails';

const Body = () => {
  const { property, loading, error, handleInquirySubmit } = usePropertyDetails();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div></div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="max-w-7xl mx-auto px-4 py-8">
      <PropertyInfo property={property} />
      <PhotoGallery images={property.images} />
      <InquiryForm onSubmit={handleInquirySubmit} propertyId={property.id} />
    </div>
  );
};

export default Body;