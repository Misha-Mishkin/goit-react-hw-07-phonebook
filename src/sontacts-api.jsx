import axios from 'axios';

axios.defaults.baseURL = 'https://62d6bca151e6e8f06f11d821.mockapi.io';

const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};


export default {fetchContacts, addContact}