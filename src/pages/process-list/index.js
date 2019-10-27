import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useProcessList from 'common/stores/process-list';
import useSearch from 'common/hooks/use-search';
import Header from './header';
import ProcessCardList from './process-card-list';
import ProcessDetails from './process-details';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

function ProcessList({ match, history }) {
  const processList = useProcessList();
  const [searchValue, handleSearchChange, handleSearchSubmit] = useSearch(
    match.params.term
  );

  const [selectedProcess, setSelectedProcess] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    processList.actions.getProcessList(match.params.term);
  }, [match.params.term]);

  const handleCardClick = id => {
    setSelectedProcess(id);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="process-list-container">
      <Header
        searchValue={searchValue}
        onChangeSearch={handleSearchChange}
        onSubmitSearch={handleSearchSubmit}
      />
      <main className="process-list-content">
        {processList.state.fetching && (
          <div className="loading-container">
            <CircularProgress disableShrink />
          </div>
        )}
        {!processList.state.error &&
          !processList.state.fetching &&
          processList.state.fetched && (
            <>
              <ProcessCardList
                onSelectCard={handleCardClick}
                processList={processList.state.data}
              />
              <ProcessDetails
                showDetails={showDetails}
                onClose={handleCloseDetails}
              />
            </>
          )}
      </main>
    </div>
  );
}

ProcessList.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
};

export default ProcessList;
