import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {useTheme} from '../../../../../theme/use-theme';
import {Transaction, TransactionType} from '../../../../../store';
import {getStyles} from './styles';
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
