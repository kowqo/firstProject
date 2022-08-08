import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { CustomButton, Ellipses, CustomInput } from '../components';
import mainStyles from '../styles/main';
import textStyles from '../styles/textStyles';
import styles from '../styles/loginPageStyle';
import LoginPageImage from '../assets/images/signin.svg';
import { store } from '../store/store';
import useValidate from '../hooks/useValidate';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginPage = ({ navigation }) => {
	const [inputValues, setInputValues] = useState({
		email: '',
		password: '',
	});

	const { errors, onSubmitValidate, onError } = useValidate(['email', 'password']);

	const onSumbit = () => {
		const { email, password } = inputValues;
		if (onSubmitValidate(inputValues)) login(email, password);
	};

	const login = async (email, password) => {
		try {
			let userData = await store.peek(email);
			if (userData) {
				userData = JSON.parse(userData);
				if (email == inputValues.email && password == userData.password) {
					navigation.navigate('HomeScreen', { email });
				} else {
					Alert.alert('Error', 'Invalid details');
				}
			} else {
				Alert.alert('Error', 'User does not exist');
			}
		} catch (error) {
			Alert.alert('Error', 'Unexpected error');
		}
	};

	const onChangeText = (text, input) => {
		setInputValues((state) => ({
			...state,
			[input]: text,
		}));
	};

	return (
		<SafeAreaView style={mainStyles.container}>
			<Ellipses />
			<Text style={StyleSheet.compose(textStyles.header, styles.header)}>Welcome Back!</Text>
			<LoginPageImage style={styles.loginImage} />
			<CustomInput
				rule={'email'}
				textContentType={'emailAddress'}
				placeholder={'Enter your email'}
				onChangeText={(text) => {
					onChangeText(text.trim(), 'email');
				}}
				error={errors.email}
				onFocus={() => {
					onError('', 'email');
				}}
			/>
			<CustomInput
				rule={'password'}
				secureTextEntry
				textContentType={'newPassword'}
				placeholder={'Enter password'}
				onChangeText={(text) => {
					onChangeText(text.trim(), 'password');
				}}
				error={errors.password}
				onFocus={() => {
					onError('', 'password');
				}}
			/>
			<Text style={[styles.text, styles.link, styles.forgot]}>Forgot Password</Text>
			<CustomButton title={'Sign in'} onPress={onSumbit} />
			<View style={styles.signInBlock}>
				<Text style={styles.text}>Don’t have an account?</Text>
				<Text
					onPress={() => {
						navigation.goBack();
					}}
					style={StyleSheet.compose(styles.text, styles.link)}>
					&nbsp;Sign Up
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default LoginPage;
