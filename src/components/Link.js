import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {withRouter} from 'react-router-native';

import styles from '../scss/components/link.scss';

export default withRouter((props) => {
  return (
    <TouchableOpacity onPress={() => props.history.push(props.to)}>
      <Text style={styles.link}>{props.children}</Text>
    </TouchableOpacity>
  );
});
