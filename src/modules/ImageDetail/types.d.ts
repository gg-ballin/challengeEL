import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ImageDetailStackParamList = {
  ImageDetail: {
    navigation: NativeStackNavigationProp<
      ImageDetailStackParamList,
      'ImageDetail'
    >;
  };
};

type ImageDetailProps = {
  navigation: NativeStackNavigationProp<
    ImageDetailStackParamList,
    'ImageDetail'
  >;
};
