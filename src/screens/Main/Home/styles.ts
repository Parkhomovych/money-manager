import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primaryLight,
  },
  balanceCard: {
    backgroundColor: COLORS.background,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderLeftWidth: 6,
    borderLeftColor: COLORS.primary,
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.primaryLight,
  },
  balanceCardBackground: {
    position: 'absolute',
    right: -20,
    top: -20,
    width: 120,
    height: 120,
    backgroundColor: COLORS.primary,
    borderRadius: 60,
    opacity: 0.08,
  },
  balanceTitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 8,
    fontWeight: '500',
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
    letterSpacing: -0.5,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },
  actionButton: {
    backgroundColor: COLORS.background,
    borderRadius: 16,
    padding: 20,
    flex: 1,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.primaryLight,
  },
  actionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  actionText: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '600',
  },
  recentTransactions: {
    backgroundColor: COLORS.background,
    borderRadius: 16,
    padding: 20,
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.primaryLight,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.primary,
    letterSpacing: -0.5,
  },
  emptyTransactions: {
    alignItems: 'center',
    padding: 32,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.primaryLight,
  },
  emptyTransactionsText: {
    color: COLORS.textSecondary,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 24,
  },
});
