import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '~/scss/components/icon.scss';

export default ({ name, style, ...props }) => (
  <Icon
    style={{ ...style, ...styles.icon }}
    name={Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
    {...props}
  />
);
