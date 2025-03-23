import {PayloadAction} from '@reduxjs/toolkit';
import {AuthState, UpdateUserSettingsPayload} from './types';

export const reducers = {
  clearError: (state: AuthState) => {
    state.loading = false;
    state.user = null;
    state.settings = {
      darkMode: false,
      notifications: true,
      currency: 'USD',
      language: 'en',
    };
  },
  updateUserSettings: (state: AuthState, action: PayloadAction<UpdateUserSettingsPayload>) => {
    state.settings = {...state.settings, ...action.payload};
  },
};
