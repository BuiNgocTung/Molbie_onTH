import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './Main/Menu';
import CRudAPI from './views/Crud/Api';
import CrudRedux from './Main/MainCrudReudx';
import CrudReduxTK from './Main/MainCrudReduxTK';

import PhepToan from './Main/MainPhepToanRedux';
import PhepToanRTK from './Main/MainPhepToanRTK';
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// import store from './rtk/store';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'
        screenOptions={{ headerShown: true }} >
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="CRudAPI" component={CRudAPI} />
        <Stack.Screen name="CrudRedux" component={CrudRedux} />
        <Stack.Screen name="CrudReduxTK" component={CrudReduxTK} />

        <Stack.Screen name="PhepToan" component={PhepToan} />
        <Stack.Screen name="PhepToanRTK" component={PhepToanRTK} />   
      </Stack.Navigator>
    </NavigationContainer> 
     );
}

