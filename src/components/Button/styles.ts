import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  button: {
    height: theme.layout.buttonHeight,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  text: {
    color: theme.colors.textOnPrimary,
    fontSize: theme.typography.sizes.md,
    fontWeight: theme.typography.weights.semiBold,
  },
  disabled: {
    opacity: 0.6,
  },
  loading: {
    color: theme.colors.textOnPrimary,
  },
});
