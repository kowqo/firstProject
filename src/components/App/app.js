import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegPage from '../../views/RegPage';
import Slash from '../../views/SlashPage';
import LoginPage from '../../views/LoginPage';
import HomePage from '../../views/HomePage';

const Stack = createNativeStackNavigator();

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
