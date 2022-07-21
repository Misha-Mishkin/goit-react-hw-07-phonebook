import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
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

const items = createReducer([], {
  [addContactSuccess]: (state, { payload: {id, name, phone } }) => {
    return [
      ...state,
      {
        id,
        name,
        phone,
      },
    ];
  },

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [changeContactRequest]: () => true,
  [changeContactSuccess]: () => false,
  [changeContactError]: () => false,
});

const filter = createReducer('', {
  [changeContactSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
