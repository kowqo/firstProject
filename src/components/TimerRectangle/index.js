import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const TimerRectangle = ({ children }) => {
	return (
		<View>
			<View style={styles.container}>
				<View style={styles.lower}></View>
				<Text style={styles.text}>{children}</Text>
			</View>
		</View>
	);
};

export default TimerRectangle;
