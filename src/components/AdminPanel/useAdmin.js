import { useState } from 'react';

export const useAdmin = () => {
  const [activeTab, setActiveTab] = useState('users');
  
  return {
    activeTab,
    setActiveTab
  };
};