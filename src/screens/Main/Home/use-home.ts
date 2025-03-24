import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../types/navigation';

export const useHome = () => {
  const navigation = useNavigation<NavigationProps['Main']>();
  const balance = 5000;

  const handleAddExpense = () => {};

  const handleAddIncome = () => {};

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return {balance, handleAddExpense, handleAddIncome, goToSettings};
};
