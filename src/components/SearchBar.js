import React from 'react';
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search transactions..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
