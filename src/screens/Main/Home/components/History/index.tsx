import {View, Text, FlatList} from 'react-native';
import {useTheme} from '../../../../../theme/use-theme';
import {getStyles} from './styles';

import {Transaction} from '../../../../../store/TransactionSlice/types';
import {EmptyHistory} from '../EmptyHistory';
import {TransactionItem} from '../ItemTransaction';

type Props = {
  transactions: Transaction[];
  deleteTransactionHandler: (id: string) => void;
};

export const History = ({transactions, deleteTransactionHandler}: Props) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.recentTransactions}>
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      {transactions.length === 0 ? (
        <EmptyHistory />
      ) : (
        <FlatList<Transaction>
          data={transactions}
          renderItem={({item}) => (
            <TransactionItem
              transaction={item}
              onDelete={() => deleteTransactionHandler(item.id)}
            />
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.transactionsList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
