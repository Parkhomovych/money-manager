import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: MainStackParamList;
  Auth: AuthStackParamList;
};

export type AuthStackParamList = {
  signIn: undefined;
  signUp: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Settings: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, T>;
