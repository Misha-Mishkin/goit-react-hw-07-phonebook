import { configureStore } from '@reduxjs/toolkit';
import { contactAPI } from '../serviceAPI/contactsAPI';
import { filterSlice } from 'serviceAPI/filterSlice';

export const store = configureStore({
  reducer: {
    [contactAPI.reducerPath]: contactAPI.reducer,
    [filterSlice.name]: filterSlice.reducer
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware().concat(contactAPI.middleware),
  ],
});
