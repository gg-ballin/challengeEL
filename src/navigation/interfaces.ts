import {NativeStackScreenProps} from '@react-navigation/native-stack';

// export type StackScreenParams = {
//   HomeStack: undefined;
//   ImageDetailStack: undefined;
//   CameraViewStack: undefined;
// };
export type HomeStackScreenParams = {
  HomeStack: undefined;
};
export type ImageDetailStackScreenParams = {
  ImageDetailStack: undefined;
};
export type CameraViewStackScreenParams = {
  CameraViewStack: undefined;
};

export type RootScreenParams = HomeStackScreenParams &
  ImageDetailStackScreenParams &
  CameraViewStackScreenParams;

export type StackScreenComponent<
  RouteName extends keyof RootScreenParams = keyof RootScreenParams,
> = NativeStackScreenProps<RootScreenParams, RouteName>;
