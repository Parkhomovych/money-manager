import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/colors';

export const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      color: theme.textSecondary,
      marginBottom: 8,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.input,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: 16,
    },
    inputContainerFocused: {
      borderColor: theme.primary,
      borderWidth: 2,
    },
    inputContainerError: {
      borderColor: theme.error,
    },
    input: {
      flex: 1,
      height: 48,
      color: theme.textPrimary,
      fontSize: 16,
    },
    icon: {
      marginRight: 12,
    },
    rightIcon: {
      marginLeft: 12,
    },
    error: {
      color: theme.error,
      fontSize: 12,
      marginTop: 4,
    },
    helper: {
      color: theme.textSecondary,
      fontSize: 12,
      marginTop: 4,
    },
  });
