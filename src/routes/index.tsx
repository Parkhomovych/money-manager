import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {ParamsList} from '../types';
import {useAppSelector} from '../store';
import AuthStack from './auth-stack';
import MainStack from './main-stack';

const Stack = createNativeStackNavigator<ParamsList['Root']>();

export default function App() {
  const {user} = useAppSelector(state => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name="Main" component={MainStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
