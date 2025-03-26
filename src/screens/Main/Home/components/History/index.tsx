import {useMemo, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, RefreshControl} from 'react-native';
import {Transaction} from '../../../../../store';
import {useRefresh} from './use-refresh';

import {useTheme} from '../../../../../theme/use-theme';
import {EmptyHistory} from '../EmptyHistory';
import {TransactionItem} from '../ItemTransaction';

import {getStyles} from './styles';
type Props = {
  transactions: Transaction[];
  deleteTransactionHandler: (id: string) => void;
};

export const History = ({transactions, deleteTransactionHandler}: Props) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const [filterBy, setFilterBy] = useState<'all' | 'expense' | 'income'>('all');
  const {refreshing, handleRefresh} = useRefresh();
  console.log('transactions', transactions);

  const filteredTransactions = useMemo(
    () =>
      transactions.filter(transaction => {
        if (filterBy === 'all') return true;
        if (filterBy === 'expense') return transaction.type === 'expense';
        if (filterBy === 'income') return transaction.type === 'income';
      }),
    [transactions, filterBy],
  );

  return (
    <View style={styles.recentTransactions}>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => setFilterBy('all')}>
          <Text style={[styles.filterButtonText, filterBy === 'all' && {color: theme.primary}]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => setFilterBy('expense')}>
          <Text style={[styles.filterButtonText, filterBy === 'expense' && {color: theme.primary}]}>
            Expense
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => setFilterBy('income')}>
          <Text style={[styles.filterButtonText, filterBy === 'income' && {color: theme.primary}]}>
            Income
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      {filteredTransactions.length === 0 ? (
        <EmptyHistory />
      ) : (
        <FlatList<Transaction>
          data={filteredTransactions}
          renderItem={({item}) => (
            <TransactionItem
              transaction={item}
              onDelete={() => deleteTransactionHandler(item.id)}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        />
      )}
    </View>
  );
};
