import React from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSettings} from './use-setting';
import {getStyles} from './styles';
import {useTheme} from '../../../theme/use-theme';
import {CurrencyModal} from './currencyModal';

const Settings = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {
    settings,
    handleLogout,
    handleTheme,
    handleUpdateCurrency,
    isModalVisible,
    setTrue,
    setFalse,
    selectedCurrency,
  } = useSettings();

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
            onValueChange={handleTheme}
            style={styles.switch}
            trackColor={{false: theme.border, true: theme.primary}}
            thumbColor={theme.surface}
          />
        </View>
        <View style={[styles.settingItem, styles.settingItemLast]}>
          <View style={styles.icon}>
            <Text style={styles.currencyIcon}>{selectedCurrency?.symbol}</Text>
          </View>
          <Text style={styles.settingLabel}>Currency</Text>

          <TouchableOpacity style={styles.settingValue} onPress={setTrue}>
            <Text style={styles.settingValueText}>{selectedCurrency?.value}</Text>
            <Icon name="chevron-right" size={20} color={theme.textSecondary} />
          </TouchableOpacity>
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
            style={styles.switch}
            trackColor={{false: theme.border, true: theme.primary}}
            thumbColor={theme.surface}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>

      <Text style={styles.version}>Version 1.0.0</Text>
      <CurrencyModal
        isModalVisible={isModalVisible}
        setFalse={setFalse}
        handleUpdateCurrency={handleUpdateCurrency}
        selectedCurrency={selectedCurrency?.value}
      />
    </View>
  );
};

export default Settings;
