import { View, Text, StyleSheet, Keyboard, Alert } from 'react-native';
import React, { useState } from 'react';
import Ellipses from '../components/Ellipses/Ellipses';
import LoginPageImage from '../components/LoginPageImage/LoginPageImage';
import mainStyles from '../styles/main';
import textStyles from '../styles/textStyles';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { cache } from '../components/App/app';
const LoginPage = ({ navigation }) => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const onSubmitValidate = () => {
    Keyboard.dismiss();
    const { email, password } = inputValues;
    let isValid = true;

    const condition =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!email) {
      onError('please input email', 'email');
      isValid = false;
    } else if (!condition.test(email)) {
      onError('Please input correct email', 'email');
      isValid = false;
    }

    if (!password) {
      onError('Please input password', 'password');
      isValid = false;
    } else if (password.length < 8) {
      onError('Minimal length is 8', 'password');
      isValid = false;
    }

    if (isValid) {
      login(email, password);
    }
  };

  const login = async (email, password) => {
    try {
      let userData = await cache.peek(email);
      if (userData) {
        userData = JSON.parse(userData);
        if (email == inputValues.email && password == userData.password) {
          navigation.navigate('HomeScreen', { email });
        } else {
          Alert.alert('Error', 'Invalid details');
        }
      } else {
        Alert.alert('Error', 'User does not exist');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onError = (errorMessage, input) => {
    setErrors((state) => ({
      ...state,
      [input]: errorMessage,
    }));
  };

  const onChangeText = (text, input) => {
    setInputValues((state) => ({
      ...state,
      [input]: text,
    }));
  };
  return (
    <View style={mainStyles.container}>
      <Ellipses />
      <Text
        style={StyleSheet.compose(textStyles.header, {
          alignSelf: 'flex-start',
          marginLeft: 97,
          marginTop: 236,
          marginBottom: 47,
        })}>
        Welcome Back!
      </Text>
      <View style={{ marginBottom: 47 }}>
        <LoginPageImage />
      </View>
      <CustomInput
        rule={'email'}
        textContentType={'emailAddress'}
        placeholder={'Enter your email'}
        onChangeText={(text) => {
          onChangeText(text.trim(), 'email');
        }}
        error={errors.email}
        onFocus={() => {
          onError('', 'email');
        }}
      />
      <CustomInput
        rule={'password'}
        secureTextEntry
        textContentType={'newPassword'}
        placeholder={'Enter password'}
        onChangeText={(text) => {
          onChangeText(text.trim(), 'password');
        }}
        error={errors.password}
        onFocus={() => {
          onError('', 'password');
        }}
      />
      <Text style={[styles.text, styles.link, { marginBottom: 26 }]}>Forgot Password</Text>
      <CustomButton title={'Sign in'} onPress={onSubmitValidate} />
      <View
        style={StyleSheet.create({
          flexDirection: 'row',
          marginTop: 24,
          justifyContent: 'center',
        })}>
        <Text style={styles.text}>Don’t have an account?</Text>
        <Text
          onPress={() => {
            navigation.goBack();
          }}
          style={StyleSheet.compose(styles.text, styles.link)}>
          {' '}
          Sign Up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },
  link: {
    fontFamily: 'Poppins-Bold',
    color: '#FFD615',
  },
});

export default LoginPage;
