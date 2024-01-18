import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraView from './screens/CameraView';

export type CameraViewStackParamList = {
  CameraViewStack: undefined;
};

const Stack = createNativeStackNavigator<CameraViewStackParamList>();

export const CameraViewStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CameraViewStack" component={CameraView} />
    </Stack.Navigator>
  );
};
