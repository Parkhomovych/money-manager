import React from 'react';
import {View, TextInput, Text, TextInputProps} from 'react-native';
import {styles} from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  rightIcon?: React.ReactNode;
}

export const Input = ({label, error, style, rightIcon, ...props}: InputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error && styles.inputError, style]}
          placeholderTextColor={styles.placeholder.color}
          {...props}
        />
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
