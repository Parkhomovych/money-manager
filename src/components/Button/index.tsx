import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {useTheme} from '../../theme/use-theme';
import {getStyles} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  variant?: 'primary' | 'outlined';
}

export const Button = ({
  title,
  loading = false,
  variant = 'primary',
  disabled,
  style,
  ...props
}: Props) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  const buttonStyle = [
    styles.button,
    variant === 'primary' ? styles.buttonPrimary : styles.buttonOutlined,
    disabled && styles.buttonDisabled,
    style,
  ];

  const textStyle = [
    styles.buttonText,
    variant === 'primary' ? styles.buttonTextPrimary : styles.buttonTextOutlined,
    disabled && styles.buttonTextDisabled,
  ];

  return (
    <TouchableOpacity style={buttonStyle} disabled={disabled || loading} {...props}>
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? theme.textOnPrimary : theme.primary}
          style={styles.loading}
        />
      ) : null}
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
