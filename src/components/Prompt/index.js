import React, { useState } from 'react';
import Dialog from 'react-native-dialog';

const Prompt = ({ visible, handleCancel, handleConfirm }) => {
	const [value, setValue] = useState('');

	const onChangeText = (text) => {
		setValue(text);
	};

	return (
		<Dialog.Container visible={visible} onBackdropPress={handleCancel}>
			<Dialog.Title>Enter Task</Dialog.Title>
			<Dialog.Input value={value} onChangeText={onChangeText} placeholder="Enter task" />
			<Dialog.Button
				onPress={() => {
					setValue('');
					handleCancel();
				}}
				label="Cancel"></Dialog.Button>
			<Dialog.Button
				onPress={() => {
					setValue('');
					handleConfirm(value);
				}}
				label="OK"></Dialog.Button>
		</Dialog.Container>
	);
};

export default Prompt;
