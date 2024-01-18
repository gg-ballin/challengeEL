import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

type HeaderProps = {
  title: string;
  goBack?: () => void;
};

const Header = ({title, goBack}: HeaderProps) => {
  return (
    <View style={styles.container}>
      {goBack && (
        <Text style={styles.back} onPress={goBack}>
          Back
        </Text>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
