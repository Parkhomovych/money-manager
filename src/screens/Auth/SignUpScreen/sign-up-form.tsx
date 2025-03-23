import React from 'react';
import {View} from 'react-native';
import {Controller} from 'react-hook-form';

import {Input, Button} from '../../../components';
import {useSignUp} from './use-sing-up';
import {styles} from './styles';

export const SignUpForm = () => {
  const {form, onSubmit} = useSignUp();

  return (
    <View style={styles.form}>
      <Controller
        control={form.control}
        name="name"
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <Input
            label="Name"
            value={value}
            onChangeText={onChange}
            placeholder="Enter your name"
            autoCapitalize="words"
            error={error?.message}
          />
        )}
      />

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
            secureTextEntry
            error={error?.message}
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
            secureTextEntry
            error={error?.message}
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
