import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.tertiary,
    padding: 20,
    borderRadius: 10,
    marginBottom: 35,
  },
  containerDisabled: {
    backgroundColor: colors.gray,
    padding: 20,
    borderRadius: 10,
    marginBottom: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
});
