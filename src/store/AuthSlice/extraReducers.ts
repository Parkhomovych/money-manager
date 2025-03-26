import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {AuthState} from './types';
import {currency} from './slice';
import {signIn, signOut, signUp, setBalance, getCurrencyRate} from './thunks';

export const extraReducers = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder
    // Sign Up
    .addCase(signUp.pending, state => {
      state.loading = true;
    })
    .addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    })
    .addCase(signUp.rejected, state => {
      state.loading = false;
    })
    // Sign In
    .addCase(signIn.pending, state => {
      state.loading = true;
    })
    .addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    })
    .addCase(signIn.rejected, state => {
      state.loading = false;
    })
    // Set Balance
    .addCase(setBalance.pending, state => {
      state.loading = true;
    })
    .addCase(setBalance.fulfilled, (state, action) => {
      state.loading = false;
      state.user = state.user ? {...state.user, balance: action.payload} : null;
    })
    .addCase(setBalance.rejected, state => {
      state.loading = false;
    })

    // Get Currency Rate
    .addCase(getCurrencyRate.fulfilled, (state, action) => {
      state.settings.currency = action.payload;
    })
    .addCase(getCurrencyRate.rejected, state => {
      state.loading = false;
    })
    // Sign Out
    .addCase(signOut.fulfilled, state => {
      state.loading = false;
      state.user = null;
      state.settings = {
        darkMode: state.settings.darkMode,
        notifications: state.settings.notifications,
        currency,
      };
    });
};
