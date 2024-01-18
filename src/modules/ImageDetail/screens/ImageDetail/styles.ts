import {StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: colors.secondary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  containerImg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '75%',
  },
  rotationAndroid: {
    transform: [{rotate: '90deg'}],
  },
  latLon: {
    marginVertical: 20,
  },
  txtLatLon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
    textAlign: 'left',
  },
});
