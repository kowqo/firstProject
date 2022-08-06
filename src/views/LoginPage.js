import { View, Text, StyleSheet, Alert, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ellipses from '../components/Ellipses/Ellipses';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import mainStyles from '../styles/main';
import textStyles from '../styles/textStyles';
import styles from '../styles/loginPageStyle';
import LoginPageImage from '../assets/images/signin.svg';
import { store } from '../store/store';
import useValidate from '../hooks/useValidate';
import KeyboardManager from 'react-native-keyboard-manager';

const LoginPage = ({ navigation }) => {
	const [inputValues, setInputValues] = useState({
		email: '',
		password: '',
	});

	const { errors, onSubmitValidate, onError } = useValidate(['email', 'password']);

	useEffect(() => {
		KeyboardManager.resignFirstResponder();
	}, []);

	KeyboardManager.setEnable(true);
	KeyboardManager.setEnableDebugging(false);
	KeyboardManager.setKeyboardDistanceFromTextField(60);
	KeyboardManager.setLayoutIfNeededOnUpdate(true);
	KeyboardManager.setEnableAutoToolbar(true);
	KeyboardManager.setToolbarDoneBarButtonItemText('Done');
	KeyboardManager.setToolbarManageBehaviourBy('position'); // "subviews" | "tag" | "position"
	KeyboardManager.setToolbarPreviousNextButtonEnable(false);
	KeyboardManager.setToolbarTintColor('#0000FF'); // Only #000000 format is supported
	KeyboardManager.setToolbarBarTintColor('#FFFFFF'); // Only #000000 format is supported
	// KeyboardManager.setShouldShowToolbarPlaceholder(true);
	KeyboardManager.setOverrideKeyboardAppearance(false);
	KeyboardManager.setKeyboardAppearance('default'); // "default" | "light" | "dark"
	KeyboardManager.setShouldResignOnTouchOutside(true);
	KeyboardManager.setShouldPlayInputClicks(true);

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
		<View style={mainStyles.wrapper}>
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
		</View>
	);
};

export default LoginPage;
