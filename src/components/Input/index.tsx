import React from 'react';
import {View, Text, TextInput, TextInputProps, ViewStyle, StyleProp} from 'react-native';
import {useTheme} from '../../theme/use-theme';
import {getStyles} from './styles';
import {useBoolean} from '../../hooks';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  helper?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Input = ({
  label,
  error,
  helper,
  leftIcon,
  rightIcon,
  style,
  containerStyle,
  ...props
}: Props) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const [isFocused, {setTrue, setFalse}] = useBoolean(false);

  const inputContainerStyle = [
    styles.inputContainer,
    isFocused && styles.inputContainerFocused,
    error && styles.inputContainerError,
  ];

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={inputContainerStyle}>
        {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={theme.placeholder}
          onFocus={setTrue}
          onBlur={setFalse}
          {...props}
        />
        {rightIcon ? <View style={styles.rightIcon}>{rightIcon}</View> : null}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {helper && !error ? <Text style={styles.helper}>{helper}</Text> : null}
    </View>
  );
};
