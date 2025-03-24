import React from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSettings} from './use-setting';
import {getStyles} from './styles';
import {useTheme} from '../../../theme/use-theme';

const Settings = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {settings, handleUpdateSettings, handleLogout} = useSettings();

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.settingItem}>
          <View style={styles.icon}>
            <Icon name="theme-light-dark" size={20} color={theme.primary} />
          </View>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={settings.darkMode}
            onValueChange={value => handleUpdateSettings({...settings, darkMode: value})}
            style={styles.switch}
            trackColor={{false: theme.border, true: theme.primary}}
            thumbColor={theme.surface}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.settingItem}>
          <View style={styles.icon}>
            <Icon name="bell-outline" size={20} color={theme.primary} />
          </View>
          <Text style={styles.settingLabel}>Notifications</Text>
          <Switch
            value={settings.notifications}
            onValueChange={value => handleUpdateSettings({...settings, notifications: value})}
            style={styles.switch}
            trackColor={{false: theme.border, true: theme.primary}}
            thumbColor={theme.surface}
          />
        </View>
        <View style={[styles.settingItem, styles.settingItemLast]}>
          <View style={styles.icon}>
            <Icon name="currency-usd" size={20} color={theme.primary} />
          </View>
          <Text style={styles.settingLabel}>Currency</Text>
          <View style={styles.settingValue}>
            <Text style={styles.settingValueText}>{settings.currency}</Text>
            <Icon name="chevron-right" size={20} color={theme.textSecondary} />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>

      <Text style={styles.version}>Version 1.0.0</Text>
    </View>
  );
};

export default Settings;
