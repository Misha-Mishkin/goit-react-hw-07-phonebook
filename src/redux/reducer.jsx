import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  useCreateContactMutation,
  useDeleteContactMutation,
  useChangeFilterMutation,
} from './operations';

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
