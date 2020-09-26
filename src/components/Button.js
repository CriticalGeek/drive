import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from '../scss/components/button.scss';

export default (props) => {
  return (
    <TouchableOpacity style={props.block ? styles.buttonBlock : styles.button}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
