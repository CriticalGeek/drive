import React from 'react';
import {View, Text, Button} from 'react-native';

export default ({history}) => (
  <View>
    <Text>Login page</Text>
    <Button title="to signup screen" onPress={() => history.push('/signup')} />
  </View>
);
