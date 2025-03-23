import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {AuthStackParamList} from '../types/navigation';
import {SignInScreen} from '../screens/Auth/SignInScreen';
import {SignUpScreen} from '../screens/Auth/SignUpScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="signUp"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="signIn"
        options={{animation: 'fade'}}
        component={SignInScreen}
      />
      <Stack.Screen
        name="signUp"
        options={{animation: 'fade'}}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
}
