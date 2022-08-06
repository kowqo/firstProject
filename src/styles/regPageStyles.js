import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-end',
		flex: 1,
		position: 'relative',
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
		marginBottom: 66,
	},
	link: {
		fontFamily: 'Poppins-Bold',
		color: '#FFD615',
	},
	bottomBlock: {
		flexDirection: 'row',
		marginTop: 12,
		justifyContent: 'center',
	},
});

export default styles;
