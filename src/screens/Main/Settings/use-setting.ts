import {Alert} from 'react-native';
import {useAppDispatch, useAppSelector, useInput} from '../../../hooks';
import {updateProfile} from '../../../store/UserSlice/thunks/updateProfile';
import {deleteUser} from '../../../store/UserSlice/thunks/deleteUser';
import type {UpdateUserData} from '../../../store/UserSlice/types';

export const useSettings = () => {
  const dispatch = useAppDispatch();
  const {user, error, loading} = useAppSelector(state => state.user);
  const [name, bindName] = useInput(user?.name || '');
  const [email, bindEmail] = useInput(user?.email || '');

  const handleUpdateProfile = async () => {
    try {
      const updateData: UpdateUserData = {
        name: name !== user?.name ? name : undefined,
        email: email !== user?.email ? email : undefined,
      };

      await dispatch(updateProfile(updateData)).unwrap();
      Alert.alert('Успіх', 'Профіль успішно оновлено');
    } catch (err) {
      Alert.alert('Помилка', 'Не вдалося оновити профіль');
    }
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Видалення акаунту',
      'Ви впевнені, що хочете видалити свій акаунт? Ця дія незворотна.',
      [
        {
          text: 'Скасувати',
          style: 'cancel',
        },
        {
          text: 'Видалити',
          style: 'destructive',
          onPress: async () => {
            try {
              await dispatch(deleteUser()).unwrap();
              Alert.alert('Успіх', 'Ваш акаунт успішно видалено');
            } catch (err) {
              Alert.alert('Помилка', 'Не вдалося видалити акаунт');
            }
          },
        },
      ],
    );
  };

  return {
    bindName,
    bindEmail,
    handleUpdateProfile,
    handleDeleteAccount,
    error,
    loading,
  };
};
