import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

const Task = ({ text, id, comp = false, onComplete }) => {
	const [complete, setComplete] = useState(comp);

	const renderLine = complete ? <View style={styles.completeLine}></View> : null;

	const boxStyles = complete ? [styles.box, styles.complete] : [styles.box];

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				onComplete(id);
				setComplete((comp) => !comp);
			}}>
			<View style={styles.containter}>
				<View style={boxStyles} />
				<View>
					{renderLine}
					<Text>{text}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default Task;
