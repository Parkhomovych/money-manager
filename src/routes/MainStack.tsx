import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {MainStackParamList} from '../types/navigation';
import HomeScreen from '../screens/Main/Home';
import SettingsScreen from '../screens/Main/Settings';

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
