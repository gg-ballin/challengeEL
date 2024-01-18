import React from 'react';
import {View, SafeAreaView, Image, Text, Alert, Share} from 'react-native';
import {useSelector} from 'react-redux';

import Header from '../../../../components/Header';
import Button from '../../../../components/Button';

import {isAndroid} from '../../../../utils/constants';
import {ImageDetailProps} from '../../types';

import styles from './styles';

const ImageDetail = ({navigation}: ImageDetailProps) => {
  const {imageSelected} = useSelector((state: any) => state.image);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <Header title="Selected Image" goBack={() => navigation.goBack()} />
      <View style={styles.container}>
        {imageSelected && (
          <View style={styles.containerImg}>
            <Image
              style={
                isAndroid
                  ? [styles.image, styles.rotationAndroid]
                  : styles.image
              }
              resizeMode="contain"
              source={{
                uri: imageSelected.path,
              }}
            />
            <View style={styles.latLon}>
              <Text style={styles.txtLatLon}>
                latitude: {imageSelected.latitude}
              </Text>
              <Text style={styles.txtLatLon}>
                longitude: {imageSelected.longitude}
              </Text>
            </View>
            <Button title="Share this picture" onPress={onShare} />
          </View>
        )}
      </View>
    </>
  );
};

export default ImageDetail;
