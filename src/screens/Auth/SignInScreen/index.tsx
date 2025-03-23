import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SignInForm} from './sign-in-form';
import {styles} from './styles';
import type {SignInScreenProps} from '../../../types/navigation';

export const SignInScreen = ({navigation}: SignInScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.subtitle}>Enter your credentials to sign in</Text>
        </View>

        <SignInForm />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
