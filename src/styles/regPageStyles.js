import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e5e5e5',
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexGrow: 1,
	},
	text: {
		fontFamily: 'Poppins-Light',
		fontSize: 14,
		lineHeight: 21,
		textAlign: 'center',
	},
	header: {
		marginBottom: 16,
	},
	p: {
		marginBottom: 85,
	},
	link: {
		fontFamily: 'Poppins-Bold',
		color: '#FFD615',
	},
	bottomBlock: {
		flexDirection: 'row',
		marginTop: 22,
		justifyContent: 'center',
		marginBottom: 45,
	},
});

export default styles;
