import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProcessCard from '../process-card';

import './styles.css';

function ProcessCardList(props) {
  const { match, history, processList, onSelectCard } = props;
  return (
    <div className="process-card-list">
      {(processList || []).map(item => (
        <ProcessCard
          key={item.id}
          id={item.id}
          number={item.numero}
          subject={item.assunto}
          people={item.interessados}
          description={item.descricao}
          onClick={onSelectCard}
        />
      ))}
    </div>
  );
}

ProcessCardList.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  processList: PropTypes.array,
  onSelectCard: PropTypes.func
};

export default ProcessCardList;
