import {StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: colors.secondary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  image: {
    width: 350,
    height: 350,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.tertiary,
    padding: 20,
    borderRadius: 10,
    marginBottom: 35,
  },
});
