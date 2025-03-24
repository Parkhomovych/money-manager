import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../../theme/colors';

export const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.surface,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.textPrimary,
      marginLeft: 16,
    },
    section: {
      backgroundColor: theme.surface,
      borderRadius: 16,
      padding: 16,
      margin: 16,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.textPrimary,
      marginBottom: 16,
    },
    settingItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    settingItemLast: {
      borderBottomWidth: 0,
    },
    settingLabel: {
      fontSize: 16,
      color: theme.textPrimary,
    },
    settingValue: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    settingValueText: {
      fontSize: 16,
      color: theme.textSecondary,
      marginRight: 8,
    },
    switch: {
      transform: [{scaleX: 0.9}, {scaleY: 0.9}],
    },
    logoutButton: {
      backgroundColor: theme.error,
      padding: 16,
      borderRadius: 12,
      alignItems: 'center',
      margin: 16,
      shadowColor: theme.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 4,
    },
    logoutButtonText: {
      color: theme.textOnPrimary,
      fontSize: 16,
      fontWeight: '600',
    },
    editContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      marginLeft: 16,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: theme.textPrimary,
      paddingVertical: 8,
      paddingHorizontal: 12,
      backgroundColor: theme.input,
      borderRadius: 8,
      marginRight: 8,
      borderWidth: 1,
      borderColor: theme.border,
    },
    inputFocused: {
      borderColor: theme.primary,
      borderWidth: 2,
    },
    icon: {
      width: 32,
      height: 32,
      borderRadius: 8,
      backgroundColor: theme.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    version: {
      textAlign: 'center',
      fontSize: 12,
      color: theme.textSecondary,
      marginTop: 8,
      marginBottom: 16,
    },
  });
