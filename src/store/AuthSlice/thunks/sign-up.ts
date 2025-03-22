import {createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import type {AuthCredentials, AuthResponse} from '../types';

export const signUp = createAsyncThunk<AuthResponse, AuthCredentials>(
  'auth/signUp',
  async ({email, password}) => {
    const userCredential = await auth().createUserWithEmailAndPassword(
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
