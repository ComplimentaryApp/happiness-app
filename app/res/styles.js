// to import styles use:
// import styles from '<<path>>/styles';
//   path is: ../ -> go out of current folder
//            ./name -> go into folder name (only have the . in front if the entry is the first entry in the path)
// can be used by styles.exampleStyle

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