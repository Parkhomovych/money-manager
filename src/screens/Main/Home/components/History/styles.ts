import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../../../../theme/colors';

export const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    transactionsList: {
      paddingHorizontal: 16,
    },
    recentTransactions: {
      backgroundColor: theme.surface,
      borderRadius: 16,
      padding: 20,
      margin: 16,
      flex: 1,
      shadowColor: theme.shadow,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    section: {
      marginTop: 24,
      paddingHorizontal: 16,
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.textPrimary,
      marginBottom: 16,
    },
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
