import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeContactRequest,
  changeContactSuccess,
  changeContactError,
} from './actions';

axios.defaults.baseURL = 'https://62d6bca151e6e8f06f11d821.mockapi.io/contacts';

export const addContact = text => dispatch => {
  const contact = {
    text,
    completed: false,
  };

  dispatch(addContactRequest());

  return axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  return axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export const changeFilter = id => dispatch => {
  dispatch(changeContactRequest());

  return axios
    .put(`/contacts/${id}`)
    .then(({ data }) => dispatch(changeContactSuccess(data)))
    .catch(error => dispatch(changeContactError(error)));
};
