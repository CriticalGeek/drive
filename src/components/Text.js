import React from 'react';
import {Text} from 'react-native';

import styles from '../scss/components/text.scss';

export default (props) => {
  return (
    <Text style={{...styles.small, ...props.style}}>{props.children}</Text>
  );
};
