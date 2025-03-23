import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSelectionScreen from './screens/LoginSelectionScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import CustomerPage from './screens/CustomerPage';
import BusinessLoginScreen from './screens/BusinessLoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginSelection" component={LoginSelectionScreen} />
        <Stack.Screen name="CustomerLogin" component={LoginScreen} />
        <Stack.Screen name="BusinessLogin" component={BusinessLoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="CustomerPage" component={CustomerPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
