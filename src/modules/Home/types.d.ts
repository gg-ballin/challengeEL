import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeStackParamList = {
  Home: {
    navigation: NativeStackNavigationProp<HomeStackParamList, 'Home'>;
  };
};
export type HomeProps = {
  navigation: NativeStackNavigationProp<HomeStackParamList, 'Home'>;
};
