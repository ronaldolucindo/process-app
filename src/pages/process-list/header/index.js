import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

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
        <Button variant="outlined" className="new-process-btn">
          Novo
        </Button>
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
