import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {ParamsList} from '../types';
import {SignInScreen} from '../screens/Auth/SignInScreen';
import {SignUpScreen} from '../screens/Auth/SignUpScreen';

const Stack = createNativeStackNavigator<ParamsList['Auth']>();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="signIn" screenOptions={{headerShown: false}}>
      <Stack.Screen name="signIn" options={{animation: 'fade'}} component={SignInScreen} />
      <Stack.Screen name="signUp" options={{animation: 'fade'}} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
