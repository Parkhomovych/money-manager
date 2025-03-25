import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../../../../../theme/use-theme';
import {getStyles} from './styles';

type Props = {
  balance: number;
  openModal: () => void;
};

export const BalanceCard = ({balance, openModal}: Props) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity style={styles.balanceCard} onPress={openModal}>
      <View style={styles.balanceCardBackground} />
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>₴{balance}</Text>
    </TouchableOpacity>
  );
};
