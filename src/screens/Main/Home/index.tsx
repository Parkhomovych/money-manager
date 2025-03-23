import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../theme/colors';
import {useHome} from './use-home';
import {styles} from './styles';

const HomeScreen = () => {
  const {balance, handleAddExpense, handleAddIncome, goToSettings} = useHome();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View />
        <TouchableOpacity style={styles.settingsButton} onPress={goToSettings}>
          <Icon name="cog" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.balanceCard}>
        <View style={styles.balanceCardBackground} />
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>₴{balance.toLocaleString()}</Text>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleAddExpense}>
          <View style={styles.actionIconContainer}>
            <Icon name="minus-circle" size={28} color={COLORS.primaryDark} />
          </View>
          <Text style={styles.actionText}>Expenses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleAddIncome}>
          <View style={styles.actionIconContainer}>
            <Icon name="plus-circle" size={28} color={COLORS.primary} />
          </View>
          <Text style={styles.actionText}>Income</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentTransactions}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <View style={styles.emptyTransactions}>
          <Icon
            name="receipt-text-outline"
            size={48}
            color={COLORS.textSecondary}
          />
          <Text style={styles.emptyTransactionsText}>
            No transactions yet{'\n'}Add your first transaction
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
