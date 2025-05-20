
import React from 'react';
import './SearchArtistButton.css';
import { FaSearch } from 'react-icons/fa';

const SearchArtistButton = () => {
  return (
    <div className="search-artist-button">
      <button className="btn">
        <span>Search Artist</span>
        <FaSearch className="icon" />
      </button>
    </div>
  );
};

export default SearchArtistButton;
