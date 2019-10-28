import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useProcessList from 'common/stores/process-list';
import useProcessDetails from 'common/stores/process-details';
import useSearch from 'common/hooks/use-search';
import Header from './header';
import ProcessCardList from './process-card-list';
import ProcessDetails from './process-details';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

function ProcessList({ match, history }) {
  const processList = useProcessList();
  const processDetails = useProcessDetails();
  const [searchValue, handleSearchChange, handleSearchSubmit] = useSearch(
    match.params.term
  );

  const [selectedProcess, setSelectedProcess] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (selectedProcess) {
      processDetails.actions.getProcessDetails(selectedProcess);
    }
  }, [selectedProcess]);

  useEffect(() => {
    processList.actions.getProcessList(match.params.term);
  }, [match.params.term]);

  const handleCardClick = e => {
    setSelectedProcess(e);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };
  const handleRemoveProcess = async (id) => {
    await processDetails.actions.deleteProcess(id)
    processList.actions.getProcessList(match.params.term);
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
                activeProcess={selectedProcess}
                processList={processList.state.data}
                showDetails={showDetails}
              />
              {selectedProcess && showDetails && (
                <ProcessDetails
                  showDetails={showDetails}
                  onClose={handleCloseDetails}
                  processData={processDetails.state}
                  onRemove={handleRemoveProcess}
                />
              )}
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
