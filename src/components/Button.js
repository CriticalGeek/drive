import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from '../scss/components/button.scss';

export default (props) => {
  const mode = props.block ? styles.buttonBlock : styles.button;

  return (
    <TouchableOpacity style={{...mode, ...props.style}}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
