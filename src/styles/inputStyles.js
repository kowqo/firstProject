import { StyleSheet } from 'react-native';

const inputStyles = StyleSheet.create({
  containter: {
    width: 309,
    height: 49,
    marginBottom: 26,
  },
  input: {
		height: 49,
		backgroundColor: 'white',
    borderRadius: 30,
    paddingLeft: 40,

    fontFamily: 'Poppins-Light',
  },
  errorText: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    color: 'red',
  },
});
export default inputStyles;
