import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  useCreateContactMutation,
  useDeleteContactMutation,
  useChangeFilterMutation,
} from '../serviceAPI/contacts-api';

const items = createReducer([], {
  [useCreateContactMutation]: (state, { payload: { id, name, phone } }) => {
    return [
      ...state,
      {
        id,
        name,
        phone,
      },
    ];
  },

  [useDeleteContactMutation]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [useChangeFilterMutation]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
