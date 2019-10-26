import React from 'react';

import './styles.css';

function ProcessList(props) {

    return (<div>
          {props.match.params.term}

    </div>)
}

export default ProcessList;
