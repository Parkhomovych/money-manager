import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import type {RootStackParamList} from '../types/navigation';
import {useAppSelector} from '../hooks';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const auth = useAppSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={auth.user ? 'Main' : 'Auth'}>
        {auth.user ? (
          <Stack.Screen name="Main" component={MainStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
