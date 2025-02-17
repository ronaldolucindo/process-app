import { useState } from 'react';
import ProcessAppService from 'common/services/process-app';

const initialState = () => ({
  data: undefined,
  fetching: false,
  fetched: false,
  error: false
});

function useProcessList() {
  const [state, setState] = useState(initialState());

  async function getProcessList(term) {
    try {
      setState(prevState => ({ ...prevState, fetching: true, error: false }));
      const response = await ProcessAppService.searchProcess(term);
      setState(prevState => ({
        ...prevState,
        fetching: false,
        fetched: true,
        data: [...response.data]
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
    getProcessList
  };

  return {
    state,
    setState,
    actions
  };
}

export default useProcessList;
