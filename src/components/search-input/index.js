import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import searchIcon from 'assets/search-icon.svg';

function SearchInput({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="search-input-container">
      <input
        type="search"
        id="search"
        placeholder="Pesquise por uma informação do processo"
        value={value}
        onChange={onChange}
      />
      <button>
        <img src={searchIcon} alt="" />
      </button>
    </form>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SearchInput;
