import {PayloadAction} from '@reduxjs/toolkit';
import {Transaction, TransactionState} from './types';

export const reducers = {
  clearTransactions: (state: TransactionState) => {
    state.transactions = [];
    state.error = null;
    state.loading = false;
  },
  setTransactions: (state: TransactionState, action: PayloadAction<Transaction[]>) => {
    state.transactions = action.payload;
  },
};
