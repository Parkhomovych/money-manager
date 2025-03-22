import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../pages/Auth/SignInScreen';
import SignUpScreen from '../pages/Auth/SignUpScreen';
import type {AuthStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="signIn">
      <Stack.Screen name="signIn" component={SignInScreen} />
      <Stack.Screen name="signUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
