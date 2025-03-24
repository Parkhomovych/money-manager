import {createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import {
  AddTransactionPayload,
  DeleteTransactionPayload,
  Transaction,
  TransactionType,
  FetchTransactionsResponse,
} from './types';
import {RootState} from '../store';

const COLLECTION_NAME = 'transactions';

export const addTransaction = createAsyncThunk<
  Transaction,
  AddTransactionPayload,
  {state: RootState; rejectValue: string}
>('transaction/addTransaction', async (payload, {rejectWithValue, getState}) => {
  try {
    const user = getState().auth.user;
    if (!user) throw new Error('User not found');

    const now = new Date().toISOString();
    const transaction: Omit<Transaction, 'id'> = {
      userId: user.uid,
      type: payload.type,
      amount: payload.amount,
      description: payload.description,
      category: payload.category,
      date: now,
      createdAt: now,
      updatedAt: now,
    };

    const docRef = await firestore().collection(COLLECTION_NAME).add(transaction);
    return {id: docRef.id, ...transaction};
  } catch (error) {
    console.error('Error adding transaction:', error);
    return rejectWithValue('Failed to add transaction');
  }
});

export const deleteTransaction = createAsyncThunk<
  string,
  DeleteTransactionPayload,
  {state: RootState; rejectValue: string}
>('transaction/deleteTransaction', async (payload, {rejectWithValue, getState}) => {
  try {
    const user = getState().auth.user;
    if (!user) throw new Error('User not found');

    const docRef = firestore().collection(COLLECTION_NAME).doc(payload.id);
    const doc = await docRef.get();

    if (!doc.exists) throw new Error('Transaction not found');
    if (doc.data()?.userId !== user.uid) throw new Error('Unauthorized');

    await docRef.delete();
    return payload.id;
  } catch (error) {
    console.error('Error deleting transaction:', error);
    return rejectWithValue('Failed to delete transaction');
  }
});

export const fetchTransactions = createAsyncThunk<
  FetchTransactionsResponse,
  void,
  {state: RootState; rejectValue: string}
>('transaction/fetchTransactions', async (_, {rejectWithValue, getState}) => {
  try {
    const user = getState().auth.user;
    if (!user) throw new Error('User not found');

    const snapshot = await firestore()
      .collection(COLLECTION_NAME)
      .where('userId', '==', user.uid)
      .orderBy('date', 'desc')
      .get();

    const transactions = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Transaction[];

    const balance = transactions.reduce((acc, transaction) => {
      return transaction.type === TransactionType.INCOME
        ? acc + transaction.amount
        : acc - transaction.amount;
    }, 0);

    return {transactions, balance};
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return rejectWithValue('Failed to fetch transactions');
  }
});
