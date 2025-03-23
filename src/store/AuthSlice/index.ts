import {createSlice} from '@reduxjs/toolkit';

import type {AuthState} from './types';
import {reducers} from './reducers';
import {extraReducers} from './extraReducers';

const initialState: AuthState = {
  user: null,
  loading: false,
  settings: {
    darkMode: false,
    notifications: true,
    currency: 'USD',
    language: 'en',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
  extraReducers,
  selectors: {
    selectUser: (state: AuthState) => state.user,
    selectLoading: (state: AuthState) => state.loading,
    selectUserSettings: (state: AuthState) => state.settings,
  },
});

export const authActions = authSlice.actions;
export const authSelectors = authSlice.selectors;
export default authSlice.reducer;
