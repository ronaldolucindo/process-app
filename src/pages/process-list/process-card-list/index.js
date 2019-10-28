import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProcessCard from '../process-card';

import './styles.css';

function ProcessCardList(props) {
  const { match, history, processList, onSelectCard, activeProcess } = props;
  return (
    <div className="process-card-list">
      {(processList || []).map(item => (
        <div onClick={() => onSelectCard(item.id)} key={item.id}>
          <ProcessCard
            id={item.id}
            number={item.numero}
            subject={item.assunto}
            people={item.interessados}
            description={item.descricao}
            activeProcess={activeProcess}
          />
        </div>
      ))}
    </div>
  );
}

ProcessCardList.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  processList: PropTypes.array,
  onSelectCard: PropTypes.func,
  activeProcess: PropTypes.string
};

export default ProcessCardList;
