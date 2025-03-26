import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../../../../../theme/use-theme';
import {getStyles} from './styles';
import {exchangeCurrency} from '../../../../../utils';
import {selectCurrency, useAppSelector} from '../../../../../store';

type Props = {balance: number; openModal: () => void};

export const BalanceCard = ({balance, openModal}: Props) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const currency = useAppSelector(selectCurrency);

  const selectedCurrency = currency.find(i => i.selected) || currency[0];
  const balanceInCurrency = exchangeCurrency(
    selectedCurrency.value,
    selectedCurrency.rate,
    balance,
  );

  return (
    <TouchableOpacity style={styles.balanceCard} onPress={openModal}>
      <View style={styles.balanceCardBackground} />
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={[styles.balanceAmount, balance < 0 && {color: theme.error}]}>
        {selectedCurrency?.symbol} {balanceInCurrency}
      </Text>
    </TouchableOpacity>
  );
};
