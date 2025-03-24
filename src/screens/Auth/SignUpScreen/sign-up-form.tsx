import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Entypo';
import InfoIcon from 'react-native-vector-icons/AntDesign';

import {useBoolean} from '../../../hooks';
import {useSignUp} from './use-sing-up';
import {Input, Button} from '../../../components';
import {getStyles} from './styles';
import {useTheme} from '../../../theme/use-theme';

export const SignUpForm = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {form, onSubmit} = useSignUp();
  const [showPassword, showPasswordToggle] = useBoolean(false);
  const [showConfirmPassword, showConfirmPasswordToggle] = useBoolean(false);

  return (
    <View style={styles.form}>
      {form.formState.errors.root && (
        <View style={styles.errorContainer}>
          <InfoIcon name="exclamationcircle" size={styles.errorIcon.fontSize} color={theme.error} />
          <Text style={styles.errorText}>{form.formState.errors.root.message}</Text>
        </View>
      )}
      <Controller
        control={form.control}
        name="email"
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <Input
            label="Email"
            value={value}
            onChangeText={onChange}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            error={error?.message}
          />
        )}
      />

      <Controller
        control={form.control}
        name="password"
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <Input
            label="Password"
            value={value}
            onChangeText={onChange}
            placeholder="Create a password"
            secureTextEntry={!showPassword}
            error={error?.message}
            rightIcon={
              <TouchableOpacity onPress={showPasswordToggle}>
                <Icon
                  name={showPassword ? 'eye' : 'eye-with-line'}
                  size={24}
                  color={theme.textSecondary}
                />
              </TouchableOpacity>
            }
          />
        )}
      />

      <Controller
        control={form.control}
        name="confirmPassword"
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <Input
            label="Confirm Password"
            value={value}
            onChangeText={onChange}
            placeholder="Confirm your password"
            secureTextEntry={!showConfirmPassword}
            error={error?.message}
            rightIcon={
              <TouchableOpacity onPress={showConfirmPasswordToggle}>
                <Icon
                  name={showConfirmPassword ? 'eye' : 'eye-with-line'}
                  size={24}
                  color={theme.textSecondary}
                />
              </TouchableOpacity>
            }
          />
        )}
      />

      <Button
        title="Sign up"
        onPress={form.handleSubmit(onSubmit)}
        loading={form.formState.isSubmitting}
      />
    </View>
  );
};
