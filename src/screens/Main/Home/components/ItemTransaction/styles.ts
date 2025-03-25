import {StyleSheet} from 'react-native';

export const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.surface,
      borderRadius: 12,
      padding: 12,
      gap: 12,
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: theme.surfaceVariant,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
      gap: 4,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    description: {
      fontSize: 16,
      fontWeight: '500',
      color: theme.textPrimary,
    },
    amount: {
      fontSize: 16,
      fontWeight: '600',
    },
    income: {
      color: theme.success,
    },
    expense: {
      color: theme.error,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    category: {
      fontSize: 14,
      color: theme.textSecondary,
    },
    date: {
      fontSize: 14,
      color: theme.textSecondary,
    },
    deleteButton: {
      padding: 8,
    },
  });
