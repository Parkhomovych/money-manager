import {createSlice} from '@reduxjs/toolkit';
import type {AuthState} from './types';
import {signIn, signOut, signUp} from './thunks';

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Sign Up
      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, state => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error signing up';
      })
      // Sign In
      .addCase(signIn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, state => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error signing in';
      })
      // Sign Out
      .addCase(signOut.fulfilled, state => {
        state.isAuthenticated = false;
      });
  },
});

export const {clearError} = authSlice.actions;
export default authSlice.reducer;
