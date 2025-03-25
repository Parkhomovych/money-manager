import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../../../../theme/colors';

export const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    balanceCard: {
      backgroundColor: theme.primary,
      borderRadius: 16,
      padding: 24,
      marginHorizontal: 16,
      marginVertical: 8,
      position: 'relative',
      overflow: 'hidden',
    },
    balanceCardBackground: {
      position: 'absolute',
      right: -20,
      top: -20,
      width: 120,
      height: 120,
      backgroundColor: theme.primaryLight,
      borderRadius: 60,
      opacity: 0.2,
    },
    balanceTitle: {
      fontSize: 16,
      color: theme.textOnPrimary,
      opacity: 0.9,
      marginBottom: 8,
    },
    balanceAmount: {
      fontSize: 36,
      fontWeight: 'bold',
      color: theme.textOnPrimary,
    },
  });
