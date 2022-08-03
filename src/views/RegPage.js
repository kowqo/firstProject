import { View, Text, StyleSheet, ScrollView, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Ellipses from '../components/Ellipses/Ellipses';
import mainStyles from '../styles/main';
import textStyles from '../styles/textStyles';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { cache } from '../components/App/app';
export default function RegPage({ navigation }) {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onSubmitValidate = () => {
    Keyboard.dismiss();
    const { name, email, password, confirmPassword } = inputValues;
    let isValid = true;

    if (!name) {
      onError('please input name', 'name');
      isValid = false;
    } else if (name.length < 5) {
      onError('Minimal length of 5', 'name');
      isValid = false;
    }
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

    if (!confirmPassword) {
      onError('Please confirm password', 'confirmPassword');
      isValid = false;
    } else if (password !== confirmPassword) {
      onError('Passwords do not match', 'confirmPassword');
      isValid = false;
    }

    if (isValid) {
      register(email, name, password);
    }
  };

  const register = async (email, name, password, tasks = []) => {
    try {
      await cache.set(email, JSON.stringify({ password, name, tasks }));
    } catch (error) {}
    navigation.navigate('LoginScreen');
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
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={mainStyles.container}>
        <Ellipses />
        <Text style={StyleSheet.compose(textStyles.header, { marginTop: 279, marginBottom: 16 })}>
          Welcome Onboard!
        </Text>
        <Text style={StyleSheet.compose(textStyles.p, { marginBottom: 66 })}>
          We help you meet up you tasks on time.
        </Text>

        <CustomInput
          rule={'name'}
          textContentType={'name'}
          placeholder={'Enter your full name'}
          onChangeText={(text) => {
            onChangeText(text, 'name');
          }}
          value={inputValues.name}
          error={errors.name}
          onFocus={() => {
            onError('', 'name');
          }}
        />
        <CustomInput
          rule={'email'}
          textContentType={'emailAddress'}
          placeholder={'Enter your email'}
          onChangeText={(text) => {
            onChangeText(text.trim(), 'email');
          }}
          value={inputValues.email}
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
          value={inputValues.password}
          error={errors.password}
          onFocus={() => {
            onError('', 'password');
          }}
        />
        <CustomInput
          rule={'password'}
          secureTextEntry
          textContentType={'password'}
          placeholder={'Confirm password'}
          onChangeText={(text) => {
            onChangeText(text.trim(), 'confirmPassword');
          }}
          value={inputValues.confirmPassword}
          error={errors.confirmPassword}
          onFocus={() => {
            onError('', 'confirmpassword');
          }}
        />
        <CustomButton title={'Registration'} onPress={() => onSubmitValidate()} />
        <View
          style={StyleSheet.create({
            flexDirection: 'row',
            marginTop: 12,
            justifyContent: 'center',
          })}>
          <Text style={styles.text}>Already have an account?</Text>
          <Text
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            style={StyleSheet.compose(styles.text, styles.link)}>
            {' '}
            Sign In
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

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
