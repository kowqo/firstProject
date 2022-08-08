import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import buttonStyle from './styles';
const CustomButton = ({ title, onPress = () => {} }) => {
	return (
		<TouchableOpacity style={buttonStyle.button} onPress={onPress}>
			<Text style={buttonStyle.text}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
