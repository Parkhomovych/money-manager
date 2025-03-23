import {createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {AuthResponse} from '../types';
import {SignInFormData} from '../../../screens/Auth/SignInScreen/use-sign-in';

export const signIn = createAsyncThunk<AuthResponse, SignInFormData>(
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
