import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../../../../theme/colors';

export const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    recentTransactions: {
      backgroundColor: theme.surface,
      borderRadius: 16,
      padding: 16,
      margin: 16,
      flex: 1,
      shadowColor: theme.shadow,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.textPrimary,
      marginVertical: 16,
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: theme.border,
      paddingBottom: 16,
    },
    filterButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
      borderRadius: 24,
      backgroundColor: theme.surface,
      borderWidth: 1,
      borderColor: theme.border,
      marginHorizontal: 4,
    },
    filterButtonText: {
      color: theme.textPrimary,
      fontSize: 16,
    },
  });
