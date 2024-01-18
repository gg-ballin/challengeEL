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
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
