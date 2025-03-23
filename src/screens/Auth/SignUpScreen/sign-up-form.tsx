import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Entypo';

import {useBoolean} from '../../../hooks';
import {useSignUp} from './use-sing-up';
import {Input, Button} from '../../../components';
import {styles} from './styles';

export const SignUpForm = () => {
  const {form, onSubmit} = useSignUp();
  const [showPassword, showPasswordToggle] = useBoolean(false);
  const [showConfirmPassword, showConfirmPasswordToggle] = useBoolean(false);

  return (
    <View style={styles.form}>
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
            placeholder="Create password"
            secureTextEntry={!showPassword}
            error={error?.message}
            rightIcon={
              <TouchableOpacity onPress={showPasswordToggle}>
                <Icon
                  name={showPassword ? 'eye' : 'eye-with-line'}
                  size={styles.eyeIcon.fontSize}
                  color={styles.eyeIcon.color}
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
            label="Confirm password"
            value={value}
            onChangeText={onChange}
            placeholder="Repeat password"
            secureTextEntry={!showConfirmPassword}
            error={error?.message}
            rightIcon={
              <TouchableOpacity onPress={showConfirmPasswordToggle}>
                <Icon
                  name={showConfirmPassword ? 'eye' : 'eye-with-line'}
                  size={20}
                  color={styles.eyeIcon.color}
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
      {form.formState.errors.root && (
        <Text style={styles.error}>{form.formState.errors.root.message}</Text>
      )}
    </View>
  );
};
