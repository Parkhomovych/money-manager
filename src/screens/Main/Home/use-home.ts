import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  useAppDispatch,
  TransactionType,
  useAppSelector,
  selectTransactions,
  selectUser,
  addTransaction,
  deleteTransaction,
  Categories,
  setBalance,
  getCurrencyRate,
} from '../../../store';

import {useBoolean} from '../../../hooks';
import {NavigationProps} from '../../../types';

export const useHome = () => {
  const navigation = useNavigation<NavigationProps['Main']>();
  const dispatch = useAppDispatch();

  const transactions = useAppSelector(selectTransactions);
  const balance = useAppSelector(selectUser)?.balance || 0;

  const [isVisible, {setTrue, setFalse}] = useBoolean(false);
  const [type, setType] = useState<TransactionType>(TransactionType.EXPENSE);

  const deleteTransactionHandler = async (id: string) => {
    try {
      await dispatch(deleteTransaction({id})).unwrap();
    } catch (error) {
      console.error('Failed to delete transaction:', error);
    }
  };
  const goToSettings = () => navigation.navigate('Settings');

  const handleAddTransaction = (data: {
    amount: number;
    description: string;
    category: Categories;
  }) => {
    if (type === TransactionType.ADD_BALANCE) {
      dispatch(setBalance(data.amount));
    } else {
      dispatch(addTransaction({...data, type}));
    }
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
  useEffect(() => {
    dispatch(getCurrencyRate());
  }, [dispatch]);

  return {
    balance,
    transactions,
    deleteTransactionHandler,
    goToSettings,
    modal: {
      type,
      isVisible,
      expense: openExpenseTransactionModal,
      balance: openAddBalanceModal,
      income: openIncomeTransactionModal,
      closeModal: setFalse,
      submit: handleAddTransaction,
    },
  };
};
