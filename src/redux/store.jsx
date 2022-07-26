import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducer';
import { contactAPI } from './operations';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactAPI.reducerPath]: contactAPI.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactAPI.middleware,
  ],
});

export default store;
