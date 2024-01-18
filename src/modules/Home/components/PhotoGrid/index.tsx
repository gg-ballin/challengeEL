import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {selectedImage} from '../../../../redux/slices/imageSlice';

interface PhotoGridProps {
  paths: string[];
}

interface RenderRowProps {
  rowPaths: string[];
  rowIndex: number;
}

const PhotoGrid = ({paths}: PhotoGridProps) => {
  const limitedPaths = paths.slice(0, 9);
  const numRows = Math.ceil(limitedPaths.length / 3);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleImagePress = (path: string) => {
    console.log('path: ', path)
    dispatch(selectedImage(path));
    navigation.navigate('ImageDetailStack');
  };
  const renderRow = ({rowPaths, rowIndex}: RenderRowProps) => (
    <View key={rowIndex} style={styles.row}>
      {rowPaths.map((path, index) => (
        <TouchableOpacity style={styles.frameBtn} onPress={() => handleImagePress(path)}>
          <Image key={index} source={{uri: path}} style={styles.image} />
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
