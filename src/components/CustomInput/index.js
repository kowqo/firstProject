import { TextInput, Text, View } from 'react-native';
import React from 'react';
import inputStyles from './styles';

const CustomInput = ({ placeholder, rule, error, ...props }) => {
	const errorText = error ? <Text style={inputStyles.errorText}>{error}</Text> : null;
	const borderColor = error ? { borderColor: 'red' } : { borderColor: '#fff' };
	return (
		<View style={inputStyles.containter}>
			<TextInput
				style={[inputStyles.input, borderColor]}
				placeholder={placeholder}
				placeholderTextColor={'#000'}
				{...props}
			/>
			{errorText}
		</View>
	);
};

export default CustomInput;
