import { createSlice } from '@reduxjs/toolkit';
import { authService } from '../../app/services/auth';
import { RootState } from '../../app/store';


interface AuthState {
  user: any;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authService.endpoints.loginGoogle.matchPending, (state, action) => {
        console.log('pending', action);
      })
      .addMatcher(authService.endpoints.loginGoogle.matchFulfilled, (state, action) => {
        console.log('fulfilled', action);
        console.log('payload:', action.payload);

        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addMatcher(authService.endpoints.loginGoogle.matchRejected, (state, action) => {
        console.log('rejected', action);
      })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: any) => state.auth.isAuthenticated;
export const selectCurrentUser = (state: RootState) => state.auth.user;