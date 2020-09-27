import React from 'react';
import {StatusBar, View} from 'react-native';

import AppRoute from './Router';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar />
        <AppRoute />
      </View>
    );
  }
}

export default App;
