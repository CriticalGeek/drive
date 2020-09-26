import React from 'react';
import {TextInput} from 'react-native';

import styles from '../scss/components/textfield.scss';

export default (props) => {
  return (
    <TextInput
      style={{...styles.textfield, ...props.style}}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChange}
      secureTextEntry={props.secureEntry}
    />
  );
};
