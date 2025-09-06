'use client';

import { useState } from 'react';

const CATEGORIES = ['All', 'Electronics', 'Furniture', 'Books', 'Clothing', 'Sports'];

export default function SearchBar({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (onFilter) {
      onFilter(category);
    }
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    if (onSearch) onSearch('');
    if (onFilter) onFilter('All');
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
      {/* Search Input */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
              selectedCategory === category
                ? 'bg-primary-600 text-white shadow-md hover:bg-primary-700'
                : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 hover:border-gray-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Clear Filters Button */}
      {(searchTerm || selectedCategory !== 'All') && (
        <button
          onClick={handleClearFilters}
          className="text-primary-600 hover:text-primary-500 text-xs sm:text-sm font-medium transition-colors duration-200 hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}
