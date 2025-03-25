import React from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../../../theme/use-theme';
import {useHome} from './use-home';
import {ModalTransaction, BalanceCard, ActionsButton, History} from './components';
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

      <BalanceCard balance={balance} openModal={modal.balance} />
      <ActionsButton openIncomeModal={modal.income} openExpenseModal={modal.expense} />
      <History transactions={transactions} deleteTransactionHandler={deleteTransactionHandler} />

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
