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
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './actions';

axios.defaults.baseURL = 'https://62d6bca151e6e8f06f11d821.mockapi.io/contacts';

export const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { contacts } = await axios.get(`/contacts`);
    return dispatch(fetchContactSuccess(contacts));
  } catch (error) {
    return dispatch(fetchContactError(error));
  }
};

export const addContact =
  ({ id, name, phone }) =>
  async dispatch => {
    const contact = {
      id,
      name,
      phone,
    };

    dispatch(addContactRequest());

    try {
      const { data } = await axios.post('/contacts', contact);
      return dispatch(addContactSuccess(data));
    } catch (error) {
      return dispatch(addContactError(error));
    }
  };

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    return dispatch(deleteContactSuccess(id));
  } catch (error) {
    return dispatch(deleteContactError(error));
  }
};

export const changeFilter = name => async dispatch => {
  dispatch(changeContactRequest());

  try {
    const { data } = await axios.put(`/contacts/${name}`);
    return dispatch(changeContactSuccess(data));
  } catch (error) {
    return dispatch(changeContactError(error));
  }
};
