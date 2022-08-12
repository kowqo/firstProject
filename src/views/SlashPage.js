import { View, Text, StyleSheet, Platform } from 'react-native';
import React, { useEffect } from 'react';
import textStyles from '../styles/textStyles';
import mainStyles from '../styles/main';
import SlashPageImage from '../assets/images/slash.svg';
import styles from '../styles/slashPageStyle';
import KeyboardManager from 'react-native-keyboard-manager';
import { CustomButton, CustomInput, Ellipses } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';

const Slash = ({ navigation }) => {
	useEffect(() => {
		if (Platform.OS === 'ios') {
			KeyboardManager.resignFirstResponder();
			KeyboardManager.setEnable(true);
		}
	}, []);

	return (
		<SafeAreaView style={mainStyles.container}>
			<Ellipses />
			<SlashPageImage style={styles.image} />
			<Text style={StyleSheet.compose(textStyles.header, styles.header)}>
				Let’s get things done on time
			</Text>
			<Text style={StyleSheet.compose(textStyles.p, styles.p)}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus praesent purus tincidunt ut
				cursus vitae. Nisl, vitae nulla lectus tortor, est a aliquam. Pretium netus{' '}
			</Text>
			<View style={styles.button}>
				<CustomButton title="Get Started" onPress={() => navigation.navigate('Registration')} />
			</View>
		</SafeAreaView>
	);
};

export default Slash;
