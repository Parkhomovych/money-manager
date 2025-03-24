import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../../theme/colors';

export const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 24,
      justifyContent: 'center',
    },
    header: {
      marginTop: 40,
      marginBottom: 32,
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.textPrimary,
      marginBottom: 8,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: theme.textSecondary,
      textAlign: 'center',
      marginBottom: 32,
    },
    form: {
      marginBottom: 24,
    },
    inputContainer: {
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 14,
      color: theme.textSecondary,
      marginBottom: 8,
    },
    input: {
      backgroundColor: theme.input,
      borderRadius: 12,
      padding: 16,
      color: theme.textPrimary,
      fontSize: 16,
      borderWidth: 1,
      borderColor: theme.border,
    },
    inputFocused: {
      borderColor: theme.primary,
      borderWidth: 2,
    },
    button: {
      backgroundColor: theme.primary,
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonText: {
      color: theme.textOnPrimary,
      fontSize: 16,
      fontWeight: '600',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 24,
    },
    footerText: {
      color: theme.textSecondary,
      fontSize: 14,
    },
    signInLink: {
      marginLeft: 4,
    },
    signInText: {
      color: theme.primary,
      fontSize: 14,
      fontWeight: '600',
    },
    errorContainer: {
      marginBottom: 16,
      backgroundColor: theme.errorLight,
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
      borderRadius: 12,
      padding: 8,
    },
    errorText: {
      textAlign: 'center',
      color: theme.error,
      fontSize: 16,
    },
    errorIcon: {
      fontSize: 24,
    },
  });
