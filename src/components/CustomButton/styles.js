import { StyleSheet } from 'react-native';

const buttonStyle = StyleSheet.create({
	button: {
		backgroundColor: '#FFD615',
		width: 309,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000000',
		shadowOffset: {
			width: 10,
			height: 5,
		},
		shadowOpacity: 0.25,
		shadowRadius: 10,
		borderRadius: 10,
		alignSelf: 'center',
	},
	text: {
		fontSize: 22,
		lineHeight: 33,
		fontFamily: 'Poppins-Bold',
	},
});
export default buttonStyle;
