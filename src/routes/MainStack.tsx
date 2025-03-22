import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/Main/Home';
import SettingsScreen from '../pages/Main/Settings';
import type {MainStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
