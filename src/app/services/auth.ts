import { retry } from '@reduxjs/toolkit/query/react';
import { api } from './api';

export const authService = api.injectEndpoints({
  endpoints: (build) => ({
    loginGoogle: build.mutation<{ token: string, user: any }, any>({
      query: (credentials: any) => ({
        url: 'auth/google',
        method: 'POST',
        body: credentials,
      })
    })
  }),
})

export const {
  useLoginGoogleMutation,
} = authService;

export const {
  endpoints: { loginGoogle },
} = authService;