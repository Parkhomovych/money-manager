import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.background,
  },
  section: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  settingItemLast: {
    borderBottomWidth: 0,
  },
  settingLabel: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  settingValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValueText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginRight: 8,
  },
  switch: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
  logoutButton: {
    backgroundColor: COLORS.error,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  logoutButtonText: {
    color: COLORS.background,
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
    color: COLORS.textPrimary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: COLORS.background,
    borderRadius: 8,
    marginRight: 8,
  },
});
