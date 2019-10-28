import axios from 'axios';


const processApp = axios.create({
  baseURL: 'https://5db5c2b7f6869d001474a112.mockapi.io'
});

function addNewProcess(params) {
  return processApp.post('/processo', { ...params });
}

function editProcess(params) {
  return processApp.put(`/processo/${params.id}`, { ...params });
}

function deleteProcess(id) {
  return processApp.delete(`/processo/${id}`, { id });
}

function getProcess(id) {
  return processApp.get(`/processo/${id}`, { id });
}

function searchProcess(term) {
    const termEnconded = encodeURI(term);
  return processApp.get(`/processo?q=${termEnconded}`, { termEnconded });
}

export default {
  addNewProcess,
  editProcess,
  deleteProcess,
  getProcess,
  searchProcess
};
