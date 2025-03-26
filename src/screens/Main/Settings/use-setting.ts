import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../types';
import {
  signOut,
  useAppDispatch,
  useAppSelector,
  selectUserSettings,
  selectUser,
  CurrencyValue,
  setCurrencySelected,
  toggleTheme,
} from '../../../store';
import {useBoolean} from '../../../hooks';

export const useSettings = () => {
  const [isModalVisible, {setTrue, setFalse}] = useBoolean(false);
  const navigation = useNavigation<NavigationProps['Root']>();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const settings = useAppSelector(selectUserSettings);
  const selectedCurrency =
    settings.currency?.find(currency => currency.selected) || settings.currency[0];

  const handleUpdateCurrency = (currency: CurrencyValue) => {
    dispatch(setCurrencySelected(currency));
  };

  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  const handleLogout = async () => {
    try {
      await dispatch(signOut());
      navigation.reset({index: 0, routes: [{name: 'Auth'}]});
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return {
    user,
    settings,
    selectedCurrency,
    handleTheme,
    handleUpdateCurrency,
    handleLogout,
    isModalVisible,
    setTrue,
    setFalse,
  };
};
