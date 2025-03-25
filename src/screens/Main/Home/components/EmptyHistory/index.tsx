import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../../../../theme/use-theme';
import {getStyles} from './styles';

export const EmptyHistory = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.emptyTransactions}>
      <Icon name="history" size={48} color={theme.textSecondary} />
      <Text style={styles.emptyTransactionsText}>
        No transactions yet{'\n'}Add your first transaction
      </Text>
    </View>
  );
};
