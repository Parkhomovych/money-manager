import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../../../../theme/colors';

export const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      backgroundColor: theme.surface,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: 24,
      shadowColor: theme.shadow,
      shadowOffset: {width: 0, height: -2},
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 5,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      color: theme.textPrimary,
    },
    form: {
      gap: 16,
    },
    inputContainer: {
      gap: 8,
    },
    label: {
      fontSize: 14,
      color: theme.textSecondary,
    },
    input: {
      backgroundColor: theme.input,
      borderRadius: 12,
      padding: 16,
      fontSize: 16,
      color: theme.textPrimary,
      borderWidth: 1,
      borderColor: theme.border,
    },
    submitButton: {
      backgroundColor: theme.primary,
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
      marginTop: 8,
    },
    submitButtonText: {
      color: theme.textOnPrimary,
      fontSize: 16,
      fontWeight: '600',
    },
    disabled: {
      opacity: 0.6,
    },
  });
