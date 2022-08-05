import { StyleSheet } from 'react-native';

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
export default styles;
