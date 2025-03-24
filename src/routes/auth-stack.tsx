import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {ParamsList} from '../types';
import {SignInScreen} from '../screens/Auth/SignInScreen';
import {SignUpScreen} from '../screens/Auth/SignUpScreen';

const Stack = createNativeStackNavigator<ParamsList['Auth']>();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="signIn" screenOptions={{headerShown: false}}>
      <Stack.Screen name="signIn" component={SignInScreen} options={{animation: 'fade'}} />
      <Stack.Screen name="signUp" component={SignUpScreen} options={{animation: 'fade'}} />
    </Stack.Navigator>
  );
}
