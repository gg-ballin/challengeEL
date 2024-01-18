import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
