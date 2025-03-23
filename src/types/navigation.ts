import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// ParamsList
type AuthStackParamList = {signIn: undefined; signUp: undefined};
type MainStackParamList = {Home: undefined; Settings: undefined};
type RootStackParamList = {Auth: undefined; Main: undefined};

export type ParamsList = {
  Root: RootStackParamList;
  Auth: AuthStackParamList;
  Main: MainStackParamList;
};
// ParamsList

// NavigationProps
type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>;
type AuthNavigationProps = NativeStackNavigationProp<AuthStackParamList>;
type MainNavigationProps = NativeStackNavigationProp<MainStackParamList>;

export type NavigationProps = {
  Root: RootNavigationProps;
  Auth: AuthNavigationProps;
  Main: MainNavigationProps;
};
// NavigationProps

// ScreenProps
type SignUpScreenProps = {navigation: AuthNavigationProps};
type SignInScreenProps = {navigation: AuthNavigationProps};
type HomeScreenProps = {navigation: MainNavigationProps};
type SettingsScreenProps = {navigation: MainNavigationProps};

export type ScreenProps = {
  SignIn: SignInScreenProps;
  SignUp: SignUpScreenProps;
  Home: HomeScreenProps;
  Settings: SettingsScreenProps;
};
// ScreenProps
