import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({title, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={props.disabled ? styles.containerDisabled : styles.container}
      {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
