import { useState } from 'react';
import ProcessAppService from 'common/services/process-app';

const initialState = () => ({
  data: undefined,
  fetching: false,
  fetched: false,
  error: false
});

function useProcessDetails() {
  const [state, setState] = useState(initialState());

  async function getProcessDetails(id) {
    try {
      setState(prevState => ({ ...prevState, fetching: true, error: false }));
      const response = await ProcessAppService.getProcess(id);
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
  async function deleteProcess(id) {
    try {
      setState(prevState => ({ ...prevState, fetching: true, error: false }));
      const response = await ProcessAppService.deleteProcess(id);
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

  const actions = {
    getProcessDetails,
    deleteProcess
  };

  return {
    state,
    setState,
    actions
  };
}

export default useProcessDetails;
