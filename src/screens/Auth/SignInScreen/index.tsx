import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SignInForm} from './sign-in-form';
import {getStyles} from './styles';
import {useTheme} from '../../../theme/use-theme';
import type {ScreenProps} from '../../../types/navigation';

export const SignInScreen = ({navigation}: ScreenProps['SignIn']) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>Enter your credentials to sign in</Text>
      </View>

      <SignInForm />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity style={styles.signUpLink} onPress={() => navigation.navigate('signUp')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
