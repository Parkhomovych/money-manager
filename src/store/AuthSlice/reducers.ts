import {PayloadAction} from '@reduxjs/toolkit';
import {AuthState, UpdateUserSettingsPayload} from './types';

export const reducers = {
  clearError: (state: AuthState) => {
    state.loading = false;
    state.user = null;
    state.settings = {
      darkMode: state.settings.darkMode,
      notifications: state.settings.notifications,
      currency: 'USD',
    };
  },
  updateUserSettings: (state: AuthState, action: PayloadAction<UpdateUserSettingsPayload>) => {
    state.settings = {...state.settings, ...action.payload};
  },
  toggleTheme: (state: AuthState) => {
    state.settings.darkMode = !state.settings.darkMode;
  },
};
