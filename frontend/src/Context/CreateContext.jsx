// CreateContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the search functionality
const CreateContext = createContext();

// Create a Provider component
export const CreateProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to update the search query
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <CreateContext.Provider value={{ searchQuery, handleSearch }}>
      {children}
    </CreateContext.Provider>
  );
};

// Custom hook to use the CreateContext
export const useCreate = () => {
  return useContext(CreateContext);
};
