/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useCameraPermission} from 'react-native-vision-camera';
import AppNavigator from './src/navigation/Stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  const {hasPermission, requestPermission} = useCameraPermission();
  useEffect(() => {
    SplashScreen.hide();
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
