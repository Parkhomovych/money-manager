import {createAsyncThunk} from '@reduxjs/toolkit';
import * as authFirebase from '@react-native-firebase/auth';
import {AuthResponse, AuthError, Currency, CurrencyRateResponse} from './types';
import {SignInFormData} from '../../screens/Auth/SignInScreen/use-sign-in';
import {SignUpFormData} from '../../screens/Auth/SignUpScreen/use-sing-up';
import {firebaseErrorHandler, convertToUSD} from '../../utils';
import firestore from '@react-native-firebase/firestore';
import {RootState} from '../store';
import {clearTransactions, setTransactions, Transaction} from '../TransactionSlice';

const COLLECTION_BALANCE = 'balance';
const COLLECTION_TRANSACTIONS = 'transactions';

export const signUp = createAsyncThunk<AuthResponse, SignUpFormData, {rejectValue: string}>(
  'auth/signUp',
  async ({email, password}, {rejectWithValue}) => {
    try {
      const auth = authFirebase.getAuth();
      const resp = await authFirebase.createUserWithEmailAndPassword(auth, email, password);
      if (!resp.user) throw new Error('User not found');
      await firestore().collection(COLLECTION_BALANCE).doc(resp.user?.uid).set({amount: 0});

      const user = {
        uid: resp.user?.uid,
        email: resp.user?.email,
        displayName: resp.user?.displayName,
        photoURL: resp.user?.photoURL,
        balance: 0,
      };
      return {user, error: null};
    } catch (e) {
      const errorMessage = firebaseErrorHandler(e as AuthError);
      return rejectWithValue(errorMessage);
    }
  },
);

export const signIn = createAsyncThunk<AuthResponse, SignInFormData, {rejectValue: string}>(
  'auth/signIn',
  async ({email, password}, {rejectWithValue, dispatch}) => {
    try {
      const auth = authFirebase.getAuth();
      const resp = await authFirebase.signInWithEmailAndPassword(auth, email, password);
      if (!resp.user) throw new Error('User not found');

      const balance = await firestore().collection(COLLECTION_BALANCE).doc(resp.user?.uid).get();
      if (!balance.exists) {
        await firestore().collection(COLLECTION_BALANCE).doc(resp.user?.uid).set({amount: 0});
      }

      const transactions = await firestore()
        .collection(COLLECTION_TRANSACTIONS)
        .where('userId', '==', resp.user?.uid)
        .get();

      const transactionsData = transactions.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        } as Transaction;
      });
      dispatch(setTransactions(transactionsData));
      const balanceData = balance.data()?.amount;

      const user = {
        uid: resp.user?.uid,
        email: resp.user?.email,
        displayName: resp.user?.displayName,
        photoURL: resp.user?.photoURL,
        username: resp.user?.displayName,
        balance: balanceData || 0,
      };

      return {user, error: null};
    } catch (e) {
      const errorMessage = firebaseErrorHandler(e as AuthError);
      return rejectWithValue(errorMessage);
    }
  },
);

export const signOut = createAsyncThunk<void, void>(
  'auth/signOut',
  async (_: void, {rejectWithValue, dispatch}) => {
    try {
      const auth = authFirebase.getAuth();
      await authFirebase.signOut(auth);
      dispatch(clearTransactions());
      console.log('signOut success');
    } catch (e) {
      const errorMessage = firebaseErrorHandler(e as AuthError);
      return rejectWithValue(errorMessage);
    }
  },
);

export const setBalance = createAsyncThunk<number, number, {state: RootState; rejectValue: string}>(
  'transaction/addBalance',
  async (payload, {rejectWithValue, getState}) => {
    try {
      const currency = (getState() as RootState).auth.settings.currency;
      const selectedCurrency = currency.find((item: Currency) => item.selected) || currency[0];
      const value = convertToUSD(payload, selectedCurrency);

      const user = getState().auth.user;
      if (!user) throw new Error('User not found');

      const balanceCollection = firestore().collection(COLLECTION_BALANCE);
      const userBalance = await balanceCollection.doc(user.uid).get();
      if (!userBalance.exists) {
        await balanceCollection.doc(user.uid).set({amount: 0});
      }

      const newBalance = userBalance.data()?.amount + value;
      await balanceCollection.doc(user.uid).update({amount: newBalance});

      return newBalance;
    } catch (error) {
      console.error('Error adding balance:', error);
      return rejectWithValue('Failed to add balance');
    }
  },
);

export const getCurrencyRate = createAsyncThunk<
  Currency[],
  void,
  {rejectValue: string; getState: RootState}
>('auth/getCurrencyRate', async (_, {rejectWithValue, getState}) => {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const {rates}: CurrencyRateResponse = await response.json();

    const currency = (getState() as RootState).auth.settings.currency;
    const {value} = currency.find((item: Currency) => item.selected) || currency[0];

    return [
      {value: 'USD', rate: rates.USD, symbol: '$', selected: value === 'USD'},
      {value: 'EUR', rate: rates.EUR, symbol: '€', selected: value === 'EUR'},
      {value: 'GBP', rate: rates.GBP, symbol: '£', selected: value === 'GBP'},
      {value: 'UAH', rate: rates.UAH, symbol: '₴', selected: value === 'UAH'},
    ];
  } catch (error) {
    console.error('Error getting currency rate:', error);
    return rejectWithValue('Failed to get currency rate');
  }
});
