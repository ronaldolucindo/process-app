import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function ProcessDetails({ match, history }) {
  return <div className="process-details"></div>;
}

ProcessDetails.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
};

export default ProcessDetails;
