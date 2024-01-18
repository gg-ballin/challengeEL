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
  cameraContainer: {
    alignItems: 'center',
  },
  topBar: {
    // backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    width: '100%',
    position: 'absolute',
    top: 10,
    zIndex: 1,
    // marginTop: 20,
  },
  topBarText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  camera: {
    height: '80%',
    width: '100%',
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: colors.primary,
    margin: 13,
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    paddingHorizontal: 20,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    top: 30,
  },
  innerBtn: {
    backgroundColor: colors.white,
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginHorizontal: 16,
    paddingTop: 8,
    width: 80,
    height: 80,
  },
});
