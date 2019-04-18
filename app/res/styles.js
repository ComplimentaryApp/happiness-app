import { StyleSheet } from 'react-native';
import colors from './colors';

export default styles = StyleSheet.create(
  {
    exampleStyle: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      fontSize: 19, //just for Text component
      fontWeight: 'bold', // just for Text component
      color: colors.mainBlue,
      backgroundColor: colors.mainOrange,
    },
  }
);