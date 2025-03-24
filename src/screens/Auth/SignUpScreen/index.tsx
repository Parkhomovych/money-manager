import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SignUpForm} from './sign-up-form';
import {getStyles} from './styles';
import {useTheme} from '../../../theme/use-theme';
import type {ScreenProps} from '../../../types/navigation';

export const SignUpScreen = ({navigation}: ScreenProps['SignUp']) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
      </View>

      <SignUpForm />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity style={styles.signInLink} onPress={() => navigation.navigate('signIn')}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
