import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {AuthState} from './types';
import {signIn, signOut, signUp} from './thunks';

export const extraReducers = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder
    // Sign Up
    .addCase(signUp.pending, state => {
      state.loading = true;
    })
    .addCase(signUp.fulfilled, (state, action) => {
      console.log('signUp.fulfilled', action);
      state.loading = false;
      state.user = action.payload.user;
    })
    .addCase(signUp.rejected, (state, action) => {
      console.log('signUp.rejected', action);
      state.loading = false;
    })
    // Sign In
    .addCase(signIn.pending, state => {
      console.log('signIn.pending');
      state.loading = true;
    })
    .addCase(signIn.fulfilled, (state, action) => {
      console.log('signIn.fulfilled', action);
      state.loading = false;
      state.user = action.payload.user;
    })
    .addCase(signIn.rejected, (state, action) => {
      console.log('signIn.rejected', action);
      state.loading = false;
    })
    // Sign Out
    .addCase(signOut.fulfilled, state => {
      state.loading = false;
      state.user = null;
      state.settings = {
        darkMode: false,
        notifications: true,
        currency: 'USD',
        language: 'en',
      };
      console.log('signOut.fulfilled', state);
    });
};
