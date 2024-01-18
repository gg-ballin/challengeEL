import React, {useEffect, useRef} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {CameraViewStackParamList} from '../../Stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import Button from '../../../../components/Button';
import {useDispatch} from 'react-redux';
import {addPhoto} from '../../../../redux/slices/imageSlice';

type CameraViewProps = {
  navigation: NativeStackNavigationProp<
    CameraViewStackParamList,
    'CameraViewStack'
  >;
};

const CameraView = ({navigation}: CameraViewProps) => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const devices = useCameraDevice('front');
  const camera = useRef(null);
  const dispatch = useDispatch();
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
      dispatch(addPhoto(photo.path));
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
      <View>
        <Camera
          ref={camera}
          style={[styles.camera]}
          device={devices}
          isActive
          photo={true}
        />
        <TouchableOpacity style={styles.btn} onPress={handleTakePhoto}>
          <Text style={styles.btnText}>Take Photo</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default CameraView;
