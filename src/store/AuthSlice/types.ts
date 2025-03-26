export interface AuthState {
  user: User | null;
  loading: boolean;
  settings: {
    darkMode: boolean;
    notifications: boolean;
    currency: Currency[];
  };
}

export interface AuthResponse {
  user: User | null;
  error: string | null;
}

export type AuthError = {
  code: AuthErrorCodes;
  message: string;
};

export type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  balance: number;
};

export type Currency = {
  value: CurrencyValue;
  symbol: CurrencySymbol;
  rate: number;
  selected: boolean;
};
export type CurrencyRateResponse = {
  rates: {USD: number; EUR: number; GBP: number; UAH: number};
};
export type CurrencyValue = 'UAH' | 'USD' | 'EUR' | 'GBP';
export type CurrencySymbol = '₴' | '$' | '€' | '£';

export enum AuthErrorCodes {
  INVALID_CREDENTIALS = 'auth/invalid-credential',
  EMAIL_IN_USE = 'auth/email-already-in-use',
  WEAK_PASSWORD = 'auth/weak-password',
  USER_NOT_FOUND = 'auth/user-not-found',
  TOO_MANY_REQUESTS = 'auth/too-many-requests',
}
