import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/home/home';
import CrustPage from './src/screens/crustPage/crust';
import Toppings from './src/screens/toppings/toppings';
import Checkout from './src/screens/checkout/checkout';

const Stack = createStackNavigator();

const App = () => {
  console.log('teste');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Select a Size'}}
        />
        <Stack.Screen
          name="Crust"
          component={CrustPage}
          options={{title: 'Select a Crust'}}
        />
        <Stack.Screen
          name="Toppings"
          component={Toppings}
          options={{title: 'Choose Your Toppings'}}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{title: 'Order Review'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
