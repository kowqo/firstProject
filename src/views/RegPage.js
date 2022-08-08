import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { CustomButton, Ellipses, CustomInput } from '../components';
import mainStyles from '../styles/main';
import textStyles from '../styles/textStyles';
import styles from '../styles/regPageStyles';
import { store } from '../store/store';
import useValidate from '../hooks/useValidate';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegPage({ navigation }) {
	const [inputValues, setInputValues] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { errors, onSubmitValidate, onError, clearErrors } = useValidate();

	const onSubmit = () => {
		const { email, name, password } = inputValues;
		if (onSubmitValidate(inputValues)) register(email, name, password);
	};

	const register = async (email, name, password, tasks = []) => {
		try {
			await store.set(email, JSON.stringify({ password, name, tasks }));
		} catch (error) {}

		navigation.navigate('LoginScreen');
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
			<Text style={StyleSheet.compose(textStyles.header, styles.header)}>Welcome Onboard!</Text>
			<Text style={StyleSheet.compose(textStyles.p, styles.p)}>
				We help you meet up you tasks on time.
			</Text>
			<CustomInput
				rule={'name'}
				textContentType={'name'}
				placeholder={'Enter your full name'}
				onChangeText={(text) => {
					onChangeText(text, 'name');
				}}
				value={inputValues.name}
				error={errors.name}
				onFocus={() => {
					onError('', 'name');
				}}
			/>
			<CustomInput
				rule={'email'}
				textContentType={'emailAddress'}
				placeholder={'Enter your email'}
				onChangeText={(text) => {
					onChangeText(text.trim(), 'email');
				}}
				value={inputValues.email}
				error={errors.email}
				onFocus={() => {
					onError('', 'email');
				}}
				keyboardType="email-address"
			/>
			<CustomInput
				rule={'password'}
				secureTextEntry
				textContentType={'newPassword'}
				placeholder={'Enter password'}
				onChangeText={(text) => {
					onChangeText(text.trim(), 'password');
				}}
				value={inputValues.password}
				error={errors.password}
				onFocus={() => {
					onError('', 'password');
				}}
			/>
			<CustomInput
				rule={'password'}
				secureTextEntry
				textContentType={'password'}
				placeholder={'Confirm password'}
				onChangeText={(text) => {
					onChangeText(text.trim(), 'confirmPassword');
				}}
				value={inputValues.confirmPassword}
				error={errors.confirmPassword}
				onFocus={() => {
					onError('', 'confirmPassword');
				}}
			/>
			<CustomButton title={'Registration'} onPress={onSubmit} />
			<View style={styles.bottomBlock}>
				<Text style={styles.text}>Already have an account?</Text>
				<Text
					onPress={() => {
						clearErrors();
						navigation.navigate('LoginScreen');
					}}
					style={StyleSheet.compose(styles.text, styles.link)}>
					&nbsp;Sign In
				</Text>
			</View>
		</SafeAreaView>
	);
}
