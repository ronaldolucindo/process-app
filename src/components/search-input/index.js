import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import './styles.css';

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
      <IconButton type="submit" className="search-button" aria-label="search">
        <SearchIcon className="search-icon" />
      </IconButton>
    </form>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SearchInput;
