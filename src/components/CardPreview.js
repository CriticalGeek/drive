import React from 'react';
import { View, Image } from 'react-native';

import styles from '~/scss/components/cardpreview.scss';

import Text from './Text';

export default ({ style, info }) => {
  return (
    <View style={{ ...styles.cardpreview, ...style }}>
      <Image style={styles.img} source={{ uri: info.img }} />

      <View style={styles.info}>
        <View>
          <Text small>Nombre del titular</Text>
          <Text style={styles.cardText} bold>
            {info.name}
          </Text>
        </View>
        <Text style={styles.cardText}>**** {info.number}</Text>
      </View>
    </View>
  );
};
