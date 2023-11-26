import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import redux from './views/Redux';
import Api from './views/Api';
import main from './views/Main';
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import store from './Redux/store';
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'
        screenOptions={{ headerShown: true }} >
        <Stack.Screen name="Main" component={main} />
        <Stack.Screen name="Api" component={Api} />
        <Stack.Screen name="redux" component={redux} />
 
      </Stack.Navigator>
    </NavigationContainer> 
    </Provider> )
    ;
}

