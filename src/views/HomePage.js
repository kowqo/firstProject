import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import Ellipses from '../components/Ellipses/Ellipses';
import LogOutIcon from '../components/LogOutIcon/LogOutIcon';
import mainStyles from '../styles/main';
import textStyles from '../styles/textStyles';
import TimerRectangle from '../components/TimerRectangle/TimerRectangle';
import PlusIcon from '../components/PlusIcon/PlusIcon';

const HomePage = () => {
  const userData = { name: 'Andrew' };
  /*   let data = [];
  data = Array(20).fill(231);
  const renderItem = ({ item }) => {
    return <Text style={{}}>{item}</Text>;
  };
  const elements = data.map(renderItem); */
  const onPress = () => {
    Alert.alert('sdads');
  };
  return (
    <View
      style={StyleSheet.compose(mainStyles.container, {
        padding: 0,

        flex: 1,
        justifyContent: 'flex-start',
      })}>
      <Ellipses home={true} />
      <View style={StyleSheet.compose(styles.headerContainer)}>
        <View style={styles.logo}>
          <LogOutIcon />
        </View>
        <Image style={styles.image} source={require('../assets/images/Andrew.png')} />
        <Text style={textStyles.header}>Welcome {userData.name}</Text>
      </View>
      <View style={styles.timer}>
        <TimerRectangle>12</TimerRectangle>
        <View>
          <Text style={styles.text}>:</Text>
        </View>
        <TimerRectangle>10</TimerRectangle>
        <View>
          <Text style={styles.text}>:</Text>
        </View>
        <TimerRectangle>10</TimerRectangle>
      </View>
      <View style={styles.tasksBlock}>
        <Text style={styles.taskH1}>Tasks List</Text>
        <View style={styles.viewTaskContainer}>
          <ScrollView bounces={false} style={[styles.tasksContainer, { paddingBottom: 20 }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.tasksHeader}>Daily Tasks</Text>
              <View onPress={onPress}>
                <PlusIcon></PlusIcon>
              </View>
            </View>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text>213</Text>
            <Text style={styles.tasks}>213</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 250,
    backgroundColor: '#FFD615',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  logo: {
    marginTop: 45,
    marginRight: 21,
    alignSelf: 'flex-end',
  },
  timer: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 42,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '700',
    fontSize: 64,
    alignSelf: 'center',
    marginTop: -9,
    marginHorizontal: 10,
  },
  tasksBlock: {
    marginTop: 43,
  },
  taskH1: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 27,
  },
  viewTaskContainer: {
    marginTop: 29,
    marginBottom: 29,
    width: 325,
    height: 279,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 0,
    },
    borderRadius: 15,
  },
  tasksContainer: {
    width: 325,
    height: 279,
    borderRadius: 15,
    backgroundColor: '#FFF',

    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 24,
  },
  tasks: {
    paddingBottom: 20,
  },
  tasksHeader: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 27,
    marginBottom: 18,
  },

  taskText: {},
});
export default HomePage;
