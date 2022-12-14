import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
	},
	headerContainer: {
		height: 250,
		backgroundColor: '#FFD615',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 100,
		height: 100,
		marginBottom: 15,
		marginTop: 10,
	},
	logo: {
		marginTop: 20,
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
		marginHorizontal: 10,
	},
	tasksBlock: {
		marginTop: 43,
	},
	taskH1: {
		fontWeight: '700',
		marginBottom: 29,
		alignSelf: 'flex-start',
	},
	tasksHeaderBlock: {
		display: 'flex',
		marginBottom: 16,
		marginTop: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	tasksHeader: {
		fontFamily: 'Poppins-Medium',
		fontWeight: '500',
		fontSize: 18,
		lineHeight: 27,
	},
	listWrapper: {
		height: 279,
		width: 329,
		shadowColor: '#000',
		shadowOpacity: 0.25,
		shadowRadius: 10,
		backgroundColor: '#FFF',
		shadowOffset: {
			width: 4,
			height: 0,
		},
		borderRadius: 10,
	},
	listContent: {
		paddingLeft: 30,
		paddingRight: 27,
		paddingBottom: 25,
	},
	viewTaskContainer: {
		width: 329,
		backgroundColor: '#FFF',
		borderRadius: 15,
	},
});

export default styles;
