import {createAsyncThunk} from '@reduxjs/toolkit';
import {setUser} from '../index';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import type {User} from '../types';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, {dispatch}) => {
    try {
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;

      if (!user) {
        throw new Error('Користувач не авторизований');
      }

      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        throw new Error('Профіль користувача не знайдено');
      }

      const userData = userDoc.data() as User;
      dispatch(setUser(userData));
      return userData;
    } catch (error) {
      throw error;
    }
  },
);
