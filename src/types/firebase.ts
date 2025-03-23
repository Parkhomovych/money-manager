export interface User {
  id: string;
  email: string;
  name: string;
  balance: number;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  description: string;
  date: Date;
}

export interface UserSettings {
  userId: string;
  currency: string;
  theme: 'light' | 'dark';
  notifications: boolean;
}
