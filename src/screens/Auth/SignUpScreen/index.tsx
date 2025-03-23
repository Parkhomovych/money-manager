import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import type {ScreenProps} from '../../../types/navigation';
import {SignUpForm} from './sign-up-form';
import {styles} from './styles';

export const SignUpScreen = ({navigation}: ScreenProps['SignUp']) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Create account</Text>
          <Text style={styles.subtitle}>Fill in the form to create a new account</Text>
        </View>

        <SignUpForm />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('signIn')}>
            <Text style={styles.link}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
