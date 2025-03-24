import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../types';
import {
  signOut,
  updateProfile,
  updatePassword,
  useAppDispatch,
  useAppSelector,
  selectUserSettings,
  selectUser,
  updateUserSettings,
} from '../../../store';

export const useSettings = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps['Root']>();
  const settings = useAppSelector(selectUserSettings);
  const user = useAppSelector(selectUser);

  const handleLogout = async () => {
    try {
      await dispatch(signOut());
      navigation.reset({index: 0, routes: [{name: 'Auth'}]});
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleUpdateSettings = (newSettings: typeof settings) => {
    dispatch(updateUserSettings(newSettings));
  };

  const handleUpdateProfile = async (displayName?: string, photoURL?: string) => {
    try {
      await dispatch(updateProfile({displayName, photoURL}));
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };

  const handleUpdatePassword = async (newPassword: string) => {
    try {
      await dispatch(updatePassword(newPassword));
    } catch (error) {
      console.error('Error updating password:', error);
      throw error;
    }
  };

  return {
    user,
    settings,
    handleLogout,
    handleUpdateSettings,
    handleUpdateProfile,
    handleUpdatePassword,
  };
};
