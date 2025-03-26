import {createSlice} from '@reduxjs/toolkit';

import type {AuthState, Currency} from './types';
import {reducers} from './reducers';
import {extraReducers} from './extraReducers';

export const currency: Currency[] = [
  {value: 'USD', symbol: '$', rate: 1, selected: true},
  {value: 'UAH', symbol: '₴', rate: 42, selected: false},
  {value: 'EUR', symbol: '€', rate: 0.9, selected: false},
  {value: 'GBP', symbol: '£', rate: 0.8, selected: false},
];

const initialState: AuthState = {
  user: null,
  loading: false,
  settings: {
    darkMode: false,
    notifications: true,
    currency,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
  extraReducers,
  selectors: {
    selectUser: (state: AuthState) => state.user,
    selectAuthLoading: (state: AuthState) => state.loading,
    selectUserSettings: (state: AuthState) => state.settings,
    selectCurrency: (state: AuthState) => state.settings.currency,
  },
});

export const {toggleTheme, updateBalance, setCurrencySelected, setNotifications} =
  authSlice.actions;
export const {selectAuthLoading, selectUser, selectUserSettings, selectCurrency} =
  authSlice.selectors;
export default authSlice.reducer;
