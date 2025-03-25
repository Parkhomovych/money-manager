import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../../../../theme/colors';

export const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    emptyTransactions: {
      alignItems: 'center',
      padding: 32,
    },
    emptyTransactionsText: {
      color: theme.textSecondary,
      fontSize: 16,
      textAlign: 'center',
      marginTop: 12,
      lineHeight: 24,
    },
  });
