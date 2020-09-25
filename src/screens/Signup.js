import React from 'react';
import {View, Text, Button} from 'react-native';

export default ({history}) => (
  <View>
    <Text>Signup page</Text>
    <Button title="to login screen" onPress={() => history.push('/')} />
  </View>
);
