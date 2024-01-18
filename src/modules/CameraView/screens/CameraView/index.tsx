import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

import {addPhoto} from '../../../../redux/slices/imageSlice';

import Button from '../../../../components/Button';

import {isAndroid} from '../../../../utils/constants';
import {CameraViewProps} from '../../types';
import styles from './styles';

const CameraView = ({navigation}: CameraViewProps) => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const devices = useCameraDevice('front');
  const camera = useRef(null);
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const dispatch = useDispatch();

  const onInitialized = useCallback(() => {
    setIsCameraInitialized(true);
  }, []);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const handleTakePhoto = async () => {
    try {
      const photo = await camera?.current?.takePhoto({
        flash: 'off',
      });
      const position: GeolocationResponse =
        await new Promise<GeolocationResponse>((resolve, reject) => {
          Geolocation.getCurrentPosition(
            newPosition => resolve(newPosition),
            error => reject(error),
          );
        });
      const photoData = {
        path: isAndroid ? `file://${photo.path}` : photo.path,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      dispatch(addPhoto(photoData));
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };
  if (!hasPermission) {
    return (
      <>
        <SafeAreaView style={styles.safeArea} />
        <View style={styles.container}>
          <Text style={styles.title}>
            In order for this app to work, you should grant camera permissions
          </Text>
          <Button
            title="Give camera permissions"
            onPress={() => requestPermission()}
          />
        </View>
      </>
    );
  } else {
    return (
      <>
        <SafeAreaView style={styles.safeArea} />
        <View style={styles.cameraContainer}>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.topBarText}>Back</Text>
            </TouchableOpacity>
          </View>
          <Camera
            ref={camera}
            style={[styles.camera]}
            device={devices}
            isActive
            onInitialized={onInitialized}
            photo={true}
          />
          <View style={styles.btn}>
            <TouchableOpacity
              onPress={handleTakePhoto}
              disabled={!isCameraInitialized}
              style={styles.innerBtn}
            />
          </View>
        </View>
      </>
    );
  }
};

export default CameraView;
