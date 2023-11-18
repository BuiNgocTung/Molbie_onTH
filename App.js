import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './views/Screen1';
import Screen2 from './views/Screen2';
import Screen3 from './views/Screen3';
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import store from './store';
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1'
        screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer> 
    </Provider> )
    ;
}

