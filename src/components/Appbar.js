import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { withRouter } from 'react-router-native';

import styles from '~/scss/components/appbar.scss';

import Heading from './Heading';
import Icon from './Icon';

export default withRouter((props) => {
  var backward = <View style={styles.button} />;

  if (props.hasBackward) {
    backward = (
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.history.goBack()}
      >
        <Icon name="chevron-back" />
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ ...styles.appbar, ...props.style }}>
      {backward}
      <Heading>DRIVE</Heading>
      <View style={styles.button} />
    </View>
  );
});
