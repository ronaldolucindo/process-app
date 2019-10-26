import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProcessCard from '../process-card';

import './styles.css';

function ProcessCardList({ match, history }) {
  return (
    <div className="process-card-list">
      <ProcessCard
        number="212"
        subject="assa"
        people="sasas"
        description="asdasdasd"
      />
      <ProcessCard
        number="212"
        subject="assa"
        people="sasas"
        description="asdasdasd"
      />
    </div>
  );
}

ProcessCardList.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
};

export default ProcessCardList;
