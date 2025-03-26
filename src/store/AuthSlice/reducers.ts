import {PayloadAction} from '@reduxjs/toolkit';
import {AuthState, CurrencyValue} from './types';

export const reducers = {
  toggleTheme: (state: AuthState) => {
    state.settings.darkMode = !state.settings.darkMode;
  },
  updateBalance: (state: AuthState, action: PayloadAction<number>) => {
    state.user!.balance = action.payload;
  },
  setNotifications: (state: AuthState, action: PayloadAction<boolean>) => {
    state.settings.notifications = action.payload;
  },
  setCurrencySelected: (state: AuthState, action: PayloadAction<CurrencyValue>) => {
    state.settings.currency = state.settings.currency.map(item => {
      if (item.value === action.payload) {
        return {...item, selected: true};
      } else {
        return {...item, selected: false};
      }
    });
  },
};
