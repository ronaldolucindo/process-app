import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Header from './header';
import useSearch from 'common/hooks/use-search';

function ProcessList({ match, history }) {
  const [searchValue, handleSearchChange, handleSearchSubmit] = useSearch(
    match.params.term
  );

  return (
    <div className="process-list-container">
      <Header
        searchValue={searchValue}
        onChangeSearch={handleSearchChange}
        onSubmitSearch={handleSearchSubmit}
      />
      {match.params.term}
    </div>
  );
}

ProcessList.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
};

export default ProcessList;
