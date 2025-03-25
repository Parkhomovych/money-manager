export enum TransactionType {
  ADD_BALANCE = 'add_balance',
  INCOME = 'income',
  EXPENSE = 'expense',
}

export interface Transaction {
  id: string;
  userId: string;
  type: TransactionType;
  amount: number;
  description: string;
  category: Categories;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionState {
  transactions: Transaction[];
  balance: number;
  loading: boolean;
  error: string | null;
}

export interface AddTransactionPayload {
  type: TransactionType;
  amount: number;
  description: string;
  category: Categories;
}

export interface UpdateBalancePayload {
  amount: number;
}

export interface DeleteTransactionPayload {
  id: string;
}

export interface FetchTransactionsResponse {
  transactions: Transaction[];
  balance: number;
}

export type Categories = CategoriesFood | CategoriesIncome;
type CategoriesIncome = 'salary' | 'bonus' | 'gift' | 'other';
type CategoriesFood = 'food' | 'transportation' | 'entertainment' | 'shopping' | 'other';
