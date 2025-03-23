import {createAsyncThunk} from '@reduxjs/toolkit';
import {doc, deleteDoc, getDoc, getFirestore} from 'firebase/firestore';
import {getAuth, deleteUser as deleteFirebaseUser} from 'firebase/auth';

export const deleteUser = createAsyncThunk('user/deleteUser', async () => {
  try {
    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Користувач не авторизований');
    }

    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      await deleteDoc(userRef);
    }

    await deleteFirebaseUser(user);

    return true;
  } catch (error) {
    throw error;
  }
});
