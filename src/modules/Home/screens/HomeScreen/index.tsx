import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import Header from '../../../../components/Header';
import {useCameraPermission} from 'react-native-vision-camera';
import Button from '../../../../components/Button';
import {useSelector} from 'react-redux';
import PhotoGrid from '../../components/PhotoGrid';
import {StackScreenComponent} from '../../../../navigation/interfaces';

const HomeScreen = ({navigation}: StackScreenComponent) => {
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

export default HomeScreen;
