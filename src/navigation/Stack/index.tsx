import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeStack} from '../../modules/Home/Stack';
import {HomeStackParamList} from '../../modules/Home/types';
import {CameraViewStack} from '../../modules/CameraView/Stack';
import {CameraViewStackParamList} from '../../modules/CameraView/types';
import {ImageDetailStack} from '../../modules/ImageDetail/Stack';
import {ImageDetailStackParamList} from '../../modules/ImageDetail/types';

type StackParamList = {
  HomeStack: HomeStackParamList;
  CameraViewStack: CameraViewStackParamList;
  ImageDetailStack: ImageDetailStackParamList;
};

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="CameraViewStack" component={CameraViewStack} />
      <Stack.Screen name="ImageDetailStack" component={ImageDetailStack} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
