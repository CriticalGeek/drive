import React from 'react';
import {Text} from 'react-native';

import styles from '~/scss/components/heading.scss';

export default (props) => {
  return (
    <Text style={{...styles.heading, ...props.style}}>{props.children}</Text>
  );
};
