import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import imagePlaceholder from 'assets/image-placeholder.png';

import './styles.css';

function ProcessCard(props) {
  const { number, subject, people, description } = props;
  return (
    <Card className="process-card">
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
          <p className="column-text">{people}</p>
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
  number: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  people: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired
};

export default ProcessCard;
