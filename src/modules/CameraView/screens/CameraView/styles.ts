import {StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  captureButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 45,
  },
  buttonContainer: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    zIndex: 1,
    alignSelf: 'center',
  },
  camera: {
    height: '80%',
    width: '100%',
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: colors.primary,
    margin: 13,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 8,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    marginHorizontal: 16,
    paddingTop: 8,
    width: 80,
    height: 80,
  },
});
