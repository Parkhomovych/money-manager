import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {useTheme} from '../../../../theme/use-theme';
import {Transaction, TransactionType} from '../../../../store/TransactionSlice/types';

interface TransactionItemProps {
  transaction: Transaction;
  onDelete: () => void;
}

export const TransactionItem = ({transaction, onDelete}: TransactionItemProps) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const isIncome = transaction.type === TransactionType.INCOME;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          name={isIncome ? 'arrow-down-circle' : 'arrow-up-circle'}
          size={32}
          color={isIncome ? theme.success : theme.error}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.description}>{transaction.description}</Text>
          <Text style={[styles.amount, isIncome ? styles.income : styles.expense]}>
            {isIncome ? '+' : '-'}₴{transaction.amount.toLocaleString()}
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.category}>{transaction.category}</Text>
          <Text style={styles.date}>{moment(transaction.date).format('MMM D, YYYY')}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Icon name="delete-outline" size={24} color={theme.error} />
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.surface,
      borderRadius: 12,
      padding: 12,
      gap: 12,
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: theme.surfaceVariant,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
      gap: 4,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    description: {
      fontSize: 16,
      fontWeight: '500',
      color: theme.textPrimary,
    },
    amount: {
      fontSize: 16,
      fontWeight: '600',
    },
    income: {
      color: theme.success,
    },
    expense: {
      color: theme.error,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    category: {
      fontSize: 14,
      color: theme.textSecondary,
    },
    date: {
      fontSize: 14,
      color: theme.textSecondary,
    },
    deleteButton: {
      padding: 8,
    },
  });
