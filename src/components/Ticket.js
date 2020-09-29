import React from 'react';
import { View } from 'react-native';
import dayjs from 'dayjs';

import styles from '~/scss/components/ticket.scss';

import Heading from './Heading';
import Text from './Text';

const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

const months = [
  'Ene',
  'feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];

export default ({ item, style }) => {
  const date = dayjs(item.date, 'YYYY-MM-DD HH:mm:ss');
  const month = months[dayjs(date).month()];
  const day = dayjs(date).date();

  return (
    <View style={{ ...styles.ticket, ...style }}>
      <View style={styles.date}>
        <Heading>{day}</Heading>
        <Text>{month}</Text>
      </View>
      <View>
        <Text bold>Servicio de estacionamiento</Text>
        <Text small>No. de ticket: {item.number}</Text>
        <Text style={styles.amount}>Total: MXN {item.amount}</Text>
      </View>
    </View>
  );
};
