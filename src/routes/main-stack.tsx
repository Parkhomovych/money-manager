import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {ParamsList} from '../types';
import HomeScreen from '../screens/Main/Home';
import SettingsScreen from '../screens/Main/Settings';
import {useTheme} from '../theme/use-theme';

const Stack = createNativeStackNavigator<ParamsList['Main']>();

export default function MainStack() {
  const {theme} = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: theme.surface},
        headerTitleStyle: {color: theme.textPrimary},
        headerTintColor: theme.primary,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings', headerBackTitle: 'Home'}}
      />
    </Stack.Navigator>
  );
}
