import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../../../theme/use-theme';
import {ThemeColors} from '../../../../theme/colors';

export const EmptyHistory = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.emptyTransactions}>
      <Icon name="history" size={48} color={theme.textSecondary} />
      <Text style={styles.emptyTransactionsText}>
        No transactions yet{'\n'}Add your first transaction
      </Text>
    </View>
  );
};

const getStyles = (theme: ThemeColors) =>
  StyleSheet.create({
    emptyTransactions: {
      alignItems: 'center',
      padding: 32,
    },
    emptyTransactionsText: {
      color: theme.textSecondary,
      fontSize: 16,
      textAlign: 'center',
      marginTop: 12,
      lineHeight: 24,
    },
  });
