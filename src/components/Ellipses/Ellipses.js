import { View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
const Ellipses = ({ home }) => {
  return (
    <>
      <View style={[styles.ellipse, styles.leftEllipse, home ? styles.home : styles.all]} />
      <View style={[styles.ellipse, styles.rightEllipse, home ? styles.home : styles.all]} />
    </>
  );
};

const styles = StyleSheet.create({
  ellipse: {
    position: 'absolute',
    width: 173,
    height: 173,
    borderRadius: 100,

    zIndex: 100,
  },
  all: {
    backgroundColor: 'rgba(255, 214, 21, 0.47)',
  },
  leftEllipse: {
    left: -74,
    top: -24,
  },
  rightEllipse: {
    top: -86,
    left: 0,
  },
  home: {
    backgroundColor: 'rgba(255, 252, 238, 0.47)',
  },
});

export default Ellipses;
