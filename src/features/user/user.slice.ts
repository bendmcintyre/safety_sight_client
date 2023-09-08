import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    authToken: null,
    isLoggedIn: false,
    isAdmin: false,
    isSuperAdmin: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.authToken = action.payload.authToken;
    },

    removeUser: (state, action) => {
      state.user = null;
      state.authToken = null;
    },

    setAuthToken: (state, action) => {
      state.authToken = action.payload.authToken;
    },

    removeAuthToken: (state, action) => {
      state.authToken = null;
    },
  }
});

export const {
  setUser,
  removeUser,
  setAuthToken,
  removeAuthToken,
} = userSlice.actions;

export default userSlice.reducer;
