import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Switch, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../theme/colors';
import {useSettings} from './use-setting';
import {styles} from './styles';

const SettingsScreen = () => {
  const {
    user,
    settings,
    handleLogout,
    handleUpdateSettings,
    handleUpdateProfile,
    handleUpdatePassword,
  } = useSettings();
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(user?.displayName || '');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEditProfile = async () => {
    try {
      await handleUpdateProfile(newName);
      setIsEditingName(false);
      Alert.alert('Success', 'Profile updated successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile');
    }
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      await handleUpdatePassword(newPassword);
      setIsChangingPassword(false);
      setNewPassword('');
      setConfirmPassword('');
      Alert.alert('Success', 'Password updated successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to update password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Name</Text>
          {isEditingName ? (
            <View style={styles.editContainer}>
              <TextInput
                style={styles.input}
                value={newName}
                onChangeText={setNewName}
                placeholder="Enter your name"
              />
              <TouchableOpacity onPress={handleEditProfile}>
                <Icon name="check" size={24} color={COLORS.primary} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsEditingName(false)}>
                <Icon name="close" size={24} color={COLORS.textSecondary} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.settingValue} onPress={() => setIsEditingName(true)}>
              <Text style={styles.settingValueText}>{user?.displayName || 'Set name'}</Text>
              <Icon name="chevron-right" size={24} color={COLORS.textSecondary} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Change Password</Text>
          {isChangingPassword ? (
            <View style={styles.editContainer}>
              <TextInput
                style={styles.input}
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="New password"
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm password"
                secureTextEntry
              />
              <TouchableOpacity onPress={handleChangePassword}>
                <Icon name="check" size={24} color={COLORS.primary} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsChangingPassword(false)}>
                <Icon name="close" size={24} color={COLORS.textSecondary} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.settingValue}
              onPress={() => setIsChangingPassword(true)}>
              <Text style={styles.settingValueText}>Change password</Text>
              <Icon name="chevron-right" size={24} color={COLORS.textSecondary} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={settings.darkMode}
            onValueChange={value => handleUpdateSettings({...settings, darkMode: value})}
            trackColor={{false: COLORS.primaryLight, true: COLORS.primary}}
            thumbColor={COLORS.background}
            style={styles.switch}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Notifications</Text>
          <Switch
            value={settings.notifications}
            onValueChange={value => handleUpdateSettings({...settings, notifications: value})}
            trackColor={{false: COLORS.primaryLight, true: COLORS.primary}}
            thumbColor={COLORS.background}
            style={styles.switch}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Privacy Policy</Text>
          <Icon name="chevron-right" size={24} color={COLORS.textSecondary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Terms of Service</Text>
          <Icon name="chevron-right" size={24} color={COLORS.textSecondary} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.settingItem, styles.settingItemLast]}>
          <Text style={styles.settingLabel}>Version</Text>
          <Text style={styles.settingValue}>1.0.0</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
