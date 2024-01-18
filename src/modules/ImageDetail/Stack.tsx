import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageDetail from './screens/ImageDetail';

export type ImageDetailStackParamList = {
  ImageDetailStack: undefined;
};

const Stack = createNativeStackNavigator<ImageDetailStackParamList>();

export const ImageDetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ImageDetailStack" component={ImageDetail} />
    </Stack.Navigator>
  );
};
