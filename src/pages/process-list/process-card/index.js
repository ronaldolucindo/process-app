import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import imagePlaceholder from 'assets/image-placeholder.png';

import './styles.css';

function ProcessCard(props) {
  const { id, number, subject, people, description, activeProcess } = props;
  const isActiveProcess = activeProcess === id;
  return (
    <Card
      className={`process-card ${
        isActiveProcess ? 'process-card--active' : ''
      }`}
    >
      <CardContent className="process-card-content">
        <img className="process-image" src={imagePlaceholder} alt={number} />
        <div className="card-column">
          <p className="column-title">Número</p>
          <p className="column-text">{number}</p>
        </div>
        <div className="card-column">
          <p className="column-title">Assunto</p>
          <p className="column-text">{subject}</p>
        </div>
        <div className="card-column">
          <p className="column-title">Interessados</p>
          {people && <p className="column-text">{people[0]}</p>}
        </div>
        <div className="card-column">
          <p className="column-title">Descrição</p>
          <p className="column-text">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

ProcessCard.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  people: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  activeProcess: PropTypes.string
};

export default ProcessCard;
