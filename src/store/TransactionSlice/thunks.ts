import {createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {RootState} from '../store';
import {
  AddTransactionPayload,
  DeleteTransactionPayload,
  Transaction,
  TransactionType,
  UpdateTransactionPayload,
} from './types';
import {updateBalance} from '../AuthSlice';
import {convertToUSD} from '../../utils';
const COLLECTION_TRANSACTIONS = 'transactions';
const COLLECTION_BALANCE = 'balance';

export const addTransaction = createAsyncThunk<
  Transaction,
  AddTransactionPayload,
  {state: RootState; rejectValue: string}
>('transaction/addTransaction', async (payload, {rejectWithValue, getState, dispatch}) => {
  try {
    const user = getState().auth.user;
    if (!user) throw new Error('User not found');

    const currency = getState().auth.settings.currency;
    const selectedCurrency = currency.find(i => i.selected) || currency[0];
    const amount = convertToUSD(payload.amount, selectedCurrency);
    const now = new Date().toISOString();

    const transaction: Omit<Transaction, 'id'> = {
      userId: user.uid,
      type: payload.type,
      amount,
      description: payload.description,
      category: payload.category,
      date: now,
      createdAt: now,
      updatedAt: now,
    };

    const transactionCollection = await firestore().collection(COLLECTION_TRANSACTIONS);
    const newTransaction = await transactionCollection.add(transaction);

    const userBalanceRef = firestore().collection(COLLECTION_BALANCE).doc(user.uid);
    const balance = user.balance;
    const newBalance =
      transaction.type === TransactionType.INCOME ? balance + amount : balance - amount;

    await userBalanceRef.set({amount: newBalance});
    dispatch(updateBalance(newBalance));

    return {id: newTransaction.id, ...transaction};
  } catch (error) {
    console.error('Error adding transaction:', error);
    return rejectWithValue('Failed to add transaction');
  }
});

export const deleteTransaction = createAsyncThunk<
  string,
  DeleteTransactionPayload,
  {state: RootState; rejectValue: string}
>('transaction/deleteTransaction', async (payload, {rejectWithValue, getState, dispatch}) => {
  try {
    const user = getState().auth.user;
    if (!user) throw new Error('User not found');

    const docRef = firestore().collection(COLLECTION_TRANSACTIONS).doc(payload.id);
    const doc = await docRef.get();

    if (!doc.exists) throw new Error('Transaction not found');
    if (doc.data()?.userId !== user.uid) throw new Error('Unauthorized');

    const transaction = doc.data() as Transaction;
    const userBalanceRef = firestore().collection(COLLECTION_BALANCE).doc(user.uid);
    const balance = user.balance;
    const newBalance =
      transaction.type === TransactionType.INCOME
        ? balance - transaction.amount
        : balance + transaction.amount;

    await docRef.delete();
    await userBalanceRef.set({amount: newBalance});
    dispatch(updateBalance(newBalance));

    return payload.id;
  } catch (error) {
    console.error('Error deleting transaction:', error);
    return rejectWithValue('Failed to delete transaction');
  }
});

export const fetchTransactions = createAsyncThunk<
  Transaction[],
  void,
  {state: RootState; rejectValue: string}
>('transaction/fetchTransactions', async (_, {rejectWithValue, getState, dispatch}) => {
  try {
    const user = getState().auth.user;
    if (!user) throw new Error('User not found');

    const transactions = await firestore()
      .collection(COLLECTION_TRANSACTIONS)
      .where('userId', '==', user.uid)
      .get();

    const balance = await firestore().collection(COLLECTION_BALANCE).doc(user.uid).get();
    dispatch(updateBalance(balance.data()?.amount || 0));

    const transactionsData = transactions.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      } as Transaction;
    });

    console.log('transactionsData', transactionsData);
    return transactionsData;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return rejectWithValue('Failed to fetch transactions');
  }
});

export const updateTransaction = createAsyncThunk<
  Transaction,
  UpdateTransactionPayload,
  {state: RootState; rejectValue: string}
>('transaction/updateTransaction', async (payload, {rejectWithValue, getState}) => {
  try {
    const user = getState().auth.user;
    if (!user) throw new Error('User not found');

    if (payload.amount) {
      const currency = getState().auth.settings.currency;
      const selectedCurrency = currency.find(i => i.selected) || currency[0];
      const amount = convertToUSD(payload.amount, selectedCurrency);
      payload.amount = amount;
    }

    const docRef = firestore().collection(COLLECTION_TRANSACTIONS).doc(payload.id);
    const doc = await docRef.get();

    if (!doc.exists) throw new Error('Transaction not found');
    if (doc.data()?.userId !== user.uid) throw new Error('Unauthorized');

    const now = new Date().toISOString();
    const updatedTransaction = {
      ...doc.data(),
      ...payload,
      updatedAt: now,
    };

    await docRef.update(updatedTransaction);
    return updatedTransaction as Transaction;
  } catch (error) {
    console.error('Error updating transaction:', error);
    return rejectWithValue('Failed to update transaction');
  }
});
