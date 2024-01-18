import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CameraView from './screens/CameraView';
import {CameraViewStackParamList} from './types';

const Stack = createNativeStackNavigator<CameraViewStackParamList>();

export const CameraViewStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CameraView" component={CameraView} />
    </Stack.Navigator>
  );
};
