import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../../theme/use-theme';
import {useHome} from './use-home';
import {getStyles} from './styles';

const HomeScreen = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {balance, handleAddExpense, handleAddIncome, goToSettings} = useHome();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View />
        <TouchableOpacity style={styles.settingsButton} onPress={goToSettings}>
          <Icon name="cog" size={24} color={theme.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.balanceCard}>
        <View style={styles.balanceCardBackground} />
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>₴{balance.toLocaleString()}</Text>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleAddExpense}>
          <View style={styles.actionIconContainer}>
            <Icon name="minus-circle" size={28} color={theme.primaryDark} />
          </View>
          <Text style={styles.actionText}>Expenses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleAddIncome}>
          <View style={styles.actionIconContainer}>
            <Icon name="plus-circle" size={28} color={theme.primary} />
          </View>
          <Text style={styles.actionText}>Income</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentTransactions}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <View style={styles.emptyTransactions}>
          <Icon name="history" size={48} color={theme.textSecondary} />
          <Text style={styles.emptyTransactionsText}>
            No transactions yet{'\n'}Add your first transaction
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
