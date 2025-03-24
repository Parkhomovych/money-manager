import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../../theme/use-theme';
import {useHome} from './use-home';
import {Transaction} from '../../../store/TransactionSlice/types';
import {EmptyHistory, ModalTransaction, TransactionItem} from './components';
import {getStyles} from './styles';

export const Home = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {balance, transactions, deleteTransactionHandler, goToSettings, modal} = useHome();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View />
        <TouchableOpacity style={styles.settingsButton} onPress={goToSettings}>
          <Icon name="cog" size={24} color={theme.primary} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.balanceCard} onPress={modal.balance}>
        <View style={styles.balanceCardBackground} />
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>₴{balance}</Text>
      </TouchableOpacity>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton} onPress={modal.income}>
          <View style={styles.actionIconContainer}>
            <Icon name="plus-circle" size={28} color={theme.primary} />
          </View>
          <Text style={styles.actionText}>Expenses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={modal.income}>
          <View style={styles.actionIconContainer}>
            <Icon name="plus-circle" size={28} color={theme.primary} />
          </View>
          <Text style={styles.actionText}>Income</Text>
        </TouchableOpacity>
      </View>

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

      <ModalTransaction
        visible={modal.isVisible}
        onClose={modal.closeModal}
        onSubmit={modal.submit}
        type={modal.type}
      />
    </SafeAreaView>
  );
};

export default Home;
