import { StyleSheet } from 'react-native';

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

export default styles;