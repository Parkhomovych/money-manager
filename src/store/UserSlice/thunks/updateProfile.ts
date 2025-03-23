import {createAsyncThunk} from '@reduxjs/toolkit';
import type {UpdateUserData, User} from '../types';
import {doc, updateDoc, getDoc, getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (userData: UpdateUserData) => {
    try {
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;

      if (!user) {
        throw new Error('User is not authorized');
      }

      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        throw new Error('User profile not found');
      }

      const updateData: Record<string, any> = {};
      if (userData.name !== undefined) updateData.name = userData.name;
      if (userData.email !== undefined) updateData.email = userData.email;

      await updateDoc(userRef, updateData);

      const updatedDoc = await getDoc(userRef);
      const updatedUser = updatedDoc.data() as User;

      return updatedUser;
    } catch (error) {
      throw error;
    }
  },
);
