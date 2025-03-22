import {createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import type {AuthCredentials, AuthResponse} from '../types';

export const signIn = createAsyncThunk<AuthResponse, AuthCredentials>(
  'auth/signIn',
  async ({email, password}) => {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    return {
      id: userCredential.user.uid,
      email: userCredential.user.email!,
      name: email.split('@')[0],
    };
  },
);
