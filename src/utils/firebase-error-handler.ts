import {AuthError, AuthErrorCodes} from '../store/AuthSlice/types';

export const firebaseErrorHandler = (error: AuthError): string => {
  console.log('error', error.code);
  switch (error.code) {
    case AuthErrorCodes.INVALID_CREDENTIALS:
      return 'Invalid credentials';
    case AuthErrorCodes.USER_NOT_FOUND:
      return 'User not found';
    case AuthErrorCodes.EMAIL_IN_USE:
      return 'Email already in use';
    case AuthErrorCodes.TOO_MANY_REQUESTS:
      return 'Too many requests';
    default:
      console.log('unknown firebase code error', error);
      return 'Unknown error';
  }
};
