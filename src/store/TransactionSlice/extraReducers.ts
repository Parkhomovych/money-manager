import {ActionReducerMapBuilder, PayloadAction} from '@reduxjs/toolkit';
import {Transaction, TransactionState} from './types';
import {addTransaction, deleteTransaction, fetchTransactions} from './thunks';

export const extraReducers = (builder: ActionReducerMapBuilder<TransactionState>) => {
  // Add Transaction
  builder.addCase(addTransaction.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(addTransaction.fulfilled, (state, action: PayloadAction<Transaction>) => {
    state.loading = false;
    state.transactions.unshift(action.payload);
  });
  builder.addCase(addTransaction.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload as string;
  });

  // Delete Transaction
  builder.addCase(deleteTransaction.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(deleteTransaction.fulfilled, (state, action: PayloadAction<string>) => {
    const deletedTransaction = state.transactions.find(t => t.id === action.payload);
    if (deletedTransaction) {
      state.transactions = state.transactions.filter(t => t.id !== action.payload);
    }
    state.loading = false;
  });
  builder.addCase(deleteTransaction.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload as string;
  });

  // Fetch Transactions
  builder.addCase(fetchTransactions.pending, state => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(fetchTransactions.fulfilled, (state, action) => {
    state.loading = false;
    state.transactions = action.payload;
  });
  builder.addCase(fetchTransactions.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload as string;
  });
};
