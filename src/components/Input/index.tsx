import React from 'react';
import {View, TextInput, Text, TextInputProps} from 'react-native';
import {styles} from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input = ({label, error, style, ...props}: InputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError, style]}
        placeholderTextColor={styles.placeholder.color}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
