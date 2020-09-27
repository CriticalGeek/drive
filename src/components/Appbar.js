import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {withRouter} from 'react-router-native';

import styles from '../scss/components/appbar.scss';

import Heading from '../components/Heading';

export default withRouter((props) => {
  var backward = <View style={styles.button} />;

  if (props.hasBackward) {
    backward = (
      <TouchableOpacity onPress={() => props.history.goBack()}>
        <Heading>B</Heading>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{...styles.appbar, ...props.style}}>
      {backward}
      <Heading>DRIVE</Heading>
      <View style={styles.button} />
    </View>
  );
});
