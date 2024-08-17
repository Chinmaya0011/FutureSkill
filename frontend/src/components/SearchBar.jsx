import React, { useState } from 'react';
import style from "../assets/Styles/SearchBar.module.css";
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon from react-icons
import { useCreate } from '../Context/CreateContext';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { handleSearch } = useCreate(); // Use the search function from context

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(query);
  };

  return (
    <div className={style.searchBarContainer}>
      <h1 className={style.heading}>How Can We Help?</h1>
      <div className={style.inputContainer}>
        <input
          type="text"
          className={style.searchInput}
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button className={style.searchButton} onClick={handleSearchClick}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;