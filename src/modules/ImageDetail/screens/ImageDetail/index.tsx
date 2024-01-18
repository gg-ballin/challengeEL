import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
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
          <Image
            style={styles.image}
            source={{
              uri: imageSelected,
            }}
          />
        )}
      </View>
    </>
  );
};

export default ImageDetail;
