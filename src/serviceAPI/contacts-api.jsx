import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactAPI = createApi({
  reducerPath: 'contactAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62df1d55976ae7460be7f2f8.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: ({name,number}) => ({
        url: '/contacts',
        method: 'POST',
        body: {name,number},
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    changeFilter: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useChangeFilterMutation,
} = contactAPI;
