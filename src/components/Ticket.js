import React from 'react';
import { View } from 'react-native';

import styles from '~/scss/components/ticket.scss';

import Heading from './Heading';
import Text from './Text';

export default ({ item, style }) => {
  return (
    <View style={{ ...styles.ticket, ...style }}>
      <View style={styles.date}>
        <Heading>01</Heading>
        <Text>Ene</Text>
      </View>
      <View>
        <Text bold>Servicio de estacionamiento</Text>
        <Text small>No. de ticket: {item.number}</Text>
        <Text style={styles.amount}>Total: MXN {item.amount}</Text>
      </View>
    </View>
  );
};
