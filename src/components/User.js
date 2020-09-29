import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router-native';

import styles from '~/scss/components/user.scss';

import Heading from './Heading';
import Text from './Text';
import Icon from './Icon';

export default withRouter(({ user, history }) => {
  return (
    <View style={styles.user}>
      <View style={styles.details}>
        <Image style={styles.logo} source={require('~/assets/img/logo.png')} />
        <View>
          <Heading>{user.name}</Heading>
          <Text>⭐️ dive plus member</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => history.push('/login')}>
        <Icon name="exit-outline" />
      </TouchableOpacity>
    </View>
  );
});
