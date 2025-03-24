import {PayloadAction} from '@reduxjs/toolkit';
import {UpdateBalancePayload, TransactionState} from './types';

export const reducers = {
  updateBalance: (state: TransactionState, action: PayloadAction<UpdateBalancePayload>) => {
    state.balance = action.payload.amount;
  },
  clearTransactions: (state: TransactionState) => {
    state.transactions = [];
    state.balance = 0;
    state.error = null;
  },
};
