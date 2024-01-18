import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: colors.secondary,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
  },
  back: {
    position: 'absolute',
    left: 20,
    top: 10,
    color: colors.white,
    fontSize: 20,
  },
});
