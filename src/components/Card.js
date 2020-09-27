import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from '../scss/components/card.scss';

import Heading from '../components/Heading';
import Text from '../components/Text';

export default ({item, style}) => {
  return (
    <View style={{...styles.card, ...style}}>
      <View style={styles.cardInfo}>
        <Heading style={styles.type}>VISA</Heading>
        <Text>**** {item.numberCard}</Text>
      </View>

      <TouchableOpacity>
        <Heading>D</Heading>
      </TouchableOpacity>
    </View>
  );
};
