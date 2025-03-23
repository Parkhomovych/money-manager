import {createAsyncThunk} from '@reduxjs/toolkit';
import * as authFirebase from '@react-native-firebase/auth';
import {AuthResponse, AuthError} from './types';
import {SignInFormData} from '../../screens/Auth/SignInScreen/use-sign-in';
import {firebaseErrorHandler} from '../../utils/firebase-error-handler';
import {SignUpFormData} from '../../screens/Auth/SignUpScreen/use-sing-up';

export const signUp = createAsyncThunk<AuthResponse, SignUpFormData, {rejectValue: string}>(
  'auth/signUp',
  async ({email, password}, {rejectWithValue}) => {
    try {
      const auth = authFirebase.getAuth();
      const resp = await authFirebase.createUserWithEmailAndPassword(auth, email, password);
      if (!resp.user) throw new Error('User not found');

      const user = {
        uid: resp.user?.uid,
        email: resp.user?.email,
        displayName: resp.user?.displayName,
        photoURL: resp.user?.photoURL,
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
  async ({email, password}, {rejectWithValue}) => {
    try {
      const auth = authFirebase.getAuth();
      const resp = await authFirebase.signInWithEmailAndPassword(auth, email, password);
      if (!resp.user) throw new Error('User not found');

      const user = {
        uid: resp.user?.uid,
        email: resp.user?.email,
        displayName: resp.user?.displayName,
        photoURL: resp.user?.photoURL,
        username: resp.user?.displayName,
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
  async (_: void, {rejectWithValue}) => {
    try {
      const auth = authFirebase.getAuth();
      await authFirebase.signOut(auth);
      console.log('signOut success');
    } catch (e) {
      const errorMessage = firebaseErrorHandler(e as AuthError);
      return rejectWithValue(errorMessage);
    }
  },
);

export const updateProfile = createAsyncThunk<
  AuthResponse,
  {displayName?: string; photoURL?: string},
  {rejectValue: string}
>('auth/updateProfile', async ({displayName, photoURL}, {rejectWithValue}) => {
  try {
    const auth = authFirebase.getAuth();
    const user = auth.currentUser;
    if (!user) throw new Error('User not found');

    await user.updateProfile({
      displayName,
      photoURL,
    });

    const updatedUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    return {user: updatedUser, error: null};
  } catch (e) {
    const errorMessage = firebaseErrorHandler(e as AuthError);
    return rejectWithValue(errorMessage);
  }
});

export const updatePassword = createAsyncThunk<void, string, {rejectValue: string}>(
  'auth/updatePassword',
  async (newPassword, {rejectWithValue}) => {
    try {
      const auth = authFirebase.getAuth();
      const user = auth.currentUser;
      if (!user) throw new Error('User not found');

      await user.updatePassword(newPassword);
    } catch (e) {
      const errorMessage = firebaseErrorHandler(e as AuthError);
      return rejectWithValue(errorMessage);
    }
  },
);
