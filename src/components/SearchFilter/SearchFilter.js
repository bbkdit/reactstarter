// src/components/SearchFilter/SearchFilter.js
import React, { useState } from 'react';

const SearchFilter = ({ onSearch, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterTerm, setFilterTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilterTerm(e.target.value);
        onFilter(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <select value={filterTerm} onChange={handleFilterChange}>
                <option value="">All Categories</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                {/* Add more categories as needed */}
            </select>
        </div>
    );
};

export default SearchFilter;
