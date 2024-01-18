import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStack} from '../../modules/Home/Stack';
import {CameraViewStack} from '../../modules/CameraView/Stack';
import {ImageDetailStack} from '../../modules/ImageDetail/Stack';

const Stack = createNativeStackNavigator();

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
