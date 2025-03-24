export interface AuthState {
  user: User | null;
  loading: boolean;
  settings: {
    darkMode: boolean;
    notifications: boolean;
    currency: string;
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
};

export interface UpdateUserSettingsPayload {
  darkMode?: boolean;
  notifications?: boolean;
  currency?: string;
  language?: string;
}

export enum AuthErrorCodes {
  INVALID_CREDENTIALS = 'auth/invalid-credential',
  EMAIL_IN_USE = 'auth/email-already-in-use',
  WEAK_PASSWORD = 'auth/weak-password',
  USER_NOT_FOUND = 'auth/user-not-found',
  TOO_MANY_REQUESTS = 'auth/too-many-requests',
}
