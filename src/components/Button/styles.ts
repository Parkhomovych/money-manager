import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/colors';

export const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    button: {
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 4,
    },
    buttonPrimary: {
      backgroundColor: theme.primary,
    },
    buttonOutlined: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: theme.primary,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 8,
    },
    buttonTextPrimary: {
      color: theme.textOnPrimary,
    },
    buttonTextOutlined: {
      color: theme.primary,
    },
    buttonDisabled: {
      backgroundColor: theme.surface,
      opacity: 0.6,
    },
    buttonTextDisabled: {
      color: theme.textSecondary,
    },
    loading: {
      marginRight: 8,
    },
  });
