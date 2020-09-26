import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {withRouter} from 'react-router-native';

import styles from '../scss/components/appbar.scss';

export default withRouter((props) => {
  var backward = <View style={styles.button} />;

  if (props.hasBackward) {
    backward = (
      <TouchableOpacity onPress={() => props.history.goBack()}>
        <Text style={styles.icon}>B</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.appbar}>
      {backward}
      <Text style={styles.title}>DRIVE</Text>
      <View style={styles.button} />
    </View>
  );
});
