import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'common/utils';
import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import imagePlaceholder from 'assets/image-placeholder.png';

import './styles.css';

function ProcessDetails({ match, history, processData, onClose }) {
  return (
    <div className="process-details-container">
      {processData.fetching && (
        <div className="loading-container">
          <CircularProgress disableShrink />
        </div>
      )}
      {!processData.error && processData.fetched && !processData.fetching && (
        <>
          <IconButton
            className="close-btn"
            aria-label="close"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <div className="process-details-header">
            <img
              className="process-details-img"
              src={imagePlaceholder}
              alt={processData.data.numero}
            />
            <div className="process-details-col">
              <p className="process-details-title">Processo</p>
              <p className="process-details-text">{processData.data.numero}</p>
            </div>
            <div className="process-details-col">
              <p className="process-details-title">Data</p>
              <p className="process-details-text">
                {formatDate(processData.data.entrada)}
              </p>
            </div>
            <div className="process-details-subject">
              <p className="process-details-title">Assunto</p>
              <p className="process-details-text">{processData.data.assunto}</p>
            </div>
          </div>
          <div className="process-details-col">
            <p className="process-details-title">Interessados</p>
            <p className="process-details-text">
              {(processData.data.interessados || []).map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </p>
          </div>
          <div className="process-details-col">
            <p className="process-details-title">Descrição</p>
            <p className="process-details-text">{processData.data.descricao}</p>
          </div>
        </>
      )}
    </div>
  );
}

ProcessDetails.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  processData: PropTypes.object,
  onClose: PropTypes.func
};

export default ProcessDetails;
