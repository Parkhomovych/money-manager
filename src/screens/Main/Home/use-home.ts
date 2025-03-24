import {useCallback, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {
  useAppDispatch,
  TransactionType,
  Transaction,
  useAppSelector,
  selectTransactions,
  selectBalance,
  addTransaction,
  deleteTransaction,
} from '../../../store';

import {useBoolean} from '../../../hooks';

export const useHome = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(selectTransactions);
  const balance = useAppSelector(selectBalance);
  const [isModalVisible, {setTrue, setFalse}] = useBoolean(false);
  const [type, setType] = useState<TransactionType>(TransactionType.EXPENSE);

  const addTransactionHandler = useCallback(
    async (data: Omit<Transaction, 'id' | 'userId'>) => {
      try {
        await dispatch(addTransaction(data)).unwrap();
      } catch (error) {
        console.error('Failed to add transaction:', error);
      }
    },
    [dispatch],
  );

  const deleteTransactionHandler = useCallback(
    async (id: string) => {
      try {
        await dispatch(deleteTransaction({id})).unwrap();
      } catch (error) {
        console.error('Failed to delete transaction:', error);
      }
    },
    [dispatch],
  );

  const goToSettings = useCallback(() => {
    navigation.navigate('Settings' as never);
  }, [navigation]);

  const handleAddTransaction = (data: {amount: number; description: string; category: string}) => {
    const now = moment().toISOString();
    addTransactionHandler({
      ...data,
      type,
      date: now,
      createdAt: now,
      updatedAt: now,
    });
  };

  const openExpenseTransactionModal = () => {
    setType(TransactionType.EXPENSE);
    setTrue();
  };

  const openAddBalanceModal = () => {
    setType(TransactionType.ADD_BALANCE);
    setTrue();
  };

  const openIncomeTransactionModal = () => {
    setType(TransactionType.INCOME);
    setTrue();
  };

  return {
    balance,
    transactions,
    addTransactionHandler,
    deleteTransactionHandler,
    goToSettings,
    handleAddTransaction,
    modal: {
      isVisible: isModalVisible,
      type,
      expense: openExpenseTransactionModal,
      balance: openAddBalanceModal,
      income: openIncomeTransactionModal,
      closeModal: setFalse,
      submit: handleAddTransaction,
    },
  };
};
