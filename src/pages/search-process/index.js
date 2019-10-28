import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import SearchInput from 'components/search-input';
import useSearch from 'common/hooks/use-search';
import useProcess from 'common/stores/process';
import Button from '@material-ui/core/Button';
import ProcessModal from 'components/process-modal';

function SearchProcess(props) {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, handleSearchChange, handleSearchSubmit] = useSearch('');
  const process = useProcess();

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSaveProcess = async params => {
    await process.actions.insertNewProcess(params);
  };

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
          Você pode criar um novo processo{' '}
          <Button size="small" color="primary" onClick={handleOpenModal}>
            clicando aqui
          </Button>
        </p>
        <ProcessModal
          open={showModal}
          onClose={handleCloseModal}
          onSave={handleSaveProcess}
          data={process.state.data}
          setData={process.actions.setProcessData}
        />
      </main>
    </div>
  );
}

SearchProcess.propTypes = {
  history: PropTypes.object
};

export default SearchProcess;
