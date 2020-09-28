import React from 'react';
import { Image, View } from 'react-native';

import styles from '~/scss/components/user.scss';

import Heading from './Heading';
import Text from './Text';

export default ({ user }) => {
  return (
    <View style={styles.user}>
      <View style={styles.details}>
        <Image style={styles.logo} source={require('~/assets/img/logo.png')} />
        <View>
          <Heading>{user.name}</Heading>
          <Text>⭐️ dive plus</Text>
        </View>
      </View>

      <Heading>I</Heading>
    </View>
  );
};
