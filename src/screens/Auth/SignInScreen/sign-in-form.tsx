import React from 'react';
import {View, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import {Input, Button} from '../../../components';
import {useSignIn} from './use-sign-in';
import {styles} from './styles';

export const SignInForm = () => {
  const {form, onSubmit} = useSignIn();

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
            secureTextEntry
            error={error?.message}
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
