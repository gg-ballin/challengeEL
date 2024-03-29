import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  rotationAndroid: {
    transform: [{rotate: '90deg'}],
  },
  frameBtn: {
    borderWidth: 1,
  },
});
