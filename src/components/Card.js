import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from '~/scss/components/card.scss';

import Icon from './Icon';
import Text from './Text';

export default ({ item, onDelete, style }) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      <View style={styles.cardInfo}>
        <Image
          style={styles.logo}
          source={{
            uri: item.imgCard,
          }}
        />
        <Text>**** {item.numberCard}</Text>
      </View>

      <TouchableOpacity onPress={() => onDelete()}>
        <Icon name="trash-outline" />
      </TouchableOpacity>
    </View>
  );
};
