import { configureStore } from '@reduxjs/toolkit';
import { contactAPI } from '../serviceAPI/contactsAPI';
import { filterSlice } from 'serviceAPI/filterSlice';

export const store = configureStore({
  reducer: {
    [contactAPI.reducerPath]: contactAPI.reducer,
    filter: filterSlice,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware().concat(contactAPI.middleware),
  ],
});
