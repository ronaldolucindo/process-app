import React, { useState } from 'react';

import './styles.css';
import SearchInput from 'components/search-input';

function SearchProcess(props) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    const searchParam = encodeURI(searchValue);
    props.history.push(`/search/${searchParam}`);
  };
  return (
    <div className="search-process-container">
      <main className="main-content">
        <h1>Busca de processos</h1>
        <SearchInput
          value={searchValue}
          onChange={handleInputChange}
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
