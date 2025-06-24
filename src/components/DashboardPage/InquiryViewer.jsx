import React from 'react';

const InquiryViewer = ({ inquiries }) => {
  return (
    <div id="InquiryViewer_1" className="space-y-4">
      {inquiries.map((inquiry) => (
        <div
          id={`InquiryViewer_${inquiry.id}`}
          key={inquiry.id}
          className="border rounded-lg p-4 hover:bg-gray-50"
        >
          <div id="InquiryViewer_2" className="flex justify-between items-start">
            <div id="InquiryViewer_3">
              <h4 className="font-semibold">{inquiry.name}</h4>
              <p className="text-sm text-gray-600">{inquiry.email}</p>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(inquiry.date).toLocaleDateString()}
            </span>
          </div>
          <p id="InquiryViewer_4" className="mt-2 text-gray-700">{inquiry.message}</p>
          <div id="InquiryViewer_5" className="mt-2 text-sm text-gray-600">
            Property: {inquiry.propertyTitle}
          </div>
        </div>
      ))}
      {inquiries.length === 0 && (
        <p id="InquiryViewer_6" className="text-center text-gray-500">
          No inquiries yet
        </p>
      )}
    </div>
  );
};

export default InquiryViewer;