import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton/CustomButton';
import textStyles from '../styles/textStyles';
import Ellipses from '../components/Ellipses/Ellipses';
import mainStyles from '../styles/main';
import SlashPageImage from '../assets/images/slash.svg';
import styles from '../styles/slashPageStyle';

const Slash = ({ navigation }) => {
	return (
		<SafeAreaView style={mainStyles.container}>
			<Ellipses />
			<View style={styles.image}>
				<SlashPageImage />
			</View>
			<Text style={StyleSheet.compose(textStyles.header, styles.header)}>
				Let’s get things done on time
			</Text>
			<Text style={StyleSheet.compose(textStyles.p, styles.p)}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus praesent purus tincidunt ut
				cursus vitae. Nisl, vitae nulla lectus tortor, est a aliquam. Pretium netus{' '}
			</Text>
			<CustomButton title="Get Started" onPress={() => navigation.navigate('Registration')} />
		</SafeAreaView>
	);
};

export default Slash;
