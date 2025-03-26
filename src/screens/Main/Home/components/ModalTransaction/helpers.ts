import {Categories, TransactionType} from '../../../../../store';

export const getCategories = (type: TransactionType) => {
  switch (type) {
    case TransactionType.EXPENSE:
      return [
        {label: 'Food', value: 'food'},
        {label: 'Transportation', value: 'transportation'},
        {label: 'Entertainment', value: 'entertainment'},
        {label: 'Shopping', value: 'shopping'},
        {label: 'Other', value: 'other'},
      ];
    case TransactionType.INCOME:
      return [
        {label: 'Salary', value: 'salary'},
        {label: 'Freelance', value: 'freelance'},
        {label: 'Investment', value: 'investment'},
        {label: 'Other', value: 'other'},
      ];
    default:
      return [];
  }
};

export const getTitle = (type: TransactionType) => {
  switch (type) {
    case TransactionType.ADD_BALANCE:
      return 'Add Balance';
    case TransactionType.INCOME:
      return 'Add Income';
    case TransactionType.EXPENSE:
      return 'Add Expense';
    default:
      return '';
  }
};

export const isDisabledButton = (
  type: TransactionType,
  amount: string,
  description: string,
  category: Categories | undefined,
) => {
  switch (type) {
    case TransactionType.ADD_BALANCE:
      return !!amount;
    case TransactionType.INCOME:
      return !!amount && !!description && !!category;
    case TransactionType.EXPENSE:
      return !!amount && !!description && !!category;
  }
};
