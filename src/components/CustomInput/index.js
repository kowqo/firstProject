import { StyleSheet, TextInput, Text, View } from 'react-native';
import React from 'react';
import inputStyles from './styles';

const CustomInput = ({ placeholder, rule, error, ...props }) => {

	const errorText = error ? <Text style={inputStyles.errorText}>{error}</Text> : null;

	return (
		<View style={inputStyles.containter}>
			<TextInput
				placeholder={placeholder}
				placeholderTextColor={'#000'}
				style={StyleSheet.compose(inputStyles.input, {
					borderColor: error ? 'red' : '#fff',
					borderWidth: 2,
				})}
				{...props}/>
			{errorText}
		</View>
	);
};

export default CustomInput;
