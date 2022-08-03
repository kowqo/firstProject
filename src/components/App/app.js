import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegPage from '../../views/RegPage';
import Slash from '../../views/SlashPage';
import LoginPage from '../../views/LoginPage';
import HomePage from '../../views/HomePage';
import { Cache } from 'react-native-cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export const cache = new Cache({
  namespace: 'toDoMobApp',
  policy: {
    maxEntries: 50000, // if unspecified, it can have unlimited entries
    stdTTL: 0, // the standard ttl as number in seconds, default: 0 (unlimited)
  },
  backend: AsyncStorage,
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Slash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Slash" component={Slash} />
        <Stack.Screen name="HomeScreen" component={HomePage} />
        <Stack.Screen name="LoginScreen" component={LoginPage} />
        <Stack.Screen name="Registration" component={RegPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
