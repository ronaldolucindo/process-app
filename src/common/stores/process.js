import { useState } from 'react';
import ProcessAppService from 'common/services/process-app';

const initialState = () => ({
  data: {
    numero: '',
    entrada: '',
    assunto: '',
    interessados: [],
    descricao: ''
  },
  fetching: false,
  fetched: false,
  error: false
});

function useProcess() {
  const [state, setState] = useState(initialState());

  async function insertNewProcess(params) {
    try {
      setState(prevState => ({ ...prevState, fetching: true, error: false }));
      const response = await ProcessAppService.addNewProcess({
          ...params,
          entrada: Date.now()
      });
      setState(prevState => ({
        ...prevState,
        fetching: false,
        fetched: true,
        data: { ...response.data }
      }));
    } catch (e) {
      if (!e || (e && e.__CANCEL__)) return;
      console.error(e);
      setState(prevState => ({
        ...prevState,
        fetching: false,
        fetched: true,
        error: true
      }));
    }
  }

  const setProcessData = process => {
    setState(prevState => ({
      ...prevState,
      data: { ...prevState.data, ...process }
    }));
  };

  const actions = {
    insertNewProcess,
    setProcessData
  };

  return {
    state,
    setState,
    actions
  };
}

export default useProcess;
