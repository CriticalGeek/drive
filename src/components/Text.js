import React from 'react';
import {Text} from 'react-native';

import styles from '../scss/components/text.scss';

export default (props) => {
  let fontWeight, fontSize;

  if (props.bold) {
    fontWeight = styles.bold;
  }
  if (props.light) {
    fontWeight = styles.light;
  }

  if (props.small) {
    fontSize = styles.small;
  }

  return (
    <Text style={{...styles.text, ...fontWeight, ...fontSize, ...props.style}}>
      {props.children}
    </Text>
  );
};
