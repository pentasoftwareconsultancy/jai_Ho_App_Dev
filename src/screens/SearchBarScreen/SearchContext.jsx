// SearchContext.js
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Mock data to search from (replace this with your actual data source)
  const data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <SearchContext.Provider value={{ searchQuery, searchResults, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};