import React from "react";
import searchIcon from '../../../assets/images/icons/search.png';
import microphoneIcon from '../../../assets/images/icons/microphone.png';

function SearchBar() {
  return (
    <div className='headerSearch_wrapper'>
      <img src={searchIcon} width="20" height="20" alt="search icon" />
      <label>Search</label>
      <img src={microphoneIcon} width="20" height="20" alt="microphone icon" />
    </div>
  );
}

export default SearchBar;