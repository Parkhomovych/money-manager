import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Entypo';

import {useBoolean} from '../../../hooks';
import {useSignIn} from './use-sign-in';
import {Input, Button} from '../../../components';
import {styles} from './styles';

export const SignInForm = () => {
  const {form, onSubmit} = useSignIn();
  const [showPassword, showPasswordToggle] = useBoolean(false);

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
            placeholder="Enter your password"
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

      <Button
        title="Sign in"
        onPress={form.handleSubmit(onSubmit)}
        loading={form.formState.isSubmitting}
      />

      {form.formState.errors.root && (
        <Text style={styles.error}>{form.formState.errors.root.message}</Text>
      )}
    </View>
  );
};
