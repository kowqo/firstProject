import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';

const Task = ({ name, id, comp = false, last = false, onComplete }) => {
  const [complete, setComplete] = useState(comp);

  const lastTaskStyle = !last ? styles.containter : [styles.containter, { marginBottom: 50 }];
  const renderLine = complete ? <View style={styles.completeLine}></View> : null;
  const boxStyles = complete ? [styles.box, styles.complete] : [styles.box];
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onComplete(id);
        setComplete((comp) => !comp);
      }}>
      <View style={[lastTaskStyle]}>
        <View style={boxStyles} />
        <View>
          {renderLine}
          <Text>{name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Task;

const styles = StyleSheet.create({
  containter: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  box: {
    width: 18,
    height: 18,
    borderWidth: 2,
    marginRight: 12,
  },
  complete: {
    backgroundColor: '#FFD615',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    lineHeight: 21,
  },
  completeLine: {
    borderColor: '#FFD615',
    position: 'absolute',
    borderWidth: 2,
    width: 186,
    top: '40%',
    left: -5,
  },
});
