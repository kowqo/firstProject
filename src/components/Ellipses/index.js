import { View } from 'react-native';
import React from 'react';
import styles from './styles';

const Ellipses = ({ home }) => {
	return (
		<>
			<View style={[styles.ellipse, styles.leftEllipse, home ? styles.home : styles.all]} />
			<View style={[styles.ellipse, styles.rightEllipse, home ? styles.home : styles.all]} />
		</>
	);
};

export default Ellipses;
