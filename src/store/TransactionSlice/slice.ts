import {createSlice} from '@reduxjs/toolkit';
import {TransactionState} from './types';
import {reducers} from './reducers';
import {extraReducers} from './extraReducers';

const initialState: TransactionState = {
  transactions: [],
  balance: 0,
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers,
  extraReducers,
  selectors: {
    selectTransactions: state => state.transactions,
    selectBalance: state => state.balance,
    selectLoading: state => state.loading,
    selectError: state => state.error,
  },
});

export const {updateBalance, clearTransactions} = transactionSlice.actions;
export const {selectTransactions, selectBalance, selectLoading, selectError} =
  transactionSlice.selectors;
export default transactionSlice.reducer;
