import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type CameraViewStackParamList = {
  CameraView: {
    navigation: NativeStackNavigationProp<
      CameraViewStackParamList,
      'CameraView'
    >;
  };
};

export type CameraViewProps = {
  navigation: NativeStackNavigationProp<CameraViewStackParamList, 'CameraView'>;
};
