import { StyleSheet, TextInput, Text, View } from 'react-native';
import React, { useState } from 'react';
import inputStyles from '../../styles/inputStyles';
const CustomInput = ({ placeholder, rule, error, ...props }) => {
  const [value, setValue] = useState('');

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
        {...props}></TextInput>
      {errorText}
    </View>
  );
};

export default CustomInput;
