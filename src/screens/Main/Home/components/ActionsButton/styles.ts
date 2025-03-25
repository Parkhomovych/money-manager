import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../../../../theme/colors';

export const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    quickActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      marginVertical: 16,
      gap: 12,
    },
    actionButton: {
      backgroundColor: theme.surface,
      borderRadius: 16,
      padding: 16,
      flex: 1,
      alignItems: 'center',
      shadowColor: theme.shadow,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    actionIconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: theme.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    actionText: {
      fontSize: 14,
      color: theme.textPrimary,
      fontWeight: '600',
    },
  });
