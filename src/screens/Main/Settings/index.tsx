import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {useSettings} from './use-setting';

const SettingsScreen = () => {
  const {
    bindName,
    bindEmail,
    error,
    loading,
    handleUpdateProfile,
    handleDeleteAccount,
  } = useSettings();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          {...bindName}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          {...bindEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleUpdateProfile}
        disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? 'Updating...' : 'Update profile'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.deleteButton, loading && styles.buttonDisabled]}
        onPress={handleDeleteAccount}
        disabled={loading}>
        <Text style={styles.deleteButtonText}>Delete account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
