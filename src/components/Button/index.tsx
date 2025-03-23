import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import {styles} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

export const Button = ({
  title,
  loading,
  style,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled, style]}
      disabled={disabled || loading}
      {...props}>
      {loading ? (
        <ActivityIndicator color={styles.loading.color} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
