import {createSlice} from '@reduxjs/toolkit';
import {TransactionState} from './types';
import {reducers} from './reducers';
import {extraReducers} from './extraReducers';

const initialState: TransactionState = {
  transactions: [],
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
    selectLoading: state => state.loading,
    selectError: state => state.error,
  },
});

export const {clearTransactions, setTransactions} = transactionSlice.actions;
export const {selectTransactions, selectLoading, selectError} = transactionSlice.selectors;
export default transactionSlice.reducer;
