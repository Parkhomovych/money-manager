import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: theme.spacing.md,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  title: {
    fontSize: theme.typography.sizes.xxl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  form: {
    gap: theme.spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.xs,
    marginTop: theme.spacing.xl,
  },
  footerText: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.textSecondary,
  },
  link: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.medium,
    color: theme.colors.primary,
  },
  error: {
    fontSize: theme.typography.sizes.sm,
    fontFamily: theme.typography.fonts.regular,
    color: theme.colors.error,
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },
  eyeIcon: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.textSecondary,
  },
});
