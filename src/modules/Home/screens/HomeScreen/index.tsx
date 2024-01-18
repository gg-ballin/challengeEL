import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useCameraPermission} from 'react-native-vision-camera';
import {useSelector} from 'react-redux';

import Header from '../../../../components/Header';
import Button from '../../../../components/Button';
import PhotoGrid from '../../components/PhotoGrid';

import {HomeProps} from '../../types';

import styles from './styles';

const Home = ({navigation}: HomeProps) => {
  const {paths} = useSelector((state: any) => state.image);
  const {hasPermission, requestPermission} = useCameraPermission();
  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);
  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.container}>
        <Header title="Eureka Labs Challenge" />
        <PhotoGrid paths={paths} />
        <Button
          title="Take Picture"
          disabled={paths.length >= 9}
          onPress={() => navigation.navigate('CameraViewStack')}
        />
      </View>
    </>
  );
};

export default Home;
