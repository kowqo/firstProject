import { View, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';

const TimerRectangle = ({ children }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.lower}></View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
};

export default TimerRectangle;

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: 69,
    backgroundColor: 'rgba(250, 230, 140, 1)',
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 64,
    fontWeight: '700',
    lineHeight: 85,
    zIndex: 2,
  },
  lower: {
    position: 'absolute',
    top: '50%',
    height: '50%',
    width: '100%',
    backgroundColor: 'rgba(254, 225, 91, 1)',
    borderRadius: 10,
    zIndex: 1,
  },
});
