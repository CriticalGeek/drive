import React from 'react';
import {TouchableOpacity} from 'react-native';

import styles from '../scss/components/button.scss';

import Text from '../components/Text';

export default (props) => {
  let mode = styles.button;
  let callback = () => '';

  if (props.block) {
    mode = styles.block;
  }
  if (props.outlined) {
    mode = styles.outlined;
  }

  if (props.onPress) {
    callback = () => props.onPress();
  }

  return (
    <TouchableOpacity
      style={{...mode, ...props.style}}
      onPress={() => callback()}>
      <Text
        style={props.outlined ? styles.buttonTextOutlined : styles.buttonText}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};
