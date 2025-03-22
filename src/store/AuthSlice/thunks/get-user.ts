import {createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import type {User} from '../types';

export const getUser = createAsyncThunk<User | null, void>(
  'auth/getUser',
  async () => {
    const user = auth().currentUser;
    if (user) {
      return {
        id: user.uid,
        email: user.email!,
        name: user.email!.split('@')[0],
      };
    }
    return null;
  },
);
