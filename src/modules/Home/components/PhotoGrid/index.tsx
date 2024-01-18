import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {ImageData, selectedImage} from '../../../../redux/slices/imageSlice';

interface PhotoGridProps {
  paths: ImageData[];
}

interface RenderRowProps {
  rowPaths: ImageData[];
  rowIndex: number;
}

const PhotoGrid = ({paths}: PhotoGridProps) => {
  console.log('paths: ', paths);
  const limitedPaths = paths.slice(0, 9);
  const numRows = Math.ceil(limitedPaths.length / 3);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleImagePress = (imageData: ImageData) => {
    dispatch(selectedImage(imageData.path));
    navigation.navigate('ImageDetailStack');
  };

  const renderRow = ({rowPaths, rowIndex}: RenderRowProps) => (
    <View key={rowIndex} style={styles.row}>
      {rowPaths.map((imageData, index) => (
        <TouchableOpacity
          key={index}
          style={styles.frameBtn}
          onPress={() => handleImagePress(imageData)}>
          <Image source={{uri: imageData.path}} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderRows = () => {
    let rows = [];
    for (let i = 0; i < numRows; i++) {
      const startIdx = i * 3;
      const endIdx = startIdx + 3;
      const rowPaths = limitedPaths.slice(startIdx, endIdx);
      rows.push(renderRow({rowPaths, rowIndex: i}));
    }
    return rows;
  };

  return <View style={styles.container}>{renderRows()}</View>;
};

export default PhotoGrid;
