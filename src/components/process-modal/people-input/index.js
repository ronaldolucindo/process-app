import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './styles.css';

function PeopleInput(props) {
  const { data, setData } = props;
  const [person, setPerson] = useState('');

  const handleAddPerson = async () => {
    if (person) {
      await setData({ interessados: [...data, person] });
      setPerson('');
    }
  };
  return (
    <div className="people-input-container">
      <div className="people-list">
        <p>Interessados</p>
        {(data || []).map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="add-person-container">
        <TextField
          margin="dense"
          id="people"
          label="Interessados"
          type="text"
          fullWidth
          value={person}
          onChange={e => setPerson(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          className="new-process-btn"
          disabled={!person}
          onClick={handleAddPerson}
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
}

PeopleInput.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func
};

export default PeopleInput;
