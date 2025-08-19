import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: '',
    subcategory: '',
    priceRange: [0, 1000],
    colors: [],
    sizes: [],
    sortBy: 'featured',
    searchQuery: ''
  });

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      subcategory: '',
      priceRange: [0, 1000],
      colors: [],
      sizes: [],
      sortBy: 'featured',
      searchQuery: ''
    });
  };

  const value = {
    filters,
    updateFilters,
    clearFilters
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
