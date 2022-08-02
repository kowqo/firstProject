import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SlashPageImage from '../components/SlashPageImage/SlashPageImage';
import CustomButton from '../components/CustomButton/CustomButton';
import textStyles from '../styles/textStyles';
import Ellipses from '../components/Ellipses/Ellipses';
import mainStyles from '../styles/main';

const Slash = ({ navigation }) => {
  return (
    <View style={[mainStyles.container,{flex:1}]}>
      <Ellipses />
      <View style={styles.image}>
        <SlashPageImage />
      </View>
      <Text style={StyleSheet.compose(textStyles.header, { marginTop: 42 })}>
        Let’s get things done on time
      </Text>
      <Text
        style={StyleSheet.compose(textStyles.p, { width: 260, marginTop: 19, marginBottom: 83 })}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus praesent purus tincidunt ut
        cursus vitae. Nisl, vitae nulla lectus tortor, est a aliquam. Pretium netus{' '}
      </Text>
      <CustomButton title="Get Started" onPress={() => navigation.navigate('Registration')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    color: '#e5e5e5',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    marginTop: 240,
    alignSelf: 'center',
  },
});
export default Slash;
