import {useCallback, useState} from 'react';
import {fetchTransactions} from '../../../../../store/TransactionSlice';

import {useAppDispatch} from '../../../../../store';
export const useRefresh = () => {
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      await dispatch(fetchTransactions()).unwrap();
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  }, [dispatch]);

  return {refreshing, handleRefresh};
};
