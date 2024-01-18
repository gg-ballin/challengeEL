import React from 'react';
import {View, SafeAreaView, Image, Text} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import Header from '../../../../components/Header';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ImageDetailStackParamList} from '../../Stack';

type ImageDetailProps = {
  navigation: NativeStackNavigationProp<
    ImageDetailStackParamList,
    'ImageDetail'
  >;
};

const ImageDetail = ({navigation}: ImageDetailProps) => {
  const {imageSelected} = useSelector((state: any) => state.image);
  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <Header title="Selected Image" goBack={() => navigation.goBack()} />
      <View style={styles.container}>
        {imageSelected && (
          <View style={styles.containerImg}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: imageSelected.path,
              }}
            />
            <View style={styles.latLon}>
              <Text style={styles.txtLatLon}>latitude: {imageSelected.latitude}</Text>
              <Text style={styles.txtLatLon}>longitude: {imageSelected.longitude}</Text>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default ImageDetail;
