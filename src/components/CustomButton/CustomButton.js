import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import buttonStyle from '../../styles/customButton';
const CustomButton = ({ title, onPress = () => {} }) => {
  return (
    <View>
      <TouchableOpacity style={buttonStyle.button} onPress={onPress}>
        <Text style={buttonStyle.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
