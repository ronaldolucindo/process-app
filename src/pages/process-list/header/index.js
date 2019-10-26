import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import SearchInput from 'components/search-input';

function Header({ searchValue, onChangeSearch, onSubmitSearch }) {
  return (
    <header className="process-list-header">
      <h1>Busca de processos</h1>
      <div className="input-container">
        <SearchInput
          value={searchValue}
          onChange={onChangeSearch}
          onSubmit={onSubmitSearch}
        />
        <button className="btn btn-outline-secondary new-process-btn">
          Novo
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  searchValue: PropTypes.string,
  onChangeSearch: PropTypes.func,
  onSubmitSearch: PropTypes.func
};

export default Header;
