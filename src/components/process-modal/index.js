import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import './styles.css';
import PeopleInput from './people-input';

function ProcessModal(props) {
  const { open, onClose, onSave, data, setData, edit } = props;
  const handleSubmit = async e => {
    e.preventDefault();
    await onSave(data);
    onClose();
  };
  const renderTitle = edit ? 'Editar processo' : 'Cadastro de processo';

  const handleInputChange = e => {
    const input = e.target;
    setData({ [input.name]: input.value });
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      aria-labelledby="process-dialog-title"
      aria-describedby="process-dialog-description"
      className="process-modal"
    >
      <DialogTitle id="process-dialog-title">
        {renderTitle}
        <IconButton aria-label="close" onClick={onClose} className="close-btn">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit} autoComplete="off">
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="process"
            name="numero"
            value={data.numero}
            onChange={handleInputChange}
            label="Processo"
            type="text"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="subject"
            name="assunto"
            value={data.assunto}
            onChange={handleInputChange}
            label="Assunto"
            type="text"
            fullWidth
          />
          <PeopleInput data={data.interessados} setData={setData} />
          <TextField
            required
            multiline
            rows="4"
            margin="dense"
            id="description"
            name="descricao"
            value={data.descricao}
            onChange={handleInputChange}
            label="Descrição"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            autoFocus
          >
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

ProcessModal.defaultProps = {
  edit: false
};

ProcessModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  data: PropTypes.object,
  setData: PropTypes.func,
  edit: PropTypes.bool
};

export default ProcessModal;
