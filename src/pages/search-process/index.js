import React, { useState } from 'react';

import './styles.css';
import SearchInput from 'components/search-input';
import useSearch from 'common/hooks/use-search';

function SearchProcess(props) {
  const [ searchValue, handleSearchChange, handleSearchSubmit ] = useSearch('');
  return (
    <div className="search-process-container">
      <main className="main-content">
        <h1>Busca de processos</h1>
        <SearchInput
          value={searchValue}
          onChange={handleSearchChange}
          onSubmit={handleSearchSubmit}
        />
        <p>
          Você pode criar um novo processo <a href="#">clicando aqui</a>
        </p>
      </main>
    </div>
  );
}

export default SearchProcess;
