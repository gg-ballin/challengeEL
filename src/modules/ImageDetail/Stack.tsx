import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ImageDetailStackParamList} from './types';
import ImageDetail from './screens/ImageDetail';

const Stack = createNativeStackNavigator<ImageDetailStackParamList>();

export const ImageDetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ImageDetail" component={ImageDetail} />
    </Stack.Navigator>
  );
};
