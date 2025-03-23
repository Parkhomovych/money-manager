import {createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {AuthResponse} from '../types';
import {SignUpFormData} from '../../../screens/Auth/SignUpScreen/use-sing-up';

export const signUp = createAsyncThunk<AuthResponse, SignUpFormData>(
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
